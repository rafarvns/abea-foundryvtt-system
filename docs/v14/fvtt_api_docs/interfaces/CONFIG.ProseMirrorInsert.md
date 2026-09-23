---
title: "ProseMirrorInsert | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.ProseMirrorInsert.html"
category: "interfaces"
---

# Interface ProseMirrorInsert

interface ProseMirrorInsert {  
Â Â Â Â [action](#action): string;  
Â Â Â Â [children](#children)?: ProseMirrorInsert[];  
Â Â Â Â [html](#html)?: string;  
Â Â Â Â [inline](#inline)?: boolean;  
Â Â Â Â [title](#title): string;  
}

##### Index

### Properties

[action](#action)
[children?](#children)
[html?](#html)
[inline?](#inline)
[title](#title)

## Properties

### action

action: string

A unique identifier.

### `Optional`children

children?: ProseMirrorInsert[]

Any child entries.

### `Optional`html

html?: string

The insert's markup.

### `Optional`inline

inline?: boolean

Whether the insert is inline content, otherwise it is assumed to be
block content.

### title

title: string

The description of the menu item or insert.