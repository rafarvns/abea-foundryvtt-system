---
title: "SheetRegistrationDescriptor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.SheetRegistrationDescriptor.html"
category: "interfaces"
---

# Interface SheetRegistrationDescriptor

interface SheetRegistrationDescriptor {  
Â Â Â Â [canBeDefault](#canbedefault)?: boolean;  
Â Â Â Â [canConfigure](#canconfigure)?: boolean;  
Â Â Â Â [documentClass](#documentclass): any;  
Â Â Â Â [id](#id): string;  
Â Â Â Â [label](#label)?: string | (() => string);  
Â Â Â Â [makeDefault](#makedefault)?: boolean;  
Â Â Â Â [sheetClass](#sheetclass): typeof [Application](../classes/foundry.appv1.api.Application.md) | typeof [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md);  
Â Â Â Â [themes](#themes)?: Record<string, string> | null;  
Â Â Â Â [types](#types)?: string[];  
}

##### Index

### Properties

[canBeDefault?](#canbedefault)
[canConfigure?](#canconfigure)
[documentClass](#documentclass)
[id](#id)
[label?](#label)
[makeDefault?](#makedefault)
[sheetClass](#sheetclass)
[themes?](#themes)
[types?](#types)

## Properties

### `Optional`canBeDefault

canBeDefault?: boolean

Whether this sheet is available to be selected as a default sheet
for all Documents of that type.

### `Optional`canConfigure

canConfigure?: boolean

Whether this sheet appears in the sheet configuration UI for users.

### documentClass

documentClass: any

The Document class to register a new sheet option for.

### id

id: string

The identifier of the sheet being registered.

### `Optional`label

label?: string | (() => string)

A human-readable label for the sheet name, or a function that
returns one. Will be localized.

### `Optional`makeDefault

makeDefault?: boolean

Whether to make this sheet the default for the provided sub-types.

### sheetClass

sheetClass: typeof [Application](../classes/foundry.appv1.api.Application.md) | typeof [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)

An Application class used to render the sheet.

### `Optional`themes

themes?: Record<string, string> | null

An object of theme keys to labels that the sheet supports. If this
option is not supplied, the sheet is assumed to support both light
and dark themes. If null is supplied, it indicates that the sheet
does not support theming.

### `Optional`types

types?: string[]

An array of Document sub-types to register the sheet for.