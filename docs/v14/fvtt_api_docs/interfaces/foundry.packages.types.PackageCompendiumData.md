---
title: "PackageCompendiumData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.PackageCompendiumData.html"
category: "interfaces"
---

# Interface PackageCompendiumData

interface PackageCompendiumData {  
Â Â Â Â [banner](#banner)?: string;  
Â Â Â Â [label](#label): string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [path](#path): string;  
Â Â Â Â [system](#system)?: string;  
Â Â Â Â [type](#type): string;  
}

##### Index

### Properties

[banner?](#banner)
[label](#label)
[name](#name)
[path](#path)
[system?](#system)
[type](#type)

## Properties

### `Optional`banner

banner?: string

A file path to a banner image that will be used in the Compendium sidebar. This should
be hosted within your package, e.g. `modules/my-module/assets/banners/bestiary.webp`.
The dimensions are 290 x 70; you can either have each be an individual landscape or
slice them up to form a composite with your other compendiums, but keep in mind that
users can reorder compendium packs as well as filter them to break up the composite.

### label

label: string

The human-readable compendium name

### name

name: string

The canonical compendium name. This should contain no spaces or special characters

### path

path: string

The local relative path to the compendium source directory. The filename should match
the name attribute

### `Optional`system

system?: string

Denote that this compendium pack requires a specific game system to function properly.
Required for "Actor" and "Item" packs, but even others should keep in mind that system
specific features and subtypes (e.g. JournalEntryPage) may present limitations.

### type

type: string

The specific document type that is contained within this compendium pack