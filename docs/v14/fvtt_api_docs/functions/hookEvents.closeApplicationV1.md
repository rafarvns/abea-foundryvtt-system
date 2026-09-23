---
title: "closeApplicationV1 | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.closeApplicationV1.html"
category: "functions"
---

# Function closeApplicationV1

* closeApplicationV1(application: [Application](../classes/foundry.appv1.api.Application.md), html: JQuery): void

  A hook event that fires whenever this ApplicationV1 is closed. Substitute the "ApplicationV1" in the hook event to
  target a specific ApplicationV1 type, for example "closeMyApplication". Each ApplicationV1 class in the inheritance
  chain will also fire this hook, i.e. "closeApplication" will also fire.

  #### Parameters

  + application: [Application](../classes/foundry.appv1.api.Application.md)

    The ApplicationV1 instance being closed
  + html: JQuery

    The application jQuery when it is closed

  #### Returns void