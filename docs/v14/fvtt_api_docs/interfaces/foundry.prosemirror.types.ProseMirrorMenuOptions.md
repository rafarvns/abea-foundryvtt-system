---
title: "ProseMirrorMenuOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.prosemirror.types.ProseMirrorMenuOptions.html"
category: "interfaces"
---

# Interface ProseMirrorMenuOptions

interface ProseMirrorMenuOptions {  
Â Â Â Â [compact](#compact)?: boolean;  
Â Â Â Â [destroyOnSave](#destroyonsave)?: boolean;  
Â Â Â Â [onSave](#onsave)?: Function;  
}

##### Index

### Properties

[compact?](#compact)
[destroyOnSave?](#destroyonsave)
[onSave?](#onsave)

## Properties

### `Optional`compact

compact?: boolean

Whether to display a more compact version of the menu.

### `Optional`destroyOnSave

destroyOnSave?: boolean

Whether this editor instance is intended to be destroyed when saved.

### `Optional`onSave

onSave?: Function

A function to call when the save button is pressed.