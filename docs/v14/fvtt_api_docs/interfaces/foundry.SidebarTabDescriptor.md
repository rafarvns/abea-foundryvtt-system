---
title: "SidebarTabDescriptor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.SidebarTabDescriptor.html"
category: "interfaces"
---

# Interface SidebarTabDescriptor

interface SidebarTabDescriptor {  
Â Â Â Â [documentName](#documentname)?: string;  
Â Â Â Â [gmOnly](#gmonly)?: boolean;  
Â Â Â Â [icon](#icon)?: string;  
Â Â Â Â [tooltip](#tooltip)?: string;  
}

##### Index

### Properties

[documentName?](#documentname)
[gmOnly?](#gmonly)
[icon?](#icon)
[tooltip?](#tooltip)

## Properties

### `Optional`documentName

documentName?: string

A Document name to retrieve tooltip and icon information from automatically.

### `Optional`gmOnly

gmOnly?: boolean

Whether the tab is only rendered for GM users.

### `Optional`icon

icon?: string

The tab's Font Awesome icon class.

### `Optional`tooltip

tooltip?: string

The tab's tooltip.