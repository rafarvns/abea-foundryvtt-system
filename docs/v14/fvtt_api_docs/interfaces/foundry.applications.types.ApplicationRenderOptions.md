---
title: "ApplicationRenderOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.types.ApplicationRenderOptions.html"
category: "interfaces"
---

# Interface ApplicationRenderOptions

interface ApplicationRenderOptions {  
Â Â Â Â [force](#force)?: boolean;  
Â Â Â Â [isFirstRender](#isfirstrender)?: boolean;  
Â Â Â Â [parts](#parts)?: string[];  
Â Â Â Â [position](#position)?: [ApplicationPosition](foundry.applications.types.ApplicationPosition.md);  
Â Â Â Â [tab](#tab)?: string | Record<string, string>;  
Â Â Â Â [window](#window)?: [ApplicationWindowRenderOptions](foundry.applications.types.ApplicationWindowRenderOptions.md);  
}

##### Index

### Properties

[force?](#force)
[isFirstRender?](#isfirstrender)
[parts?](#parts)
[position?](#position)
[tab?](#tab)
[window?](#window)

## Properties

### `Optional`force

force?: boolean

Force application rendering. If true, an application which does not
yet exist in the DOM is added. If false, only applications which
already exist are rendered.

### `Optional`isFirstRender

isFirstRender?: boolean

Is this render the first one for the application? This property is
populated automatically.

### `Optional`parts

parts?: string[]

Some Application classes, for example the HandlebarsApplication,
support re-rendering a subset of application parts instead of the full
Application HTML.

### `Optional`position

position?: [ApplicationPosition](foundry.applications.types.ApplicationPosition.md)

A specific position at which to render the Application

### `Optional`tab

tab?: string | Record<string, string>

A tab to activate. Either the tab's ID for applications with only
one tab group, or an object of tab groups to tab IDs. Re-rendering
an Application with this option will not trigger changeTab.

### `Optional`window

window?: [ApplicationWindowRenderOptions](foundry.applications.types.ApplicationWindowRenderOptions.md)

Updates to the Application window frame