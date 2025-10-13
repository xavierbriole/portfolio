---
title: Complete Uninstall VS Code on macOS
description: A step-by-step guide to completely uninstall Visual Studio Code on macOS, removing all settings, extensions, and cache files for a fresh start.
date: 2020-05-31
author: Xavier Briole
image: /assets/posts/complete-uninstall-vscode-macos.jpg
tags:
  - vscode
  - ide
---

Visual Studio is a powerful code editor with a lot of plugins (available [in the Market Place](https://marketplace.visualstudio.com/VSCode)) that are really awesome. But for any reasons, you may have to reinstall the application.

By example, you have something wrong with a plugin, a linter or with the global configuration. If you think the problem does not come from your code, you can try this.

## Remove application

Open the Finder and go to the Applications folder. Find Visual Studio Code and move it to the Trash.

## Remove all settings and extensions

```shell
rm -fr ~/.vscode*
rm -fr ~/Library/Application\ Support/Code/
```

## Remove all cache files

```shell
rm -fr ~/Library/Saved\ Application\ State/com.microsoft.VSCode.savedState/
rm -fr ~/Library/Preferences/com.microsoft.VSCode.helper.plist
rm -fr ~/Library/Preferences/com.microsoft.VSCode.plist
rm -fr ~/Library/Caches/com.microsoft.VSCode
rm -fr ~/Library/Caches/com.microsoft.VSCode.ShipIt/
```

## Install again

[Download](https://code.visualstudio.com) and install Visual Studio Code again.
