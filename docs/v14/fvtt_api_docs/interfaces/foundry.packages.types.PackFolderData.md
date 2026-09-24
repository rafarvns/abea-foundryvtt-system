---
title: "PackFolderData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.PackFolderData.html"
category: "interfaces"
---

# Interface PackFolderData

interface PackFolderData {  
Â Â Â Â [color](#color): string;  
Â Â Â Â [folders](#folders): PackFolderData[];  
Â Â Â Â [name](#name): string;  
Â Â Â Â [packs](#packs): string[];  
Â Â Â Â [sorting](#sorting): "m" | "a";  
}

##### Index

### Properties

[color](#color)
[folders](#folders)
[name](#name)
[packs](#packs)
[sorting](#sorting)

## Properties

### color

color: string

A hex string for the pack's color.

### folders

folders: PackFolderData[]

Nested folder data, up to three levels.

### name

name: string

Name for the folder. Multiple packages with identical folder names will merge by name.

### packs

packs: string[]

A list of the pack names to include in this folder.

### sorting

sorting: "m" | "a"

Alphabetical or manual sorting.