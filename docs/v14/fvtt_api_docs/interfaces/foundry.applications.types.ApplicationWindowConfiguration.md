---
title: "ApplicationWindowConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.types.ApplicationWindowConfiguration.html"
category: "interfaces"
---

# Interface ApplicationWindowConfiguration

interface ApplicationWindowConfiguration {  
Â Â Â Â [contentClasses](#contentclasses)?: string[];  
Â Â Â Â [contentTag](#contenttag)?: string;  
Â Â Â Â [controls](#controls)?: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[];  
Â Â Â Â [frame](#frame)?: boolean;  
Â Â Â Â [icon](#icon)?: string | false;  
Â Â Â Â [minimizable](#minimizable)?: boolean;  
Â Â Â Â [positioned](#positioned)?: boolean;  
Â Â Â Â [resizable](#resizable)?: boolean;  
Â Â Â Â [title](#title)?: string;  
}

##### Index

### Properties

[contentClasses?](#contentclasses)
[contentTag?](#contenttag)
[controls?](#controls)
[frame?](#frame)
[icon?](#icon)
[minimizable?](#minimizable)
[positioned?](#positioned)
[resizable?](#resizable)
[title?](#title)

## Properties

### `Optional`contentClasses

contentClasses?: string[]

Additional CSS classes to apply to the .window-content element

### `Optional`contentTag

contentTag?: string

A specific tag name to use for the .window-content element

### `Optional`controls

controls?: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

An array of window control entries

### `Optional`frame

frame?: boolean

Is this Application rendered inside a window frame?

### `Optional`icon

icon?: string | false

An optional Font Awesome icon class displayed left of the window title

### `Optional`minimizable

minimizable?: boolean

Can the window app be minimized by double-clicking on the title

### `Optional`positioned

positioned?: boolean

Can this Application be positioned via JavaScript or only by CSS

### `Optional`resizable

resizable?: boolean

Is this window resizable?

### `Optional`title

title?: string

The window title. Displayed only if the application is framed