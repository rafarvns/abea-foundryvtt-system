---
title: "editor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.editor.html"
category: "functions"
---

# Function editor

* editor(  
  Â Â Â Â content: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â button?: boolean;  
  Â Â Â Â Â Â Â Â class?: string;  
  Â Â Â Â Â Â Â Â collaborate?: boolean;  
  Â Â Â Â Â Â Â Â editable?: boolean;  
  Â Â Â Â Â Â Â Â engine?: string;  
  Â Â Â Â Â Â Â Â target?: string;  
  Â Â Â Â },  
  ): SafeString

  Construct an editor element for rich text editing with ProseMirror.

  #### Parameters

  + content: string

    The content to display and edit.
  + `Optional`options: {  
    Â Â Â Â button?: boolean;  
    Â Â Â Â class?: string;  
    Â Â Â Â collaborate?: boolean;  
    Â Â Â Â editable?: boolean;  
    Â Â Â Â engine?: string;  
    Â Â Â Â target?: string;  
    }
    - ##### `Optional`button?: boolean

      Include a button used to activate the editor later?
    - ##### `Optional`class?: string

      A specific CSS class to add to the editor container
    - ##### `Optional`collaborate?: boolean

      Whether to turn on collaborative editing features for ProseMirror.
    - ##### `Optional`editable?: boolean

      Is the text editor area currently editable?
    - ##### `Optional`engine?: string

      The editor engine to use, see
      [foundry.applications.ux.TextEditor.create](../classes/foundry.applications.ux.TextEditor.md#create). Default: `"prosemirror"`.
    - ##### `Optional`target?: string

      The named target data element

  #### Returns SafeString

  #### Example

  ```
  {{editor world.description target="description" button=false engine="prosemirror" collaborate=false}}
  Copy
  ```