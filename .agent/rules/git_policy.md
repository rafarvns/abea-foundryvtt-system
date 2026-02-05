# Git Policy for AI Agents

> [!CAUTION]
> AI Agents are **STRICTLY FORBIDDEN** from executing any Git commands in this project.

## Rules

1. **No git usage**: Do not use the `git` command or any tools that interact with Git (e.g., `run_command` with `git ...`, `mcp_GitKraken_...` tools).
2. **Suggestions only**: If you believe a Git operation is necessary (commit, push, branch, etc.), you must **only suggest** the exact commands to the USER.
3. **No automatic commits**: Do not attempt to automate version control tasks.

## Why this policy?
The user manages all version control operations personally to maintain full control over the repository history and branching strategy.

## How to suggest Git commands
If you need to suggest a Git command, format it clearly in a code block and explain what it does:

Example:
"To save your current changes, you should run:
```powershell
git add .
git commit -m "Your commit message"
```"
