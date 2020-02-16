# Ableton Tools – CLI

## Installation

```bash
npm install -g @ableton-tools/cli
```

## Commands

To get any available help it's always possible to call `ableton-tools -h` to get an overview
over all commands and options.

### save

```bash
 # will be available via "My Project"
ableton-tools save "./My Project"

 # will be available via "My ProjectName"
ableton-tools save "./My Project" "My ProjectName"
```

### backup

```bash
ableton-tools backup "./My Project" "Some description for this backup"
```

### restore

```bash
ableton-tools restore "My Project" ./restored-projects --version 1
```

### info

```bash
ableton-tools info "My Project"

# ✔ Project information succesfully fetched:
# 
# Information
# ID: 1f421bae662a67d6aab5fa43e3deda7d
# Name: My Project
# Saved at: 2020-2-15 2:06:07 PM
# Versions: 1
# Location: /Users/X/Projects/My Project
# 
# Backups
#  - Version 1 (2020-2-15 2:19:37 PM)
```
