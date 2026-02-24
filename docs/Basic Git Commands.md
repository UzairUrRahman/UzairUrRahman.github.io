# Git Essentials and Cheat Sheet.

### 🟦 Basic Git Commands

1.  `git init`  – Initialize a Git Repository  
    Creates a new Git repository in the current project folder.  
    `git init`
2.  `git clone`  – Copy a Remote Repository  
    Downloads a complete copy of a repo from GitHub or any Git server.  
    `git clone https://github.com/user/repo.git`
3.  `git status`  – View Working Directory Status  
    Shows changes you made, staged files, and untracked files.  
    `git status`
4.  `git add`  – Stage Files for Commit  
    Moves files to the staging area.  
    `git add file.txt`  
    `git add .`  # add all changes
5.  `git commit`  – Save Changes to Repo  
    Records staged changes.  
    `git commit -m "Initial commit"`
6.  `git config`  – Configure Git Username & Email  
    Sets author identity for commits.  
    📌 Example:  
    `git config --global user.name "Your Name"`  
    `git config --global user.email "your@email.com"`
7.  `git log`  – View Commit History  
    Shows commit messages, authors, and timestamps.  
    `git log`
8.  `git show`  – Show Details of a Commit  
    Displays changes, metadata, and diffs for a commit.  
    `git show <commit-hash>`
9.  `git diff`  – Compare Changes  
    Shows what changed before committing or between commits.  
    `git diff`  # unstaged changes  
    `git diff --staged`  # staged changes
10.  `git reset`  – Unstage or Undo Commits  
    Undo staged files or move HEAD to a previous commit.  
    `git reset HEAD file.txt`

### 🟩 Branching & Merging

11.  `git branch`  – List/Create Branches  
    `git branch`  # list branches  
    `git branch feature-login`  # create new branch
12.  `git checkout`  – Switch Branches  
    Older method for switching branches.  
    `git checkout feature-login`
13.  `git switch`  – Modern Branch Switch Command  
    `git switch feature-login`
14.  `git merge`  – Merge Branches  
    Combines one branch into another.  
    `git merge feature-login`
15.  `git rebase`  – Reapply Commits  
    Cleans commit history when merging.  
    `git rebase main`
16.  `git cherry-pick`  – Apply a Specific Commit  
    Used to apply a single commit from another branch.  
    `git cherry-pick <commit-hash>`

### 🟧 Remote Repository Commands

17.  `git remote`  – Manage Remote URLs  
    Add or check remotes.  
    `git remote add origin https://github.com/user/repo.git`
18.  `git push`  – Upload Changes to Remote  
    Sends commits to GitHub or other servers.  
    `git push origin main`
19.  `git pull`  – Download & Merge Changes  
    Fetches remote updates and merges them.  
    📌 Example:  
    `git pull origin main`
20.  `git fetch`  – Download Changes (No Merge)  
    Updates local metadata without affecting working files.  
    `git fetch origin`
21.  `git remote -v`  – Show Remote URLs  
    Displays all connected remotes.  
    `git remote -v`

### 🟨 Stashing & Cleaning

22.  `git stash`  – Save Uncommitted Work  
    Temporarily store changes without committing.  
    📌 Example:  
    `git stash`
23.  `git stash pop`  – Restore Stashed Work  
    📌 Example:  
    `git stash pop`
24.  `git stash list`  – View Stashes  
    `git stash list`
25.  `git clean`  – Remove Untracked Files  
    `git clean -f`

### 🟪 Tagging

26.  `git tag`  – Create a Tag  
    Usually used for release versions.  
    `git tag -a v1.0 -m "Version 1.0"`
27.  Delete a Tag  
    📌 Example:  
    `git tag -d v1.0`
28.  Push Tags to Remote  
    📌 Example:  
    `git push origin --tags`

### 🟥 Advanced Git Commands

29.  `git bisect`  – Find Bug Introduced Commit  
    Binary search through commits to find where a bug started.  
    `git bisect start`
30.  `git blame`  – Show Line-by-Line Authors  
    Shows who changed each line of a file.  
    `git blame file.txt`
31.  `git reflog`  – View All Reference Logs  
    Shows all changes to HEAD (including deleted commits).  
    `git reflog`
32.  `git submodule`  – Manage Submodules  
    Used when a project includes another Git repo inside it.  
    `git submodule add https://github.com/user/repo.git`
33.  `git archive`  – Create a Zip Archive of Repo  
    📌 Example:  
    `git archive --format=zip HEAD > archive.zip`
34.  `git gc`  – Garbage Collection  
    Cleans up unnecessary files and optimizes the repo.  
    `git gc`

### 🟦 GitHub-Specific (GH CLI) Commands

35.  `gh auth login`  – Login to GitHub  
    `gh auth login`
36.  `gh repo clone`  – Clone Repo from GitHub  
    📌 Example:  
    `gh repo clone user/repo`
37.  `gh issue list`  – List GitHub Issues  
    `gh issue list`
38.  `gh pr create`  – Create Pull Request  
    `gh pr create --title "New Feature" --body "Description of the feature"`
39.  `gh repo create`  – Create a New GitHub Repository  
    `gh repo create my-repo`