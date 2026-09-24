---
title: "Notifications | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ui.Notifications.html"
category: "classes"
---

# Class Notifications

A common framework for displaying notifications to the client.
Submitted notifications are added to a queue, and up to [Notifications.MAX\_ACTIVE](#max_active)
notifications are displayed at once. Each notification is displayed for
[Notifications.LIFETIME\_MS](#lifetime_ms) milliseconds before being
removed, at which point further notifications are pulled from the queue.

#### Example: Displaying Notification Messages

```
ui.notifications.error("This is a permanent error message", {permanent: true});  
ui.notifications.warn("LOCALIZED.WARNING.MESSAGE", {localize: true});  
ui.notifications.success("This is a success message, not logged to the console", {console: false});  
ui.notifications.info("LOCALIZED.FORMAT.STRING", {format: {key1: "foo", key2: "bar"}});
Copy
```

#### Example: Progress Bar Notification

```
const progress = ui.notifications.info("Thing Happening!", {progress: true});  
progress.update({pct: 0.25, message: "Still happening!"});  
progress.update({pct: 0.50, message: "Almost there!"});  
progress.update({pct: 0.75, message: "Stay on target!"});  
progress.update({pct: 1.0, message: "Done!"});
Copy
```

##### Index

### Properties

[LIFETIME\_MS](#lifetime_ms)
[MAX\_ACTIVE](#max_active)

### Methods

[clear](#clear)
[error](#error)
[has](#has)
[info](#info)
[notify](#notify)
[remove](#remove)
[success](#success)
[update](#update)
[warn](#warn)

## Properties

### `Static`LIFETIME\_MS

LIFETIME\_MS: number = 5000

Notification lifetime in milliseconds.

### `Static`MAX\_ACTIVE

MAX\_ACTIVE: number = 5

The maximum number of active notifications.

## Methods

### clear

* clear(): void

  Clear all notifications.

  #### Returns void

### error

* error(  
  Â Â Â Â message: string | object,  
  Â Â Â Â options?: [NotificationOptions](../interfaces/foundry.NotificationOptions.md),  
  ): Readonly<[Notification](../interfaces/foundry.Notification.md)>

  Display a notification with the "error" type.

  #### Parameters

  + message: string | object

    The content of the error message
  + `Optional`options: [NotificationOptions](../interfaces/foundry.NotificationOptions.md)

    Notification options passed to the notify function

  #### Returns Readonly<[Notification](../interfaces/foundry.Notification.md)>

  The registered notification

  #### See

  [notify](#notify)

### has

* has(notification: number | [Notification](../interfaces/foundry.Notification.md)): boolean

  Does the notification linked to the ID exist?.

  #### Parameters

  + notification: number | [Notification](../interfaces/foundry.Notification.md)

    The Notification or ID to remove

  #### Returns boolean

### info

* info(  
  Â Â Â Â message: string | object,  
  Â Â Â Â options?: [NotificationOptions](../interfaces/foundry.NotificationOptions.md),  
  ): Readonly<[Notification](../interfaces/foundry.Notification.md)>

  Display a notification with the "info" type.

  #### Parameters

  + message: string | object

    The content of the info message
  + `Optional`options: [NotificationOptions](../interfaces/foundry.NotificationOptions.md)

    Notification options passed to the notify function

  #### Returns Readonly<[Notification](../interfaces/foundry.Notification.md)>

  The registered notification

  #### See

  [notify](#notify)

### notify

* notify(  
  Â Â Â Â message: string | object,  
  Â Â Â Â type?: string,  
  Â Â Â Â options?: [NotificationOptions](../interfaces/foundry.NotificationOptions.md),  
  ): [Notification](../interfaces/foundry.Notification.md)

  Push a new notification into the queue

  #### Parameters

  + message: string | object

    The content of the notification message. A passed object should have a
    meaningful override of the `toString` method. If the object is an
    `Error` and console logging is requested, the stack trace will be
    included.
  + type: string = "info"

    The type of notification, "info", "warning", and "error" are supported
  + `Optional`options: [NotificationOptions](../interfaces/foundry.NotificationOptions.md) = {}

    Additional options which affect the notification

  #### Returns [Notification](../interfaces/foundry.Notification.md)

  The registered notification

### remove

* remove(notification: number | [Notification](../interfaces/foundry.Notification.md)): void

  Remove the notification linked to the ID.

  #### Parameters

  + notification: number | [Notification](../interfaces/foundry.Notification.md)

    The Notification or ID to remove

  #### Returns void

### success

* success(  
  Â Â Â Â message: string | object,  
  Â Â Â Â options?: [NotificationOptions](../interfaces/foundry.NotificationOptions.md),  
  ): Readonly<[Notification](../interfaces/foundry.Notification.md)>

  Display a notification with the "success" type.

  #### Parameters

  + message: string | object

    The content of the success message
  + `Optional`options: [NotificationOptions](../interfaces/foundry.NotificationOptions.md)

    Notification options passed to the notify function

  #### Returns Readonly<[Notification](../interfaces/foundry.Notification.md)>

  The registered notification

  #### See

  [notify](#notify)

### update

* update(  
  Â Â Â Â notification: number | [Notification](../interfaces/foundry.Notification.md),  
  Â Â Â Â update?: {  
  Â Â Â Â Â Â Â Â clean?: string;  
  Â Â Â Â Â Â Â Â escape?: string;  
  Â Â Â Â Â Â Â Â format?: Record<string, string>;  
  Â Â Â Â Â Â Â Â localize?: string;  
  Â Â Â Â Â Â Â Â message?: string;  
  Â Â Â Â Â Â Â Â pct?: number;  
  Â Â Â Â },  
  ): void

  Update the progress of the notification.

  #### Parameters

  + notification: number | [Notification](../interfaces/foundry.Notification.md)

    A Notification or ID to update
  + `Optional`update: {  
    Â Â Â Â clean?: string;  
    Â Â Â Â escape?: string;  
    Â Â Â Â format?: Record<string, string>;  
    Â Â Â Â localize?: string;  
    Â Â Â Â message?: string;  
    Â Â Â Â pct?: number;  
    }

    An incremental progress update

    - ##### `Optional`clean?: string

      See [NotificationOptions#clean](../interfaces/foundry.NotificationOptions.md#clean)
    - ##### `Optional`escape?: string

      See [NotificationOptions#escape](../interfaces/foundry.NotificationOptions.md#escape)
    - ##### `Optional`format?: Record<string, string>

      A mapping of formatting strings passed to Localization#format
    - ##### `Optional`localize?: string

      Localize updates to presented progress text
    - ##### `Optional`message?: string

      An update to the string message
    - ##### `Optional`pct?: number

      An update to the completion percentage

  #### Returns void

### warn

* warn(  
  Â Â Â Â message: string | object,  
  Â Â Â Â options?: [NotificationOptions](../interfaces/foundry.NotificationOptions.md),  
  ): Readonly<[Notification](../interfaces/foundry.Notification.md)>

  Display a notification with the "warning" type.

  #### Parameters

  + message: string | object

    The content of the warning message
  + `Optional`options: [NotificationOptions](../interfaces/foundry.NotificationOptions.md)

    Notification options passed to the notify function

  #### Returns Readonly<[Notification](../interfaces/foundry.Notification.md)>

  The registered notification

  #### See

  [notify](#notify)