---
title: "getApplicationV1HeaderButtons | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.getApplicationV1HeaderButtons.html"
category: "functions"
---

# Function getApplicationV1HeaderButtons

* getApplicationV1HeaderButtons(  
  Â Â Â Â application: [Application](../classes/foundry.appv1.api.Application.md),  
  Â Â Â Â buttons: [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[],  
  ): void

  A hook event that fires whenever this ApplicationV1 is first rendered to add buttons to its header. Substitute the
  "ApplicationV1" in the hook event to target a specific ApplicationV1 type, for example
  "getMyApplicationHeaderButtons". Each Application class in the inheritance chain will also fire this hook, i.e.
  "getApplicationHeaderButtons" will also fire.

  #### Parameters

  + application: [Application](../classes/foundry.appv1.api.Application.md)

    The ApplicationV1 instance being rendered
  + buttons: [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

    The array of header buttons which will be displayed

  #### Returns void