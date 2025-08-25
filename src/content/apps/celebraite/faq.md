---
title: Celebraite
slug: celebraite
---

## Where does Celebraite read my contacts from (iPhone vs iCloud)?

Celebraite reads your contacts from the local Contacts database on your iPhone. If you have iCloud Contacts enabled, iOS keeps a synchronized local copy on the device; Celebraite reads that local copy, so the data indirectly reflects iCloud. The app never connects to iCloud or any external service to fetch contacts, and it does not upload your contacts anywhere.

## Does the contact informations are sent to OpenAI when generating the birthday message?

Partially. Celebraite sends a prompt that contains the actual age value but uses a placeholder variable for the first name (e.g., `{FIRST_NAME}`). OpenAI returns a personalized message that preserves the first name placeholder but includes the actual age. Then, the app replaces the first name placeholder locally on your device. The age is computed locally from the birth date and sent to OpenAI for message generation, while the first name is substituted locally after the response is received.

### Example

Template sent to OpenAI (with actual age and placeholder first name):

```text
Generate a birthday message for {FIRST_NAME}. He or she is 35 years old today.
```

OpenAI response (first name placeholder preserved, age included):

```text
Happy birthday, {FIRST_NAME}! Wishing you an amazing 35th year ahead.
```

Local replacement in the app (after receiving response):

```text
Happy birthday, Alex! Wishing you an amazing 35th year ahead.
```

What Celebraite handles:

- `FIRST_NAME` → replaced locally with the contact's first name (e.g., "Alex") after receiving the response
- Age → computed locally from the birth date and sent to OpenAI for message generation

## Is there an Android version of the app?

No, there is currently no Android version of the app. The app is only available for iOS devices. There is no plan to release an Android version in the near future. The app is designed to take advantage of iOS features and capabilities, which may not be available on Android devices. However, we are always open to feedback and suggestions for future development.
