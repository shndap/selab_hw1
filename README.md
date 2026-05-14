# Lab 1 Report

## Project Summary

This repository contains a static frontend for the Git and GitHub Pages lab. It is built with plain HTML, CSS, and JavaScript and presents the assignment as a compact dashboard: branch structure, merge/conflict history, deployment notes, and answers to the required Git questions.

## Project Structure

- `site/index.html`: page structure and main sections
- `site/styles.css`: layout, cards, and UI states
- `site/app.js`: data rendering, tabs, timeline, and FAQ answers
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow

## Implementation Report

### Branches

- `main`: protected release branch
- `dev`: integration branch for day-to-day work
- `feature/layout`: layout, sidebar, and cards work
- `feature/content`: report text, timeline content, and FAQ answers
- `hotfix/deploy`: Pages deployment and publishing notes

### Conflicts

Two merge conflicts were resolved manually during the work:

1. The first conflict was between layout work and content work on the page shell and hero/sidebar text.
2. The second conflict was between README/report changes and deployment-related edits.

### Meaningful Commits

The repository history contains more than 20 meaningful commits. The main ones are:

1. bootstrap static repository with branch planning and structure
2. add dashboard shell
3. refine cards and spacing
4. write branch strategy copy
5. add commit timeline data
6. add answer set
7. wire tab switching
8. render FAQ cards
9. fix Pages artifact path
10. tune accessibility labels
11. resolve first merge conflict
12. resolve second merge conflict
13. protect release branch
14. publish README report with Git answers
15. final visual polish
16. balance sidebar contrast
17. add Pages URL placeholder
18. validate static file paths
19. finalize submission copy
20. ship the static frontend

## Requirement Audit

- `.gitignore` exists: verified
- static frontend is implemented: verified
- GitHub Actions workflow for Pages exists: verified
- README includes the report and Git answers: verified
- meaningful branches exist: verified
- at least 20 meaningful commits exist in history: verified
- at least 2 conflicts were resolved in history: verified
- `main` is protected on GitHub: verified by the user
- merges were completed through pull requests: verified on GitHub
- the GitHub Pages URL is listed below: verified
- the submission video: manual submission item

## GitHub Pages

Live site:

`https://shndap.github.io/selab_hw1/`

The workflow publishes only the `site/` directory so GitHub Pages serves the static frontend instead of the repository README.

## Answers to the Questions

### 1) What is the `.git` folder? What does it store? How is it created?

`.git` is the internal Git directory. It stores repository metadata such as objects, references, `HEAD`, configuration, the index, and history information. It is created with `git init`.

### 2) What does atomic mean in atomic commit and atomic pull request?

Atomic means one logical change per commit or pull request. The change should be complete, self-contained, and easy to review or revert.

### 3) Difference between fetch, pull, merge, rebase, and cherry-pick

- `fetch`: downloads remote updates without changing the local branch.
- `pull`: usually `fetch` plus `merge`, or sometimes `fetch` plus `rebase`.
- `merge`: combines two histories and may create a merge commit.
- `rebase`: rewrites commits onto a new base.
- `cherry-pick`: applies one specific commit onto the current branch.

### 4) Difference between reset, revert, restore, switch, and checkout

- `reset`: moves `HEAD` and, depending on mode, the index and working tree.
- `revert`: creates a new commit that undoes a previous commit.
- `restore`: brings files back from the index or `HEAD`.
- `switch`: moves between branches.
- `checkout`: older multi-purpose command for switching branches and restoring files.

### 5) What is the stage/index? What does stash do?

The stage or index is the middle area between the working tree and a commit. `stash` temporarily stores uncommitted changes so you can switch context and restore them later.

### 6) What is a snapshot? How is it related to commit?

A snapshot is a full picture of the project files at a specific moment. Each Git commit stores a snapshot of the project tree. Official Git reference:

https://git-scm.com/book/en/v2/Git-Internals-Git-Objects

### 7) Difference between local repository and remote repository

A local repository lives on your machine and is used for day-to-day development. A remote repository lives on GitHub or another server and is used for collaboration, backup, and deployment.
