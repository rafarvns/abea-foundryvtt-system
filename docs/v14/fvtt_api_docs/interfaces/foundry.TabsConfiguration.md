---
title: "TabsConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.TabsConfiguration.html"
category: "interfaces"
---

# Interface TabsConfiguration

interface TabsConfiguration {  
Â Â Â Â [callback](#callback)?: Function | null;  
Â Â Â Â [contentSelector](#contentselector): string;  
Â Â Â Â [group](#group)?: string;  
Â Â Â Â [initial](#initial): string;  
Â Â Â Â [navSelector](#navselector): string;  
}

##### Index

### Properties

[callback?](#callback)
[contentSelector](#contentselector)
[group?](#group)
[initial](#initial)
[navSelector](#navselector)

## Properties

### `Optional`callback

callback?: Function | null

An optional callback function that executes when the active tab is changed

### contentSelector

contentSelector: string

The CSS selector used to target the content container for these tabs

### `Optional`group

group?: string

The name of the tabs group

### initial

initial: string

The tab name of the initially active tab

### navSelector

navSelector: string

The CSS selector used to target the navigation element for these tabs