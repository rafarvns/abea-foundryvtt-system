---
title: "MenuToggleBlockWrapCommand | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.prosemirror.types.MenuToggleBlockWrapCommand.html"
category: "types"
---

# Type Alias MenuToggleBlockWrapCommand

MenuToggleBlockWrapCommand: (  
Â Â Â Â node: NodeType,  
Â Â Â Â attrs?: object,  
) => [ProseMirrorCommand](foundry.prosemirror.types.ProseMirrorCommand.md)

#### Type Declaration

* + (node: NodeType, attrs?: object): [ProseMirrorCommand](foundry.prosemirror.types.ProseMirrorCommand.md)
  + #### Parameters

    - node: NodeType

      The node to wrap the selection in.
    - `Optional`attrs: object

      Attributes for the node.

    #### Returns [ProseMirrorCommand](foundry.prosemirror.types.ProseMirrorCommand.md)