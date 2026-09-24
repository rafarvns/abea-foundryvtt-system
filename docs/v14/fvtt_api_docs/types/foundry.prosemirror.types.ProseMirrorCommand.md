---
title: "ProseMirrorCommand | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.prosemirror.types.ProseMirrorCommand.html"
category: "types"
---

# Type Alias ProseMirrorCommand

ProseMirrorCommand: (  
Â Â Â Â state: EditorState,  
Â Â Â Â dispatch: Function,  
Â Â Â Â view: EditorView,  
) => boolean

#### Type Declaration

* + (state: EditorState, dispatch: Function, view: EditorView): boolean
  + #### Parameters

    - state: EditorState

      The current editor state.
    - dispatch: Function

      A function to dispatch a transaction.
    - view: EditorView

      Escape-hatch for when the command needs to interact directly with the UI.

    #### Returns boolean