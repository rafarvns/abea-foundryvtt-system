---
title: "PlaylistDirectoryTreeContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.PlaylistDirectoryTreeContext.html"
category: "interfaces"
---

# Interface PlaylistDirectoryTreeContext

interface PlaylistDirectoryTreeContext {  
Â Â Â Â [children](#children): PlaylistDirectoryTreeContext[];  
Â Â Â Â [depth](#depth): number;  
Â Â Â Â [entries](#entries): [PlaylistRenderContext](foundry.PlaylistRenderContext.md)[];  
Â Â Â Â [folder](#folder): Folder;  
}

##### Index

### Properties

[children](#children)
[depth](#depth)
[entries](#entries)
[folder](#folder)

## Properties

### children

children: PlaylistDirectoryTreeContext[]

Render context for this node's children.

### depth

depth: number

The node's depth in the tree.

### entries

entries: [PlaylistRenderContext](foundry.PlaylistRenderContext.md)[]

Render context for the Playlist documents at this node.

### folder

folder: Folder

The Folder document that represents this node.