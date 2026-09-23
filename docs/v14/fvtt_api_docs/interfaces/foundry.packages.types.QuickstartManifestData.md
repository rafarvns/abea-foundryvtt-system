---
title: "QuickstartManifestData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.QuickstartManifestData.html"
category: "interfaces"
---

# Interface QuickstartManifestData

interface QuickstartManifestData {  
Â Â Â Â [adventures](#adventures): Record<string, [QuickstartAdventureData](foundry.packages.types.QuickstartAdventureData.md)>;  
Â Â Â Â [postImport](#postimport)?: boolean;  
Â Â Â Â [world](#world)?: { background?: string; cover?: string; description?: string };  
}

##### Index

### Properties

[adventures](#adventures)
[postImport?](#postimport)
[world?](#world)

## Properties

### adventures

adventures: Record<string, [QuickstartAdventureData](foundry.packages.types.QuickstartAdventureData.md)>

A mapping of system IDs to an adventure to import for
that system.

### `Optional`postImport

postImport?: boolean

Whether the adventure(s) requires post-import operations. Non-GMs will
be blocked from joining the World while post-import operations are
still pending.

### `Optional`world

world?: { background?: string; cover?: string; description?: string }

Configuration for the auto-created world.

#### Type Declaration

* ##### `Optional`background?: string

  The world's background image for the join page. If omitted, the first
  adventure's image is used.
* ##### `Optional`cover?: string

  The cover image for the world on the setup page. If omitted, the first
  adventure's image is used.
* ##### `Optional`description?: string

  The world's description. If omitted, the first adventure's description
  is used.