---
title: Building a Dynamic Calendar Feed for League of Legends Worlds 2025
description: How I created an automatically updating calendar feed that tracks all Worlds 2025 matches and results using the Pandascore API with intelligent caching.
date: 2025-10-14
author: Xavier Briole
---

As a developer and League of Legends enthusiast, I found myself constantly checking multiple websites to stay updated with the Worlds 2025 tournament schedule. Rather than bookmarking yet another esports site, I decided to build a solution that would integrate directly into my existing workflow: a dynamic calendar feed.

This article explains how I implemented an automated calendar system that fetches match data from the Pandascore API and serves it as a standard `.ics` calendar feed.

## The Calendar Feed

```shell
https://one-esport-api.vercel.app/calendar/297
```

## Technical Implementation

### API Integration

The calendar uses Pandascore's REST API to fetch tournament data. The endpoint targets league ID `297`, which specifically corresponds to the League of Legends World Championship. This ensures we only retrieve relevant matches without filtering through other tournaments.

### Caching Strategy

To balance real-time updates with API rate limits, I implemented a 5-minute cache layer. This approach provides:

- **Performance optimization**: Reduces API calls and response times
- **Cost efficiency**: Stays within reasonable API usage limits
- **Near real-time updates**: 5-minute intervals are sufficient for tournament scheduling

### Data Processing

The system processes two types of information:

1. **Scheduled matches**: Upcoming games with team information and timing
2. **Match results**: Final scores and outcomes for completed games

When a match transitions from "scheduled" to "finished" status in the API, the calendar automatically reflects the result in the event title and description.

## Calendar Format Compatibility

The feed outputs standard iCalendar format (RFC 5545), making it compatible with:

- Apple Calendar (iOS/macOS)
- Google Calendar
- Microsoft Outlook
- Thunderbird
- Any RFC 5545 compliant calendar application

## Why This Approach Works

Building a calendar feed instead of a traditional web scraper or notification system offers several advantages:

- **Native integration**: Works with existing calendar workflows
- **Cross-platform support**: No need for platform-specific apps
- **Automatic synchronization**: Calendar apps handle the refresh logic
- **Offline access**: Most calendar apps cache events locally

The 5-minute cache ensures that results appear quickly after matches conclude while maintaining system stability and API compliance.

## Source Code

The complete implementation is available on GitHub:

[xavierbriole/one-esport-api](https://github.com/xavierbriole/one-esport-api)

Feel free to explore the code, contribute improvements, or adapt it for other tournaments and esports leagues.
