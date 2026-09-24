---
title: "PlaylistDirectoryVolumeContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.PlaylistDirectoryVolumeContext.html"
category: "interfaces"
---

# Interface PlaylistDirectoryVolumeContext

interface PlaylistDirectoryVolumeContext {  
Â Â Â Â [aria](#aria): Record<string, string>;  
Â Â Â Â [dataset](#dataset): Record<string, string>;  
Â Â Â Â [field](#field): [NumberField](../classes/foundry.data.fields.NumberField.md);  
Â Â Â Â [modifier](#modifier): number;  
Â Â Â Â [name](#name)?: string;  
}

##### Index

### Properties

[aria](#aria)
[dataset](#dataset)
[field](#field)
[modifier](#modifier)
[name?](#name)

## Properties

### aria

aria: Record<string, string>

HTML ARIA attributes.

### dataset

dataset: Record<string, string>

HTML dataset attributes.

### field

field: [NumberField](../classes/foundry.data.fields.NumberField.md)

The DataField specification for the form input.

### modifier

modifier: number

The volume modifier in the interval [0, 1].

### `Optional`name

name?: string

The form input name.