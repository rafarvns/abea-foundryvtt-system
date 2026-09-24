---
title: "CompendiumArt | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.media.CompendiumArt.html"
category: "classes"
---

# Class CompendiumArt

A class responsible for managing package-provided art and applying it to Documents in compendium packs.

#### Hierarchy

* Map
  + CompendiumArt

##### Index

### Constructors

[constructor](#constructor)

### Properties

[enabled](#enabled)
[FLAG](#flag)
[SETTING](#setting)

### Methods

[\_registerArt](#_registerart)
[applyArt](#applyart)
[getPackages](#getpackages)

## Constructors

### constructor

* new CompendiumArt(  
  Â Â Â Â iterable?: Iterable<[string, [CompendiumArtInfo](../interfaces/foundry.helpers.types.CompendiumArtInfo.md)], any, any> | null,  
  ): CompendiumArt

  #### Parameters

  + `Optional`iterable: Iterable<[string, [CompendiumArtInfo](../interfaces/foundry.helpers.types.CompendiumArtInfo.md)], any, any> | null

  #### Returns CompendiumArt

  Overrides Map.constructor

## Properties

### enabled

enabled: boolean = true

Whether art application is enabled. This should be switched off when performing client-side compendium migrations
in order to avoid persisting injected data.

### FLAG

FLAG: string = "compendiumArtMappings"

The key for the package manifest flag used to store the mapping information.

### SETTING

SETTING: string = "compendiumArtConfiguration"

The key for the setting used to store the World's art preferences.

## Methods

### \_registerArt

* \_registerArt(): Promise<void>

  `Internal`

  Collate Document art mappings from active packages.

  #### Returns Promise<void>

### applyArt

* applyArt(  
  Â Â Â Â documentClass: typeof [Document](foundry.abstract.Document.md),  
  Â Â Â Â source: object,  
  Â Â Â Â packId?: string,  
  ): object

  Apply any art configured for a Document to its source data as it is initialized from a compendium pack.

  #### Parameters

  + documentClass: typeof [Document](foundry.abstract.Document.md)

    The class of the Document being initialized.
  + source: object

    The Document's source data.
  + `Optional`packId: string

    The ID of the compendium pack the Document is initialized from.

  #### Returns object

  The Document's source data.

### getPackages

* getPackages(): [CompendiumArtDescriptor](../interfaces/foundry.helpers.types.CompendiumArtDescriptor.md)[]

  Retrieve all active packages that provide art mappings in priority order.

  #### Returns [CompendiumArtDescriptor](../interfaces/foundry.helpers.types.CompendiumArtDescriptor.md)[]