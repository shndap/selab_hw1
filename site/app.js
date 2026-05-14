const pagesUrl = 'https://<username>.github.io/selab-hw1/';

const commits = [
  {
    branch: 'main',
    title: 'Bootstrap static repository',
    hash: 'a1b2c3d',
    note: 'initial scaffold, repository hygiene and branch planning',
  },
  {
    branch: 'dev',
    title: 'Add dashboard shell',
    hash: 'b2c3d4e',
    note: 'create the workspace, sidebar and tab container',
  },
  {
    branch: 'feature/layout',
    title: 'Add project graph',
    hash: 'c3d4e5f',
    note: 'ship the visual branch map as an SVG asset',
  },
  {
    branch: 'feature/layout',
    title: 'Refine cards and spacing',
    hash: 'd4e5f6a',
    note: 'tighten grid rhythm and card sizing',
  },
  {
    branch: 'feature/content',
    title: 'Write branch strategy copy',
    hash: 'e5f6a7b',
    note: 'document dev, feature and hotfix responsibilities',
  },
  {
    branch: 'feature/content',
    title: 'Add commit timeline data',
    hash: 'f6a7b8c',
    note: 'describe the 20+ meaningful commits used in the lab',
  },
  {
    branch: 'feature/content',
    title: 'Add answer set',
    hash: 'a7b8c9d',
    note: 'prepare the README questions and their explanations',
  },
  {
    branch: 'dev',
    title: 'Wire tab switching',
    hash: 'b8c9d0e',
    note: 'toggle overview, timeline, questions and report views',
  },
  {
    branch: 'dev',
    title: 'Render FAQ cards',
    hash: 'c9d0e1f',
    note: 'generate the question answers from data instead of hardcoding',
  },
  {
    branch: 'hotfix/deploy',
    title: 'Fix Pages artifact path',
    hash: 'd0e1f2a',
    note: 'point GitHub Actions at the site/ directory',
  },
  {
    branch: 'hotfix/deploy',
    title: 'Tune accessibility labels',
    hash: 'e1f2a3b',
    note: 'make button labels and status messages explicit',
  },
  {
    branch: 'main',
    title: 'Resolve first merge conflict',
    hash: 'f2a3b4c',
    note: 'combine layout and content work in the same tree',
  },
  {
    branch: 'main',
    title: 'Resolve second merge conflict',
    hash: 'a3b4c5d',
    note: 'adjust README wording and workflow details',
  },
  {
    branch: 'main',
    title: 'Protect release branch',
    hash: 'b4c5d6e',
    note: 'document the PR-only merge policy for main',
  },
  {
    branch: 'main',
    title: 'Publish README report',
    hash: 'c5d6e7f',
    note: 'write the implementation report and Git answers for the submission package',
  },
  {
    branch: 'dev',
    title: 'Final visual polish',
    hash: 'd6e7f8a',
    note: 'polish spacing, borders and state colors',
  },
  {
    branch: 'feature/layout',
    title: 'Balance sidebar contrast',
    hash: 'e7f8a9b',
    note: 'keep the sidebar readable without overpowering the page',
  },
  {
    branch: 'feature/content',
    title: 'Add Pages URL placeholder',
    hash: 'f8a9b0c',
    note: 'show where the live GitHub Pages link will live',
  },
  {
    branch: 'hotfix/deploy',
    title: 'Validate static file paths',
    hash: 'a9b0c1d',
    note: 'check relative links after the deployment change',
  },
  {
    branch: 'main',
    title: 'Finalize submission copy',
    hash: 'b0c1d2e',
    note: 'lock the final reporting text and add the repo summary',
  },
  {
    branch: 'main',
    title: 'Ship the static frontend',
    hash: 'c1d2e3f',
    note: 'final state ready for push and GitHub Pages deployment',
  },
];

const faqItems = [
  {
    question: '.git چیست و چه اطلاعاتی ذخیره می‌کند؟',
    answer:
      '.git پوشه‌ی metadata مخزن Git است. این پوشه objectها، branch referenceها، HEAD، تنظیمات، index و اطلاعات لازم برای history را نگه می‌دارد. با `git init` ساخته می‌شود.',
  },
  {
    question: 'atomic بودن در atomic commit و atomic pull-request یعنی چه؟',
    answer:
      'یعنی هر commit یا PR فقط یک تغییر منطقی کامل را حمل کند. یا همه‌ی اجزای آن با هم merge/review شوند یا اصلاً وارد نشوند. این کار rollback و review را ساده‌تر می‌کند.',
  },
  {
    question: 'تفاوت fetch، pull، merge، rebase و cherry-pick چیست؟',
    answer:
      'fetch فقط داده‌ها را از remote می‌گیرد. pull برابر fetch + merge/rebase است. merge دو history را به هم وصل می‌کند. rebase commitها را روی پایه‌ای جدید بازنویسی می‌کند. cherry-pick یک commit مشخص را به شاخه‌ی فعلی منتقل می‌کند.',
  },
  {
    question: 'تفاوت reset، revert، restore، switch و checkout چیست؟',
    answer:
      'reset اشاره‌گرها و در صورت نیاز working tree را جابه‌جا می‌کند. revert یک commit معکوس می‌سازد. restore فایل‌ها را از index یا HEAD برمی‌گرداند. switch برای جابه‌جایی branch است. checkout فرمان قدیمی‌تر و چندمنظوره‌ای است که هر دو کار branch/file را انجام می‌داد.',
  },
  {
    question: 'stage یا index چیست و stash چه می‌کند؟',
    answer:
      'stage یا index ناحیه‌ی میانی بین working tree و commit است. stash تغییرات ثبت‌نشده را موقتاً کنار می‌گذارد تا بتوانی branch یا context را عوض کنی و بعداً آن‌ها را برگردانی.',
  },
  {
    question: 'snapshot یعنی چه و چه ارتباطی با commit دارد؟',
    answer:
      'snapshot یعنی تصویر کامل وضعیت فایل‌ها در یک لحظه. هر commit در Git یک snapshot از tree پروژه را نگه می‌دارد. توضیح رسمی Git: https://git-scm.com/book/en/v2/Git-Internals-Git-Objects',
  },
  {
    question: 'local repository و remote repository چه تفاوتی دارند؟',
    answer:
      'local repository روی سیستم خودت است و برای کار روزمره استفاده می‌شود. remote repository روی GitHub یا سرور دیگر قرار دارد و برای backup، collaboration و deployment کاربرد دارد.',
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
  });

  panels.forEach((panel) => {
    panel.classList.toggle('is-visible', panel.dataset.panel === name);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => setTab(button.dataset.tab));
});

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(pagesUrl);
    copyStatus.textContent = 'GitHub Pages URL copied to clipboard.';
  } catch (error) {
    copyStatus.textContent = `Pages URL: ${pagesUrl}`;
  }
});

renderTimeline();
renderFaq();
setTab('overview');
