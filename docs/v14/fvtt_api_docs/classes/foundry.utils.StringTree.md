---
title: "StringTree | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.utils.StringTree.html"
category: "classes"
---

# Class StringTree<TEntry>

A data structure representing a tree of string nodes with arbitrary object leaves.

#### Template: TEntry

#### Type Parameters

* TEntry extends object = object

#### Hierarchy ([View Summary](../hierarchy.md#foundry.utils.StringTree))

* StringTree
  + [WordTree](foundry.utils.WordTree.md)

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

## Methods

### addLeaf

* addLeaf(strings: Iterable<string, any, any>, entry: [TEntry](#tentry)): [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)

  Insert an entry into the tree.

  #### Parameters

  + strings: Iterable<string, any, any>

    The string parents for the entry.
  + entry: [TEntry](#tentry)

    The entry to store.

  #### Returns [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)

  The node the entry was added to.

### lookup

* lookup(  
  Â Â Â Â strings: Iterable<string, any, any>,  
  Â Â Â Â options?: { filterEntries?: any; limit?: number },  
  ): [WordTreeEntry](../interfaces/foundry.utils.types.WordTreeEntry.md)[]

  Traverse the tree along the given string path and return any entries reachable from the node.

  #### Parameters

  + strings: Iterable<string, any, any>

    The string path to the desired node.
  + `Optional`options: { filterEntries?: any; limit?: number } = {}
    - ##### `Optional`filterEntries?: any

      A filter function to apply to each candidate entry.
    - ##### `Optional`limit?: number

      The maximum number of items to retrieve.

  #### Returns [WordTreeEntry](../interfaces/foundry.utils.types.WordTreeEntry.md)[]

### nodeAtPrefix

* nodeAtPrefix(  
  Â Â Â Â strings: string[],  
  Â Â Â Â options?: { hasLeaves?: boolean },  
  ): void | [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)

  Returns the node at the given path through the tree.

  #### Parameters

  + strings: string[]

    The string path to the desired node.
  + `Optional`options: { hasLeaves?: boolean } = {}
    - ##### `Optional`hasLeaves?: boolean

      Only return the most recently visited node that has leaves, otherwise
      return the exact node at the prefix, if it exists.

  #### Returns void | [StringTreeNode](../types/foundry.utils.types.StringTreeNode.md)

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