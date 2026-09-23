---
title: "dropRollTableSheetData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.dropRollTableSheetData.html"
category: "functions"
---

# Function dropRollTableSheetData

* dropRollTableSheetData(  
  Â Â Â Â table: [documents](../modules/foundry.documents.md).[RollTable](../classes/foundry.documents.RollTable.md),  
  Â Â Â Â sheet: [RollTableSheet](../classes/foundry.applications.sheets.RollTableSheet.md),  
  Â Â Â Â data: object,  
  ): void

  A hook event that fires when some useful data is dropped onto a RollTableSheet.

  #### Parameters

  + table: [documents](../modules/foundry.documents.md).[RollTable](../classes/foundry.documents.RollTable.md)

    The RollTable
  + sheet: [RollTableSheet](../classes/foundry.applications.sheets.RollTableSheet.md)

    The RollTableConfig application
  + data: object

    The data dropped onto the RollTableSheet

  #### Returns void