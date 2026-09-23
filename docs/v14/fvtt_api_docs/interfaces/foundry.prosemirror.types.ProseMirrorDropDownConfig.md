---
title: "ProseMirrorDropDownConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.html"
category: "interfaces"
---

# Interface ProseMirrorDropDownConfig

interface ProseMirrorDropDownConfig {  
Â Â Â Â [cssClass](#cssclass): string;  
Â Â Â Â [entries](#entries): [ProseMirrorDropDownEntry](../types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md)[];  
Â Â Â Â [icon](#icon)?: string;  
Â Â Â Â [title](#title): string;  
}

##### Index

### Properties

[cssClass](#cssclass)
[entries](#entries)
[icon?](#icon)
[title](#title)

## Properties

### cssClass

cssClass: string

The menu CSS class.

### entries

entries: [ProseMirrorDropDownEntry](../types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md)[]

The drop-down entries.

### `Optional`icon

icon?: string

An optional icon to use instead of a text label.

### title

title: string

The default title of the drop-down.