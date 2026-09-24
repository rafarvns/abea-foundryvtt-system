---
title: "NotificationOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.NotificationOptions.html"
category: "interfaces"
---

# Interface NotificationOptions

interface NotificationOptions {  
Â Â Â Â [clean](#clean)?: boolean;  
Â Â Â Â [console](#console)?: boolean;  
Â Â Â Â [escape](#escape)?: boolean;  
Â Â Â Â [format](#format)?: Record<string, string>;  
Â Â Â Â [localize](#localize)?: boolean;  
Â Â Â Â [permanent](#permanent)?: boolean;  
Â Â Â Â [progress](#progress)?: boolean;  
}

##### Index

### Properties

[clean?](#clean)
[console?](#console)
[escape?](#escape)
[format?](#format)
[localize?](#localize)
[permanent?](#permanent)
[progress?](#progress)

## Properties

### `Optional`clean

clean?: boolean

Whether to clean the provided message string as untrusted user input.
No cleaning is applied if `format` is passed and `escape` is true or
`localize` is true and `format` is not passed.

### `Optional`console

console?: boolean

Whether to log the message to the console

### `Optional`escape

escape?: boolean

Whether to escape the values of `format`

### `Optional`format

format?: Record<string, string>

A mapping of formatting strings passed to Localization#format

### `Optional`localize

localize?: boolean

Whether to localize the message content before displaying it

### `Optional`permanent

permanent?: boolean

Should the notification be permanently displayed until dismissed

### `Optional`progress

progress?: boolean

Does this Notification include a progress bar?