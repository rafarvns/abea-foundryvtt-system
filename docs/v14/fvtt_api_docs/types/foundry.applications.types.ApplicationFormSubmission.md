---
title: "ApplicationFormSubmission | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.applications.types.ApplicationFormSubmission.html"
category: "types"
---

# Type Alias ApplicationFormSubmission

ApplicationFormSubmission: (  
Â Â Â Â event: SubmitEvent | Event,  
Â Â Â Â form: HTMLFormElement,  
Â Â Â Â formData: [FormDataExtended](../classes/foundry.applications.ux.FormDataExtended.md),  
) => Promise<any>

A form submission handler method. Run in the context of a
[foundry.applications.api.HandlebarsApplicationMixin](../functions/foundry.applications.api.HandlebarsApplicationMixin.md).

#### Type Declaration

* + (  
    Â Â Â Â event: SubmitEvent | Event,  
    Â Â Â Â form: HTMLFormElement,  
    Â Â Â Â formData: [FormDataExtended](../classes/foundry.applications.ux.FormDataExtended.md),  
    ): Promise<any>
  + #### Parameters

    - event: SubmitEvent | Event

      The originating form submission or input change event
    - form: HTMLFormElement

      The form element that was submitted
    - formData: [FormDataExtended](../classes/foundry.applications.ux.FormDataExtended.md)

      Processed data for the submitted form

    #### Returns Promise<any>