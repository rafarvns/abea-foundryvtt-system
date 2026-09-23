---
title: "DocumentStats | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.DocumentStats.html"
category: "interfaces"
---

# Interface DocumentStats

interface DocumentStats {  
Â Â Â Â [compendiumSource](#compendiumsource): string | null;  
Â Â Â Â [coreVersion](#coreversion): string | null;  
Â Â Â Â [createdTime](#createdtime): number | null;  
Â Â Â Â [duplicateSource](#duplicatesource): string | null;  
Â Â Â Â [lastModifiedBy](#lastmodifiedby): string | null;  
Â Â Â Â [modifiedTime](#modifiedtime): number | null;  
Â Â Â Â [systemId](#systemid): string | null;  
Â Â Â Â [systemVersion](#systemversion): string | null;  
}

##### Index

### Properties

[compendiumSource](#compendiumsource)
[coreVersion](#coreversion)
[createdTime](#createdtime)
[duplicateSource](#duplicatesource)
[lastModifiedBy](#lastmodifiedby)
[modifiedTime](#modifiedtime)
[systemId](#systemid)
[systemVersion](#systemversion)

## Properties

### compendiumSource

compendiumSource: string | null

The UUID of the compendium Document this one was imported from.

### coreVersion

coreVersion: string | null

The core version whose schema the Document data is in.
It is NOT the version the Document was created or last modified in.

### createdTime

createdTime: number | null

A timestamp of when the Document was created.

### duplicateSource

duplicateSource: string | null

The UUID of the Document this one is a duplicate of.

### lastModifiedBy

lastModifiedBy: string | null

The ID of the user who last modified the Document.

### modifiedTime

modifiedTime: number | null

A timestamp of when the Document was last modified.

### systemId

systemId: string | null

The package name of the system the Document was created in.

### systemVersion

systemVersion: string | null

The version of the system the Document was created or last modified in.