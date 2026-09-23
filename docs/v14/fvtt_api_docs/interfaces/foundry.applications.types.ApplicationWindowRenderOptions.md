---
title: "ApplicationWindowRenderOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.types.ApplicationWindowRenderOptions.html"
category: "interfaces"
---

# Interface ApplicationWindowRenderOptions

interface ApplicationWindowRenderOptions {  
Â Â Â Â [controls](#controls): boolean;  
Â Â Â Â [detached](#detached)?: boolean;  
Â Â Â Â [icon](#icon): string | false;  
Â Â Â Â [title](#title): string;  
Â Â Â Â [windowId](#windowid)?: string;  
}

##### Index

### Properties

[controls](#controls)
[detached?](#detached)
[icon](#icon)
[title](#title)
[windowId?](#windowid)

## Properties

### controls

controls: boolean

Re-render the window controls menu?

### `Optional`detached

detached?: boolean

Whether the application should render inside the main application, or
in a separate, detached window. Pass false to attach to the main
application, or true to detach into a new window.

### icon

icon: string | false

Update the window icon with a new value?

### title

title: string

Update the window title with a new value?

### `Optional`windowId

windowId?: string

The ID of an existing detached window to render into.