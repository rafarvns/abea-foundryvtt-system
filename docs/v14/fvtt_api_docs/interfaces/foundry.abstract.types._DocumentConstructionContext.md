---
title: "_DocumentConstructionContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types._DocumentConstructionContext.html"
category: "interfaces"
---

# Interface \_DocumentConstructionContext

interface \_DocumentConstructionContext {  
Â Â Â Â [creation](#creation)?: boolean;  
Â Â Â Â [modifiedTime](#modifiedtime)?: number;  
Â Â Â Â [pack](#pack)?: string | null;  
Â Â Â Â [parent](#parent)?: any;  
Â Â Â Â [parentCollection](#parentcollection)?: string | null;  
Â Â Â Â [user](#user)?: any;  
}

##### Index

### Properties

[creation?](#creation)
[modifiedTime?](#modifiedtime)
[pack?](#pack)
[parent?](#parent)
[parentCollection?](#parentcollection)
[user?](#user)

## Properties

### `Optional`creation

creation?: boolean

In a ServerDocument context, is this document being created?

### `Optional`modifiedTime

modifiedTime?: number

In a ServerDocument context, the timestamp of creation

### `Optional`pack

pack?: string | null

The compendium collection ID which contains this Document, if any

### `Optional`parent

parent?: any

The parent Document of this one, if this one is embedded

### `Optional`parentCollection

parentCollection?: string | null

The name of the parent Document's collection that would contain this one

### `Optional`user

user?: any

In a ServerDocument context, the User performing the construction