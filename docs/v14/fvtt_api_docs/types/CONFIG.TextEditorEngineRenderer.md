---
title: "TextEditorEngineRenderer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/CONFIG.TextEditorEngineRenderer.html"
category: "types"
---

# Type Alias TextEditorEngineRenderer

TextEditorEngineRenderer: (  
Â Â Â Â options: @param {boolean} [options.editable=true] Whether the editor is editable.
\* @param {boolean} [options.button=false] Whether the editor state is toggleable via button.
\* @param {boolean} [options.collaborate=false] Whether the editor should allow for collaborative editing, if
\* supported.
\* @param {number} [options.height] Render the editor at a fixed height.
\* @param {string} [options.value] The editor's initial content.
\* @param {string} [options.name] The editor's name in the form.
\* ,  
) => HTMLElement

#### Type Declaration

* + (  
    Â Â Â Â options: @param {boolean} [options.editable=true] Whether the editor is editable.
    \* @param {boolean} [options.button=false] Whether the editor state is toggleable via button.
    \* @param {boolean} [options.collaborate=false] Whether the editor should allow for collaborative editing, if
    \* supported.
    \* @param {number} [options.height] Render the editor at a fixed height.
    \* @param {string} [options.value] The editor's initial content.
    \* @param {string} [options.name] The editor's name in the form.
    \* ,  
    ): HTMLElement
  + #### Parameters

    - options: @param {boolean} [options.editable=true] Whether the editor is editable.
      \* @param {boolean} [options.button=false] Whether the editor state is toggleable via button.
      \* @param {boolean} [options.collaborate=false] Whether the editor should allow for collaborative editing, if
      \* supported.
      \* @param {number} [options.height] Render the editor at a fixed height.
      \* @param {string} [options.value] The editor's initial content.
      \* @param {string} [options.name] The editor's name in the form.
      \* 

      Render options.

    #### Returns HTMLElement