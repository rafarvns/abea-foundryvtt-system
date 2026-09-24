---
title: "TextEditorEnricherConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.TextEditorEnricherConfig.html"
category: "interfaces"
---

# Interface TextEditorEnricherConfig

interface TextEditorEnricherConfig {  
Â Â Â Â [enricher](#enricher): [TextEditorEnricher](../types/CONFIG.TextEditorEnricher.md);  
Â Â Â Â [id](#id)?: string;  
Â Â Â Â [onRender](#onrender)?: (arg0: HTMLEnrichedContentElement) => any;  
Â Â Â Â [pattern](#pattern): RegExp;  
Â Â Â Â [replaceParent](#replaceparent)?: boolean;  
}

##### Index

### Properties

[enricher](#enricher)
[id?](#id)
[onRender?](#onrender)
[pattern](#pattern)
[replaceParent?](#replaceparent)

## Properties

### enricher

enricher: [TextEditorEnricher](../types/CONFIG.TextEditorEnricher.md)

The function that will be called on each match. It is expected that this
returns an HTML element to be inserted into the final enriched content.

### `Optional`id

id?: string

A unique ID to assign to the enricher type. Required if you want to use
the onRender callback.

### `Optional`onRender

onRender?: (arg0: HTMLEnrichedContentElement) => any

An optional callback that is invoked when the
enriched content is added to the DOM.

### pattern

pattern: RegExp

The string pattern to match. Must be flagged as global.

### `Optional`replaceParent

replaceParent?: boolean

Hoist the replacement element out of its containing element if it replaces
the entire contents of the element.