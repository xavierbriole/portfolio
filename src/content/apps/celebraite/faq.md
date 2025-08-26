---
title: Celebraite
slug: celebraite
---

## Where does Celebraite read my contacts from (iPhone vs iCloud)?

Celebraite reads your contacts from the local Contacts database on your iPhone. If you have iCloud Contacts enabled, iOS keeps a synchronized local copy on the device; Celebraite reads that local copy, so the data indirectly reflects iCloud. The app never connects to iCloud or any external service to fetch contacts, and it does not upload your contacts anywhere.

## Does the contact informations are sent to OpenAI when generating the birthday message?

No. Celebraite sends a prompt that contains placeholder variables (e.g., `{FIRST_NAME}`, `{AGE}`) rather than the actual values. OpenAI returns a non‑personalized message that preserves those placeholders. Then, the app replaces the placeholders locally on your device. Your contact informations are never sent to OpenAI. The age is computed locally from the birth date and substituted after the response is received.

### Example

Template sent to OpenAI (with placeholders):

```text
Generate a birthday message for {FIRST_NAME}. He or she is {AGE} years old today.
```

OpenAI response (placeholders preserved):

```text
Happy birthday, {FIRST_NAME}! Wishing you an amazing {AGE}.
```

Local replacement in the app (before sending):

```text
Happy birthday, Alex! Wishing you an amazing 35.
```

What Celebraite replaces locally:

- `FIRST_NAME` → the contact’s first name (e.g., "Alex")
- `AGE` → the age computed locally for today (e.g., 35)

## Is there an Android version of the app?

No, there is currently no Android version of the app. The app is only available for iOS devices. There is no plan to release an Android version in the near future. The app is designed to take advantage of iOS features and capabilities, which may not be available on Android devices. However, we are always open to feedback and suggestions for future development.
