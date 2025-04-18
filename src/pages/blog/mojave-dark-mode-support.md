---
layout: ../../layouts/MarkdownPostLayout.astro
title: Add macOS Mojave Dark Mode support to your website
description: Learn to implement macOS Mojave Dark Mode support on your website using CSS media queries, ensuring a seamless experience for all users.
date: 2019-09-01
author: Xavier Briole
image: /assets/posts/mojave-dark-mode-support.jpg
tags:
  - dev
  - css
---

The last version of macOS, macOS Mojave, includes a very cool feature that we see really everywhere. The Dark Mode is a trendy thing and can be easily supported by your website by adding a few lines in your css file.

## Medias queries

### Quick explanation

Medias queries are used in CSS to add some specific style depends on browser behavior.

For example, you can add CSS properties when the browser is at some breakpoint. In this case, it can be very useful to make your website responsive by resizing elements in the page.

### The `prefers-color-scheme` media query

This media query will detect user preferences about his current theme. It can be completed by a parameter :

| Parameters      | Description                    |
| --------------- | ------------------------------ |
| `no-preference` | User did not specified a theme |
| `light`         | User specified the light theme |
| `dark`          | User specified the dark theme  |

## Snippet

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #2f2f2f;
    color: #ffffff;
  }
}
```

In this example, we will change `body` background color and text color when user specified the dark theme.

## Accessibility

Changing the main theme color of your website can require a lot of color modifications. Don't forget to update links colors on hover, active and every others colors that can be updated.

## Compatibility

| Browser             | Compatibility  |
| ------------------- | -------------- |
| Chrome              | 76             |
| Edge                | Not compatible |
| Firefox             | 67             |
| IE                  | Not compatible |
| Opera               | Not compatible |
| Safari              | 12.1           |
| Android Webview     | 76             |
| Chrome for Android  | 76             |
| Firefox for Android | 67             |
| Opera for Android   | Not compatible |
| Safari for iOS      | 13             |
