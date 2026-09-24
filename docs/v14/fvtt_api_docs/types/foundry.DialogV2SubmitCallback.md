---
title: "DialogV2SubmitCallback | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.DialogV2SubmitCallback.html"
category: "types"
---

# Type Alias DialogV2SubmitCallback

DialogV2SubmitCallback: (result: any, dialog: [DialogV2](../classes/foundry.applications.api.DialogV2.md)) => Promise<void>

#### Type Declaration

* + (result: any, dialog: [DialogV2](../classes/foundry.applications.api.DialogV2.md)): Promise<void>
  + #### Parameters

    - result: any

      Either the identifier of the button that was clicked to submit the
      dialog, or the result returned by that button's callback.
    - dialog: [DialogV2](../classes/foundry.applications.api.DialogV2.md)

      The DialogV2 instance.

    #### Returns Promise<void>