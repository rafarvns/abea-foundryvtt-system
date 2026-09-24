---
title: "userConnected | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.userConnected.html"
category: "functions"
---

# Function userConnected

* userConnected(user: [documents](../modules/foundry.documents.md).[User](../classes/foundry.documents.User.md), connected: boolean): void

  A hook event that fires whenever some other User joins or leaves the game session.

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](../classes/foundry.documents.User.md)

    The User who has connected or disconnected
  + connected: boolean

    Is the user now connected (true) or disconnected (false)

  #### Returns void