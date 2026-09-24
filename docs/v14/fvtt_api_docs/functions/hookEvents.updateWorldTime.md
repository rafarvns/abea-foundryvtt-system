---
title: "updateWorldTime | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.updateWorldTime.html"
category: "functions"
---

# Function updateWorldTime

* updateWorldTime(  
  Â Â Â Â worldTime: number,  
  Â Â Â Â dt: number,  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): void

  A hook event that fires when the official World time is changed.

  #### Parameters

  + worldTime: number

    The new canonical World time.
  + dt: number

    The delta.
  + options: object

    Options passed from the requesting client where the change was made
  + userId: string

    The ID of the User who advanced the time

  #### Returns void