---
title: "DocumentClassMetadata | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types.DocumentClassMetadata.html"
category: "interfaces"
---

# Interface DocumentClassMetadata

interface DocumentClassMetadata {  
Â Â Â Â [baseTypeAllowed](#basetypeallowed)?: boolean;  
Â Â Â Â [collection](#collection): string;  
Â Â Â Â [compendiumIndexFields](#compendiumindexfields): string[];  
Â Â Â Â [coreTypes](#coretypes): string[];  
Â Â Â Â [embedded](#embedded): Record<string, string>;  
Â Â Â Â [hasTypeData](#hastypedata): boolean;  
Â Â Â Â [indexed](#indexed): boolean;  
Â Â Â Â [label](#label): string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [permissions](#permissions): Record<  
Â Â Â Â Â Â Â Â "view"  
Â Â Â Â Â Â Â Â | "create"  
Â Â Â Â Â Â Â Â | "update"  
Â Â Â Â Â Â Â Â | "delete",  
  
Â Â Â Â Â Â Â Â Â Â Â Â | "INHERIT"  
Â Â Â Â Â Â Â Â Â Â Â Â | "NONE"  
Â Â Â Â Â Â Â Â Â Â Â Â | "LIMITED"  
Â Â Â Â Â Â Â Â Â Â Â Â | "OBSERVER"  
Â Â Â Â Â Â Â Â Â Â Â Â | "OWNER"  
Â Â Â Â Â Â Â Â Â Â Â Â | "PLAYER"  
Â Â Â Â Â Â Â Â Â Â Â Â | "TRUSTED"  
Â Â Â Â Â Â Â Â Â Â Â Â | "ASSISTANT"  
Â Â Â Â Â Â Â Â Â Â Â Â | "GAMEMASTER"  
Â Â Â Â Â Â Â Â Â Â Â Â | [DocumentPermissionTest](../types/foundry.abstract.types.DocumentPermissionTest.md),  
Â Â Â Â >;  
Â Â Â Â [preserveOnImport](#preserveonimport): string[];  
Â Â Â Â [schemaVersion](#schemaversion)?: string;  
}

##### Index

### Properties

[baseTypeAllowed?](#basetypeallowed)
[collection](#collection)
[compendiumIndexFields](#compendiumindexfields)
[coreTypes](#coretypes)
[embedded](#embedded)
[hasTypeData](#hastypedata)
[indexed](#indexed)
[label](#label)
[name](#name)
[permissions](#permissions)
[preserveOnImport](#preserveonimport)
[schemaVersion?](#schemaversion)

## Properties

### `Optional`baseTypeAllowed

baseTypeAllowed?: boolean

If the Document class has type data, can users normally create instances of the
"base" type?

### collection

collection: string

### compendiumIndexFields

compendiumIndexFields: string[]

### coreTypes

coreTypes: string[]

### embedded

embedded: Record<string, string>

### hasTypeData

hasTypeData: boolean

### indexed

indexed: boolean

### label

label: string

### name

name: string

### permissions

permissions: Record<  
Â Â Â Â "view"  
Â Â Â Â | "create"  
Â Â Â Â | "update"  
Â Â Â Â | "delete",  
  
Â Â Â Â Â Â Â Â | "INHERIT"  
Â Â Â Â Â Â Â Â | "NONE"  
Â Â Â Â Â Â Â Â | "LIMITED"  
Â Â Â Â Â Â Â Â | "OBSERVER"  
Â Â Â Â Â Â Â Â | "OWNER"  
Â Â Â Â Â Â Â Â | "PLAYER"  
Â Â Â Â Â Â Â Â | "TRUSTED"  
Â Â Â Â Â Â Â Â | "ASSISTANT"  
Â Â Â Â Â Â Â Â | "GAMEMASTER"  
Â Â Â Â Â Â Â Â | [DocumentPermissionTest](../types/foundry.abstract.types.DocumentPermissionTest.md),  
>

### preserveOnImport

preserveOnImport: string[]

### `Optional`schemaVersion

schemaVersion?: string