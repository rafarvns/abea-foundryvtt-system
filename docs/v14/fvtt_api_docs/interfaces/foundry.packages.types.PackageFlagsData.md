---
title: "PackageFlagsData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.PackageFlagsData.html"
category: "interfaces"
---

# Interface PackageFlagsData

Flags used by the core software.

interface PackageFlagsData {  
Â Â Â Â [canUpload](#canupload): boolean;  
Â Â Â Â [compendiumArtMappings](#compendiumartmappings): Record<string, [CompendiumArtFlag](foundry.packages.types.CompendiumArtFlag.md)>;  
Â Â Â Â [hotReload](#hotreload): { extensions: string[]; paths: string[] };  
Â Â Â Â [tokenRingSubjectMappings](#tokenringsubjectmappings): Record<string, string>;  
}

##### Index

### Properties

[canUpload](#canupload)
[compendiumArtMappings](#compendiumartmappings)
[hotReload](#hotreload)
[tokenRingSubjectMappings](#tokenringsubjectmappings)

## Properties

### canUpload

canUpload: boolean

Can you upload to this package's folder using the built-in FilePicker.

### compendiumArtMappings

compendiumArtMappings: Record<string, [CompendiumArtFlag](foundry.packages.types.CompendiumArtFlag.md)>

Mapping information for CompendiumArt
Each key is a unique system ID, e.g. "dnd5e" or "pf2e".

### hotReload

hotReload: { extensions: string[]; paths: string[] }

Configuration information for hot reload logic

#### Type Declaration

* ##### extensions: string[]

  A list of file extensions, e.g. `["css", "hbs", "json"]`
* ##### paths: string[]

  File paths to watch, e.g. `["src/styles", "templates", "lang"]`

### tokenRingSubjectMappings

tokenRingSubjectMappings: Record<string, string>

A mapping of token subject paths
to configured subject images.