---
title: "DocumentSheetConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DocumentSheetConfiguration.html"
category: "interfaces"
---

# Interface DocumentSheetConfiguration

interface DocumentSheetConfiguration {  
Â Â Â Â [canCreate](#cancreate): boolean;  
Â Â Â Â [canImport](#canimport): boolean;  
Â Â Â Â [document](#document): [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>;  
Â Â Â Â [editPermission](#editpermission): number;  
Â Â Â Â [ownershipConfig](#ownershipconfig): boolean;  
Â Â Â Â [sheetConfig](#sheetconfig): boolean;  
Â Â Â Â [viewPermission](#viewpermission): number;  
}

##### Index

### Properties

[canCreate](#cancreate)
[canImport](#canimport)
[document](#document)
[editPermission](#editpermission)
[ownershipConfig](#ownershipconfig)
[sheetConfig](#sheetconfig)
[viewPermission](#viewpermission)

## Properties

### canCreate

canCreate: boolean

Can this sheet class be used to create a new Document?

### canImport

canImport: boolean

Can the Document be imported into the World from a Compendium Collection?

### document

document: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

The Document instance associated with this sheet

### editPermission

editPermission: number

A permission level in CONST.DOCUMENT\_OWNERSHIP\_LEVELS

### ownershipConfig

ownershipConfig: boolean

Allow ownership configuration as a header button

### sheetConfig

sheetConfig: boolean

Allow sheet configuration as a header button

### viewPermission

viewPermission: number

A permission level in CONST.DOCUMENT\_OWNERSHIP\_LEVELS