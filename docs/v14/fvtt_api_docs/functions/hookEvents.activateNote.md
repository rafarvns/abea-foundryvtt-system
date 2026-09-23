---
title: "activateNote | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.activateNote.html"
category: "functions"
---

# Function activateNote

* activateNote(note: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Note](../classes/foundry.canvas.placeables.Note.md), options: object): void

  A hook event that fires whenever a map note is double-clicked.
  The hook provides the note placeable and the arguments passed to the associated
  [foundry.applications.sheets.journal.JournalEntrySheet](../classes/foundry.applications.sheets.journal.JournalEntrySheet.md) render call.
  Hooked functions may modify the render arguments or cancel the render by returning false.

  #### Parameters

  + note: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Note](../classes/foundry.canvas.placeables.Note.md)

    The note that was activated.
  + options: object

    Options for rendering the associated
    [foundry.applications.sheets.journal.JournalEntrySheet](../classes/foundry.applications.sheets.journal.JournalEntrySheet.md).

  #### Returns void