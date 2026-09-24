---
title: "ProseMirrorContentLinkOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.prosemirror.types.ProseMirrorContentLinkOptions.html"
category: "interfaces"
---

# Interface ProseMirrorContentLinkOptions

interface ProseMirrorContentLinkOptions {  
Â Â Â Â [document](#document)?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>;  
Â Â Â Â [relativeLinks](#relativelinks)?: boolean;  
}

##### Index

### Properties

[document?](#document)
[relativeLinks?](#relativelinks)

## Properties

### `Optional`document

document?: [Document](../classes/foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

The parent document housing this editor.

### `Optional`relativeLinks

relativeLinks?: boolean

Whether to generate links relative to the parent document.