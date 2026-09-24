---
title: "ApplicationClosingOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.types.ApplicationClosingOptions.html"
category: "interfaces"
---

# Interface ApplicationClosingOptions

interface ApplicationClosingOptions {  
Â Â Â Â [animate](#animate): boolean;  
Â Â Â Â [closeKey](#closekey): boolean;  
Â Â Â Â [submitted](#submitted): boolean;  
}

##### Index

### Properties

[animate](#animate)
[closeKey](#closekey)
[submitted](#submitted)

## Properties

### animate

animate: boolean

Whether to animate the close, or perform it instantaneously

### closeKey

closeKey: boolean

Whether the application was closed via keypress.

### submitted

submitted: boolean

Is the application being closed because a form was submitted?