---
title: "DocumentIndex | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.DocumentIndex.html"
category: "classes"
---

# Class DocumentIndex

This class is responsible for indexing all documents available in the world.
Stores documents using a word tree structure that allows for efficient searching.

##### Index

### Properties

[trees](#trees)
[uuids](#uuids)

### Accessors

[ready](#ready)

### Methods

[addDocument](#adddocument)
[index](#index)
[lookup](#lookup)
[removeDocument](#removedocument)
[replaceDocument](#replacedocument)
[\_addLeaves](#_addleaves)
[\_indexCompendium](#_indexcompendium)
[\_indexEmbeddedDocuments](#_indexembeddeddocuments)
[\_indexWorldCollection](#_indexworldcollection)

## Properties

### trees

trees: Record<string, [StringTree](foundry.utils.StringTree.md)<object>>

A collection of WordTree structures for each document type.

### uuids

uuids: Record<string, [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)[]>

A reverse-lookup of a document's UUID to its parent nodes in the word tree.

## Accessors

### ready

* get ready(): Promise<void> | null

  Returns a Promise that resolves when the indexing process is complete.

  #### Returns Promise<void> | null

## Methods

### addDocument

* addDocument(doc: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>): void

  Add an entry to the index.

  #### Parameters

  + doc: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The document entry.

  #### Returns void

### index

* index(): Promise<void>

  Index all available documents in the world and store them in a word tree.

  #### Returns Promise<void>

### lookup

* lookup(  
  Â Â Â Â query: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â documentTypes?: string[];  
  Â Â Â Â Â Â Â Â filterEntries?: [StringTreeEntryFilter](../types/foundry.utils.types.StringTreeEntryFilter.md);  
  Â Â Â Â Â Â Â Â limit?: number;  
  Â Â Â Â Â Â Â Â ownership?: any;  
  Â Â Â Â },  
  ): Record<string, [WordTreeEntry](../interfaces/foundry.utils.types.WordTreeEntry.md)[]>

  Return entries that match the given string prefix.

  #### Parameters

  + query: string

    The search prefix or phrase.
  + `Optional`options: {  
    Â Â Â Â documentTypes?: string[];  
    Â Â Â Â filterEntries?: [StringTreeEntryFilter](../types/foundry.utils.types.StringTreeEntryFilter.md);  
    Â Â Â Â limit?: number;  
    Â Â Â Â ownership?: any;  
    } = {}

    Additional options to configure behaviour.

    - ##### `Optional`documentTypes?: string[]

      Optionally provide an array of document types. Only entries of that type
      will be searched for.
    - ##### `Optional`filterEntries?: [StringTreeEntryFilter](../types/foundry.utils.types.StringTreeEntryFilter.md)

      A filter function to apply to each candidate entry.
    - ##### `Optional`limit?: number

      The maximum number of items per document type to retrieve. It is
      important to set this value as very short prefixes will naturally match
      large numbers of entries.
    - ##### `Optional`ownership?: any

      Only return entries that the user meets this
      ownership level for.

  #### Returns Record<string, [WordTreeEntry](../interfaces/foundry.utils.types.WordTreeEntry.md)[]>

  A number of entries that have the given prefix, grouped by document
  type.

### removeDocument

* removeDocument(doc: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>): void

  Remove an entry from the index.

  #### Parameters

  + doc: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The document entry.

  #### Returns void

### replaceDocument

* replaceDocument(doc: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>): void

  Replace an entry in the index with an updated one.

  #### Parameters

  + doc: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The document entry.

  #### Returns void

### `Protected`\_addLeaves

* \_addLeaves(doc: object, options?: { pack?: any }): void

  `Protected`

  Add one or more leaf nodes to the word-tree index.

  #### Parameters

  + doc: object

    The Document or compendium index entry to add.
  + `Optional`options: { pack?: any } = {}

    Additional information for indexing.

    - ##### `Optional`pack?: any

      The compendium that the index belongs to.

  #### Returns void

### `Protected`\_indexCompendium

* \_indexCompendium(pack: CompendiumCollection): void

  `Protected`

  Aggregate the compendium index and add it to the word tree index.

  #### Parameters

  + pack: CompendiumCollection

    The compendium pack.

  #### Returns void

### `Protected`\_indexEmbeddedDocuments

* \_indexEmbeddedDocuments(  
  Â Â Â Â parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  ): void

  `Protected`

  Add all of a parent document's embedded documents to the index.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The parent document.

  #### Returns void

### `Protected`\_indexWorldCollection

* \_indexWorldCollection(documentName: string): void

  `Protected`

  Aggregate all documents and embedded documents in a world collection and add them to the index.

  #### Parameters

  + documentName: string

    The name of the documents to index.

  #### Returns void