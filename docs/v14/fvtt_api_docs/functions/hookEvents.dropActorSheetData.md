---
title: "dropActorSheetData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.dropActorSheetData.html"
category: "functions"
---

# Function dropActorSheetData

* dropActorSheetData(  
  Â Â Â Â actor: [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md),  
  Â Â Â Â sheet: [ActorSheetV2](../classes/foundry.applications.sheets.ActorSheetV2.md),  
  Â Â Â Â data: object,  
  ): void

  A hook event that fires when some useful data is dropped onto an ActorSheet.

  #### Parameters

  + actor: [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md)

    The Actor
  + sheet: [ActorSheetV2](../classes/foundry.applications.sheets.ActorSheetV2.md)

    The ActorSheet application
  + data: object

    The data that has been dropped onto the sheet

  #### Returns void