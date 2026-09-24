---
title: "WordTree | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.utils.WordTree.html"
category: "classes"
---

# Class WordTree

A data structure for quickly retrieving objects by a string prefix.
Note that this works well for languages with alphabets (latin, cyrillic, korean, etc.), but may need more nuanced
handling for languages that compose characters and letters.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.utils.WordTree))

* [StringTree](foundry.utils.StringTree.md)
  + WordTree

##### Index

### Accessors

[leaves](#leaves)

### Methods

[addLeaf](#addleaf)
[lookup](#lookup)
[nodeAtPrefix](#nodeatprefix)
[\_breadthFirstSearch](#_breadthfirstsearch)

## Accessors

### `Static`leaves

* get leaves(): symbol

  The key symbol that stores the leaves of any given node.

  #### Returns symbol

  Inherited from StringTree.leaves

## Methods

### addLeaf

* addLeaf(strings: any, entry: any): [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)

  Insert an entry into the tree.

  #### Parameters

  + strings: any

    The string parents for the entry.
  + entry: any

    The entry to store.

  #### Returns [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)

  The node the entry was added to.

  Overrides [StringTree](foundry.utils.StringTree.md).[addLeaf](foundry.utils.StringTree.md#addleaf)

### lookup

* lookup(  
  Â Â Â Â prefix: string,  
  Â Â Â Â options?: { filterEntries?: [StringTreeEntryFilter](../types/foundry.utils.types.StringTreeEntryFilter.md); limit?: number },  
  ): [WordTreeEntry](../interfaces/foundry.utils.types.WordTreeEntry.md)[]

  Return entries that match the given string prefix.

  #### Parameters

  + prefix: string

    The prefix.
  + `Optional`options: { filterEntries?: [StringTreeEntryFilter](../types/foundry.utils.types.StringTreeEntryFilter.md); limit?: number } = {}

    Additional options to configure behaviour.

    - ##### `Optional`filterEntries?: [StringTreeEntryFilter](../types/foundry.utils.types.StringTreeEntryFilter.md)

      A filter function to apply to each candidate entry.
    - ##### `Optional`limit?: number

      The maximum number of items to retrieve. It is important to set this value as
      very short prefixes will naturally match large numbers of entries.

  #### Returns [WordTreeEntry](../interfaces/foundry.utils.types.WordTreeEntry.md)[]

  A number of entries that have the given prefix.

  Overrides [StringTree](foundry.utils.StringTree.md).[lookup](foundry.utils.StringTree.md#lookup)

### nodeAtPrefix

* nodeAtPrefix(prefix: string): [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)

  Returns the node at the given prefix.

  #### Parameters

  + prefix: string

    The prefix.

  #### Returns [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)

  Overrides [StringTree](foundry.utils.StringTree.md).[nodeAtPrefix](foundry.utils.StringTree.md#nodeatprefix)

### `Protected`\_breadthFirstSearch

* \_breadthFirstSearch(  
  Â Â Â Â node: [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md),  
  Â Â Â Â entries: any[],  
  Â Â Â Â queue: [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)[],  
  Â Â Â Â options?: { filterEntries?: [StringTreeEntryFilter](../types/foundry.utils.types.StringTreeEntryFilter.md); limit?: number },  
  ): void

  `Protected`

  Perform a breadth-first search starting from the given node and retrieving any entries reachable from that node,
  until we reach the limit.

  #### Parameters

  + node: [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)

    The starting node.
  + entries: any[]

    The accumulated entries.
  + queue: [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)[]

    The working queue of nodes to search.
  + `Optional`options: { filterEntries?: [StringTreeEntryFilter](../types/foundry.utils.types.StringTreeEntryFilter.md); limit?: number } = {}
    - ##### `Optional`filterEntries?: [StringTreeEntryFilter](../types/foundry.utils.types.StringTreeEntryFilter.md)

      A filter function to apply to each candidate entry.
    - ##### `Optional`limit?: number

      The maximum number of entries to retrieve before stopping.

  #### Returns void

  Inherited from [StringTree](foundry.utils.StringTree.md).[\_breadthFirstSearch](foundry.utils.StringTree.md#_breadthfirstsearch)