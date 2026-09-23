---
title: "FolderChildNode | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.FolderChildNode.html"
category: "interfaces"
---

# Interface FolderChildNode

A node of a Folder-content tree

interface FolderChildNode {  
Â Â Â Â [children](#children): FolderChildNode[];  
Â Â Â Â [depth](#depth): number;  
Â Â Â Â [entries](#entries):  
Â Â Â Â Â Â Â Â | [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]  
Â Â Â Â Â Â Â Â | [CompendiumCollection](../classes/foundry.documents.collections.CompendiumCollection.md)<[Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>[];  
Â Â Â Â [folder](#folder): [documents](../modules/foundry.documents.md).[Folder](../classes/foundry.documents.Folder.md);  
Â Â Â Â [root](#root): boolean;  
Â Â Â Â [visible](#visible): boolean;  
}

##### Index

### Properties

[children](#children)
[depth](#depth)
[entries](#entries)
[folder](#folder)
[root](#root)
[visible](#visible)

## Properties

### children

children: FolderChildNode[]

Child nodes of this node

### depth

depth: number

This node's depth number in the tree

### entries

entries:  
Â Â Â Â | [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]  
Â Â Â Â | [CompendiumCollection](../classes/foundry.documents.collections.CompendiumCollection.md)<[Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>[]

Loose contents in this node

### folder

folder: [documents](../modules/foundry.documents.md).[Folder](../classes/foundry.documents.Folder.md)

The Folder document represented by this node

### root

root: boolean

Whether this is the root node of a tree

### visible

visible: boolean

Whether the Folder is visible to the current User