---
title: "ProseMirrorInputConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.ProseMirrorInputConfig.html"
category: "interfaces"
---

# Interface ProseMirrorInputConfig

interface ProseMirrorInputConfig {  
Â Â Â Â [collaborate](#collaborate): boolean;  
Â Â Â Â [documentUUID](#documentuuid): string;  
Â Â Â Â [enriched](#enriched)?: string;  
Â Â Â Â [height](#height)?: number;  
Â Â Â Â [toggled](#toggled): boolean;  
}

##### Index

### Properties

[collaborate](#collaborate)
[documentUUID](#documentuuid)
[enriched?](#enriched)
[height?](#height)
[toggled](#toggled)

## Properties

### collaborate

collaborate: boolean

Does this editor instance support collaborative editing?

### documentUUID

documentUUID: string

A Document UUID. Required for collaborative editing

### `Optional`enriched

enriched?: string

If the editor is toggled, provide the enrichedHTML which is displayed while
the editor is not active.

### `Optional`height

height?: number

The height of the editor in pixels

### toggled

toggled: boolean

Is this editor toggled (true) or always active (false)