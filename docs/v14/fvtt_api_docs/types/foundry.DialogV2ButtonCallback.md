---
title: "DialogV2ButtonCallback | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.DialogV2ButtonCallback.html"
category: "types"
---

# Type Alias DialogV2ButtonCallback

DialogV2ButtonCallback: (  
Â Â Â Â event: PointerEvent | SubmitEvent,  
Â Â Â Â button: HTMLButtonElement,  
Â Â Â Â dialog: [DialogV2](../classes/foundry.applications.api.DialogV2.md),  
) => Promise<any>

#### Type Declaration

* + (  
    Â Â Â Â event: PointerEvent | SubmitEvent,  
    Â Â Â Â button: HTMLButtonElement,  
    Â Â Â Â dialog: [DialogV2](../classes/foundry.applications.api.DialogV2.md),  
    ): Promise<any>
  + #### Parameters

    - event: PointerEvent | SubmitEvent

      The button click event, or a form submission event if the dialog was
      submitted via keyboard.
    - button: HTMLButtonElement

      If the form was submitted via keyboard, this will be the default
      button, otherwise the button that was clicked.
    - dialog: [DialogV2](../classes/foundry.applications.api.DialogV2.md)

      The DialogV2 instance.

    #### Returns Promise<any>