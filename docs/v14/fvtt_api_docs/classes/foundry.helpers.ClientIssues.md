---
title: "ClientIssues | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.ClientIssues.html"
category: "classes"
---

# Class ClientIssues

A class responsible for tracking issues in the current world.

##### Index

### Accessors

[packageCompatibilityIssues](#packagecompatibilityissues)
[usabilityIssues](#usabilityissues)
[validationFailures](#validationfailures)

### Methods

[\_countDocumentSubType](#_countdocumentsubtype)
[\_detectDocumentIssues](#_detectdocumentissues)
[\_detectUsabilityIssues](#_detectusabilityissues)
[\_detectWebGLIssues](#_detectwebglissues)
[\_onDeleteInvalid](#_ondeleteinvalid)
[getAllSubTypeCounts](#getallsubtypecounts)
[getSubTypeCountsFor](#getsubtypecountsfor)

## Accessors

### packageCompatibilityIssues

* get packageCompatibilityIssues(): Record<string, [PackageCompatibilityIssue](../interfaces/foundry.PackageCompatibilityIssue.md)>

  Retrieve package compatibility issues.

  #### Returns Record<string, [PackageCompatibilityIssue](../interfaces/foundry.PackageCompatibilityIssue.md)>

### usabilityIssues

* get usabilityIssues(): Record<string, [UsabilityIssue](../interfaces/foundry.UsabilityIssue.md)>

  Retrieve the tracked usability issues.

  #### Returns Record<string, [UsabilityIssue](../interfaces/foundry.UsabilityIssue.md)>

### validationFailures

* get validationFailures(): {  
  Â Â Â Â [documentName: string]: {  
  Â Â Â Â Â Â Â Â [uuid: string]: { error: Error; name?: string };  
  Â Â Â Â };  
  }

  Retrieve the tracked validation failures.

  #### Returns { [documentName: string]: { [uuid: string]: { error: Error; name?: string } } }

## Methods

### \_countDocumentSubType

* \_countDocumentSubType(  
  Â Â Â Â cls: typeof [Document](foundry.abstract.Document.md),  
  Â Â Â Â source: object,  
  Â Â Â Â options?: { decrement?: boolean },  
  ): void

  `Internal`

  Add an invalid Document to the module-provided sub-type counts.

  #### Parameters

  + cls: typeof [Document](foundry.abstract.Document.md)

    The Document class.
  + source: object

    The Document's source data.
  + `Optional`options: { decrement?: boolean } = {}
    - ##### `Optional`decrement?: boolean

      Decrement the counter rather than incrementing it.

  #### Returns void

### \_detectDocumentIssues

* \_detectDocumentIssues(): void

  `Internal`

  Track all world document validation failures and failures of their embedded documents.

  #### Returns void

### \_detectUsabilityIssues

* \_detectUsabilityIssues(): void

  `Internal`

  Detect and record certain usability error messages which are likely to result in the user having a bad experience.

  #### Returns void

### \_detectWebGLIssues

* \_detectWebGLIssues(): void

  `Internal`

  Detect and display warnings for known performance issues which may occur due to the user's hardware or browser
  configuration.

  #### Returns void

### \_onDeleteInvalid

* \_onDeleteInvalid(  
  Â Â Â Â documentName: string,  
  Â Â Â Â invalidIds: string[],  
  Â Â Â Â context?: {  
  Â Â Â Â Â Â Â Â pack?: string | null;  
  Â Â Â Â Â Â Â Â parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
  Â Â Â Â },  
  ): void

  `Internal`

  Handle deletion of invalid documents.

  #### Parameters

  + documentName: string

    The Document name
  + invalidIds: string[]

    The array of invalid IDs
  + context: {  
    Â Â Â Â pack?: string | null;  
    Â Â Â Â parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
    } = {}

    The context

    - ##### `Optional`pack?: string | null

      The Documents' compendium pack, if applicable
    - ##### `Optional`parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

      The Documents' parent, if any

  #### Returns void

### getAllSubTypeCounts

* getAllSubTypeCounts(): Iterator<string, [ModuleSubTypeCounts](../types/foundry.ModuleSubTypeCounts.md), any>

  Retrieve all sub-type counts in the world.

  #### Returns Iterator<string, [ModuleSubTypeCounts](../types/foundry.ModuleSubTypeCounts.md), any>

### getSubTypeCountsFor

* getSubTypeCountsFor(module: any): [ModuleSubTypeCounts](../types/foundry.ModuleSubTypeCounts.md)

  Get the Document sub-type counts for a given module.

  #### Parameters

  + module: any

    The module or its ID.

  #### Returns [ModuleSubTypeCounts](../types/foundry.ModuleSubTypeCounts.md)