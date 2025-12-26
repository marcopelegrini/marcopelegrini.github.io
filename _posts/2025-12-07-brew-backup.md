---
layout: post
title:  "Homebrew automatic backup"
summary: Constantly backup your homebrew apps
author: marco
tags: [software, public]
categories: [Software]
image: assets/images/brew-backup/cta.jpg
---

## Homebrew scheduled backup

Most of my software is installed through [Homebrew](https://brew.sh/), so I've created this setup to back it up automatically:

Built using:

- Bash scripts
- PList

### Backup script

<!-- markdownlint-disable -->
{% highlight shell %}
#!/bin/bash

BACKUP_DIR="/Users/marco/google-drive/KnowledgeBase/OSX/brew"
DATE=$(date +%Y-%m-%d)

mkdir -p "$BACKUP_DIR"

brew bundle dump --file="$BACKUP_DIR/Brewfile-$DATE" --force
brew list > "$BACKUP_DIR/brew-list-$DATE.txt"
brew list --cask > "$BACKUP_DIR/brew-cask-list-$DATE.txt"

echo "Backup saved to $BACKUP_DIR"
{% endhighlight %}
<!-- markdownlint-restore -->

### PList

<!-- markdownlint-disable -->
{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>ca.pelegrini.brewbackup</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>/Users/marco/google-drive/KnowledgeBase/OSX/bin/brew-backip.sh</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>10</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
</dict>
</plist>
{% endhighlight %}
<!-- markdownlint-restore -->

### Load it

launchctl load ~/Library/LaunchAgents/ca.pelegrini.brewbackup.plist
