---
title: "CompendiumArtDescriptor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.helpers.types.CompendiumArtDescriptor.html"
category: "interfaces"
---

# Interface CompendiumArtDescriptor

interface CompendiumArtDescriptor {  
Â Â Â Â [credit](#credit)?: string;  
Â Â Â Â [mapping](#mapping): string;  
Â Â Â Â [packageId](#packageid): string;  
Â Â Â Â [priority](#priority): number;  
Â Â Â Â [title](#title): string;  
}

##### Index

### Properties

[credit?](#credit)
[mapping](#mapping)
[packageId](#packageid)
[priority](#priority)
[title](#title)

## Properties

### `Optional`credit

credit?: string

An optional credit string for use by the game system to apply in an appropriate place.

### mapping

mapping: string

The path to the art mapping file.

### packageId

packageId: string

The ID of the package providing the art.

### priority

priority: number

The package's user-configured priority.

### title

title: string

The title of the package providing the art.