---
title: "AdventureContentTreeNode | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.AdventureContentTreeNode.html"
category: "interfaces"
---

# Interface AdventureContentTreeNode

interface AdventureContentTreeNode {  
Â Â Â Â [children](#children): AdventureContentTreeNode[];  
Â Â Â Â [documents](#documents): {  
Â Â Â Â Â Â Â Â document: ClientDocument;  
Â Â Â Â Â Â Â Â id: string;  
Â Â Â Â Â Â Â Â name: string;  
Â Â Â Â Â Â Â Â state: string;  
Â Â Â Â }[];  
Â Â Â Â [folder](#folder): Folder;  
Â Â Â Â [id](#id): string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [state](#state): string;  
}

##### Index

### Properties

[children](#children)
[documents](#documents)
[folder](#folder)
[id](#id)
[name](#name)
[state](#state)

## Properties

### children

children: AdventureContentTreeNode[]

An array of child nodes

### documents

documents: { document: ClientDocument; id: string; name: string; state: string }[]

An array of documents

### folder

folder: Folder

The Folder at this node level

### id

id: string

An alias for [folder.id](http://folder.id)

### name

name: string

An alias for [folder.name](http://folder.name)

### state

state: string

The modification state of the Folder