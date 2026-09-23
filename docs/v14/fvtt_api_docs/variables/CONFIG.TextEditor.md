---
title: "TextEditor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.TextEditor.html"
category: "variables"
---

# Variable TextEditor`Const`

TextEditor: {  
Â Â Â Â engines: Record<string, [TextEditorEngineConfig](../interfaces/CONFIG.TextEditorEngineConfig.md)>;  
Â Â Â Â enrichers: [TextEditorEnricherConfig](../interfaces/CONFIG.TextEditorEnricherConfig.md)[];  
Â Â Â Â inserts: [ProseMirrorInsert](../interfaces/CONFIG.ProseMirrorInsert.md)[];  
} = ...

Rich text editing configuration.

#### Type Declaration

* ##### engines: Record<string, [TextEditorEngineConfig](../interfaces/CONFIG.TextEditorEngineConfig.md)>

  Configuration for custom text editor engines.
* ##### enrichers: [TextEditorEnricherConfig](../interfaces/CONFIG.TextEditorEnricherConfig.md)[]

  A collection of custom enrichers that can be applied to text content, allowing for the matching and handling of
  custom patterns.
* ##### inserts: [ProseMirrorInsert](../interfaces/CONFIG.ProseMirrorInsert.md)[]

  A collection of custom ProseMirror inserts that the user may place in their ProseMirror documents.

  #### Example: Inserting a custom readaloud block at the cursor's position.

  ```
  CONFIG.TextEditor.inserts.push({  
    action: "readaloud",  
    title: "Readaloud",  
    html: `  
      <div class="readaloud">  
        <strong>Title</strong>  
        <blockquote>You awake to find yourself in a dark room.</blockquote>  
      </div>  
    `  
  });
  Copy
  ```

  #### Example: Wrapping the selection in an inline span with a custom class.

  ```
  CONFIG.TextEditor.inserts.push({  
    action: "lore-link",  
    title: "Lore Link",  
    inline: true,  
    html: '<span class="lore"><selection></selection></span>'  
  });
  Copy
  ```

  #### Example: Wrapping the selection in a block, with fallback content if there is no selection.

  ```
  CONFIG.TextEditor.inserts.push({  
    action: "readaloud",  
    title: "Readaloud",  
    html: `  
      <div class="readaloud">  
        <selection>  
        <strong>Title</strong>  
        <blockquote>You awake to find yourself in a dark room.</blockquote>  
        </selection>  
      </div>  
    `  
  })
  Copy
  ```

  #### Example: Provide a group for several inserts.

  ```
  CONFIG.TextEditor.inserts.push({  
    action: "my-inserts",  
    title: "My Inserts",  
    children: [{  
      action: "lore-link",  
      title: "Lore Link",  
      inline: true,  
      html: '<span class="lore"><selection></selection></span>'  
    }, {  
      action: "quest-link",  
      title: "Quest Link",  
      inline: true,  
      html: '<span class="quest"><selection></selection></span>'  
    }]  
  })
  Copy
  ```