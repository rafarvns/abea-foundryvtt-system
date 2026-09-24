---
title: "pauseGame | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.pauseGame.html"
category: "functions"
---

# Function pauseGame

* pauseGame(  
  Â Â Â Â paused: boolean,  
  Â Â Â Â options: { broadcast?: boolean; userId?: string },  
  ): void

  A hook event that fires when the game is paused or un-paused.

  #### Parameters

  + paused: boolean

    Is the game now paused (true) or un-paused (false)
  + options: { broadcast?: boolean; userId?: string }

    Options which modified the pause game request

    - ##### `Optional`broadcast?: boolean

      Was the pause request broadcast to other clients?
    - ##### `Optional`userId?: string

      The ID of the User who initiated the pause request

  #### Returns void