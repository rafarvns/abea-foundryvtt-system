# Antigravity Terminal Security Policy

This policy governs the execution of terminal commands by the Antigravity agent. It is designed to maximize security while maintaining development fluidity.

## 1. Auto-Execution Protocol
The `SafeToAutoRun` parameter in `run_command` and `send_command_input` tools determines if a command runs immediately or requires user approval.

- **Default Policy**: `SafeToAutoRun` MUST be set to `FALSE` (Request Review).
- **Exemption**: `SafeToAutoRun` MAY be set to `TRUE` (Always Proceed) **only** if:
    1. The command matches a pattern in the **Allow List**.
    2. The command does **NOT** match any pattern in the **Deny List**.
    3. The agent has extremely high confidence in the safety of context-specific arguments.

## 2. Deny List (Prohibited for Auto-Run)
Commands matching these patterns MUST NEVER be auto-run. They ALWAYS require user review (`SafeToAutoRun=false`).

### Filesystem Modification (Destructive)
- `rm`, `del`, `erase`, `Remove-Item`
- `mv` (overwrite risk), `Move-Item` (unless strictly safe)
- `cp` (overwrite risk), `Copy-Item` (unless strictly safe)
- `> ` (redirection overwriting files, e.g., `echo "..." > file`)
- `format`, `fdisk`, `diskpart`
- `chown`, `chmod`, `takeown`, `icacls` (permissions)

### Remote & Network
- `curl`, `wget`, `Invoke-WebRequest` (unless strictly read-only/safe)
- `ssh`, `scp`, `ftp`, `sftp`
- `net user`, `net group`, `net localgroup`
- `reg`, `Set-ItemProperty` (registry)

### Docker & Execution
- `docker run`, `docker exec`, `docker rm`, `docker system prune`
- `kubectl apply`, `kubectl delete`
- `./*.sh`, `./*.bat`, `./*.ps1` (execution of arbitrary scripts)

### Git Destructive
- `git clean`
- `git reset --hard`
- `git push --force`, `git push -f`
- `git checkout .` (wiping changes)

## 3. Allow List (Permitted for Auto-Run)
Commands matching these patterns are generally safe to auto-run, provided they do not involve complex piping or dangerous flags not listed here.

### Read/Inspection
- `ls`, `dir`, `Get-ChildItem`
- `cat`, `type`, `Get-Content`
- `grep`, `findstr`, `Select-String`
- `echo` (without `>` redirect), `Write-Output`
- `tree`
- `pwd`, `Get-Location`
- `whoami`

### Git (Read/Safe)
- `git status`
- `git log`, `git show`
- `git diff`
- `git branch`, `git branch -a`
- `git remote -v`
- `git config --list`

### Process/System Status
- `ps`, `Get-Process`
- `tasklist` (Windows)

## 4. Manual Verification
If a command is not in the Allow List and not in the Deny List, treat it as **Unsafe** by default.

## 5. Override
The user may explicitly request "Run X without asking" in a prompt, which temporarily overrides this policy for that specific turn, but the Agent should still exercise caution.
