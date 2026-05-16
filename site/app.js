const pagesUrl = 'https://shndap.github.io/selab_hw1/';

async function fetchAllBranchCommits(repoUrl) {
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);

  if (!match) {
    throw new Error('Invalid GitHub repository URL');
  }

  const owner = match[1];
  const repo = match[2].replace('.git', '');

  // Optional GitHub token to avoid rate limits
  const headers = {
    Accept: 'application/vnd.github+json',
    // Authorization: `Bearer YOUR_GITHUB_TOKEN`,
  };

  // 1. Fetch all branches
  const branchResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/branches?per_page=100`,
    { headers }
  );

  if (!branchResponse.ok) {
    throw new Error('Failed to fetch branches');
  }

  const branches = await branchResponse.json();

  // 2. Fetch commits for every branch
  const commitPromises = branches.map(async (branchObj) => {
    const branch = branchObj.name;

    const commitResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=100`,
      { headers }
    );

    if (!commitResponse.ok) {
      return [];
    }

    const commits = await commitResponse.json();

    return commits.map((commit) => ({
      branch,
      title: commit.commit.message.split('\n')[0],
      hash: commit.sha.substring(0, 7),
      note:
        commit.commit.message
          .split('\n')
          .slice(1)
          .join(' ')
          .trim() ||
        `Committed by ${commit.commit.author.name}`,

      author: commit.commit.author.name,
      date: commit.commit.author.date,
      url: commit.html_url,
    }));
  });

  // 3. Merge all branch commits
  const allCommits = (await Promise.all(commitPromises)).flat();

  // 4. Remove duplicates (same commit can exist in multiple branches)
  const uniqueCommits = Array.from(
    new Map(allCommits.map((c) => [c.hash, c])).values()
  );

  // 5. Sort newest first
  uniqueCommits.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return uniqueCommits;
}

let commits = [];

async function init() {
  commits = await fetchAllBranchCommits(
    'https://github.com/shndap/selab_hw1'
  );

  console.log(commits);

  renderTimeline();
  renderFaq();
  setTab('overview');
}

const faqItems = [
  {
    question: 'What is the `.git` folder, what does it store, and how is it created?',
    answer:
      '`.git` is the internal Git metadata directory. It stores objects, references, `HEAD`, configuration, the index, and history data. It is created with `git init`.',
  },
  {
    question: 'What does atomic mean in an atomic commit and an atomic pull request?',
    answer:
      'Atomic means one logical change per commit or pull request. The change should be complete, self-contained, and easy to review or revert.',
  },
  {
    question: 'What is the difference between fetch, pull, merge, rebase, and cherry-pick?',
    answer:
      'fetch downloads remote updates without changing the local branch. pull is usually fetch plus merge, or sometimes fetch plus rebase. merge combines two histories and may create a merge commit. rebase rewrites commits onto a new base. cherry-pick applies one specific commit onto the current branch.',
  },
  {
    question: 'What is the difference between reset, revert, restore, switch, and checkout?',
    answer:
      'reset moves `HEAD` and, depending on mode, the index and working tree. revert creates a new commit that undoes a previous commit. restore brings files back from the index or `HEAD`. switch moves between branches. checkout is the older multi-purpose command for switching branches and restoring files.',
  },
  {
    question: 'What is the stage or index, and what does stash do?',
    answer:
      'The stage or index is the middle area between the working tree and a commit. `stash` temporarily stores uncommitted changes so you can switch context and restore them later.',
  },
  {
    question: 'What is a snapshot, and how is it related to a commit?',
    answer:
      'A snapshot is a full picture of the project files at a specific moment. Each Git commit stores a snapshot of the project tree. Official Git reference: https://git-scm.com/book/en/v2/Git-Internals-Git-Objects',
  },
  {
    question: 'What is the difference between a local repository and a remote repository?',
    answer:
      'A local repository lives on your machine and is used for day-to-day development. A remote repository lives on GitHub or another server and is used for collaboration, backup, and deployment.',
  },
];

const copyButton = document.querySelector('[data-copy-url]');
const copyStatus = document.querySelector('[data-copy-status]');
const tabButtons = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');
const timeline = document.querySelector('[data-commit-list]');
const faqList = document.querySelector('[data-faq-list]');

function iconLabel(branch) {
  switch (branch) {
    case 'main':
      return 'main';
    case 'dev':
      return 'dev';
    case 'feature/layout':
      return 'feature';
    case 'feature/content':
      return 'feature';
    case 'hotfix/deploy':
      return 'hotfix';
    default:
      return 'main';
  }
}

function renderTimeline() {
  timeline.innerHTML = commits
    .map(
      ({ branch, title, hash, note }) => `
        <li class="timeline-item">
          <div class="timeline-meta">
            <span class="badge">${iconLabel(branch)}</span>
            <strong>${hash}</strong>
            <span>${branch}</span>
          </div>
          <div class="timeline-body">
            <p><strong>${title}</strong></p>
            <p class="note">${note}</p>
          </div>
        </li>
      `
    )
    .join('');
}

function renderFaq() {
  faqList.innerHTML = faqItems
    .map(
      ({ question, answer }) => `
        <details class="faq-item">
          <summary>
            <span>${question}</span>
            <span aria-hidden="true">+</span>
          </summary>
          <div class="answer">
            <p>${answer}</p>
          </div>
        </details>
      `
    )
    .join('');
}

function setTab(name) {
  tabButtons.forEach((button) => {
    const active = button.dataset.tab === name;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.classList.toggle('is-visible', panel.dataset.panel === name);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => setTab(button.dataset.tab));
  button.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setTab(button.dataset.tab);
    }
  });
});

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(pagesUrl);
    copyStatus.textContent = 'GitHub Pages URL copied to clipboard.';
  } catch (error) {
    copyStatus.textContent = `Clipboard unavailable. Pages URL: ${pagesUrl}`;
  }
});

init();
