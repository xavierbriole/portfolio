---
layout: ../../layouts/MarkdownPostLayout.astro
title: Complete Uninstall VS Code on macOS
description: Learn how to completely uninstall Visual Studio Code on macOS by removing all associated settings, extensions, and files for a clean reinstallation experience.
date: 2020-05-31
author: Xavier Briole
image: /assets/posts/complete-uninstall-vscode-macos.jpg
tags:
  - vscode
  - ide
---

Visual Studio is a powerful code editor with a lot of plugins (available [in the Market Place](https://marketplace.visualstudio.com/VSCode)) that are really awesome. But for any reasons, you may have to reinstall the application.

By example, you have something wrong with a plugin, a linter or with the global configuration. If you think the problem does not come from your code, you can try this.

## Remove all settings

```shell
sudo rm -rf $HOME/Library/Application\ Support/Code
```

## Remove all extensions

```shell
sudo rm -rf $HOME/.vscode
```

## Remove application

[AppCleaner](https://freemacsoft.net/appcleaner/) is a small application that will remove all files in the system related to the application you want to uninstall.

Download [AppCleaner](https://freemacsoft.net/appcleaner/) and drop Visual Studio Code in the AppCleaner window to uninstall it.

## Install again

[Download](https://code.visualstudio.com) and install Visual Studio Code again.
