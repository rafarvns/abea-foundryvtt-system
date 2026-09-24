---
title: "_ModuleManifestData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types._ModuleManifestData.html"
category: "interfaces"
---

# Interface \_ModuleManifestData

Manifest properties exclusive to modules.

interface \_ModuleManifestData {  
Â Â Â Â [coreTranslation](#coretranslation)?: boolean;  
Â Â Â Â [documentTypes](#documenttypes)?: [DocumentTypesConfiguration](../types/foundry.packages.types.DocumentTypesConfiguration.md);  
Â Â Â Â [library](#library)?: boolean;  
Â Â Â Â [quickstart](#quickstart)?: [QuickstartManifestData](foundry.packages.types.QuickstartManifestData.md);  
Â Â Â Â [type](#type): "module";  
}

##### Index

### Properties

[coreTranslation?](#coretranslation)
[documentTypes?](#documenttypes)
[library?](#library)
[quickstart?](#quickstart)
[type](#type)

## Properties

### `Optional`coreTranslation

coreTranslation?: boolean

Does this module provide a translation for the core software?

### `Optional`documentTypes

documentTypes?: [DocumentTypesConfiguration](../types/foundry.packages.types.DocumentTypesConfiguration.md)

Additional document subtypes provided by this module.

### `Optional`library

library?: boolean

A library module provides no user-facing functionality and is solely
for use by other modules. Loaded before any system or module scripts.

### `Optional`quickstart

quickstart?: [QuickstartManifestData](foundry.packages.types.QuickstartManifestData.md)

The Quick-Start configuration.

### type

type: "module"

The package type among world, system, and module