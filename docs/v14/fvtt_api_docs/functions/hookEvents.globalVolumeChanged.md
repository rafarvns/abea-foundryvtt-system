---
title: "globalVolumeChanged | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.globalVolumeChanged.html"
category: "functions"
---

# Function globalVolumeChanged

* globalVolumeChanged(volume: number): void

  A hook event that fires when the user modifies a global volume slider.
  The hook name needs to be customized to include the type of global volume being changed, one of:
  `globalPlaylistVolumeChanged`, `globalAmbientVolumeChanged`, or `globalInterfaceVolumeChanged`.

  #### Parameters

  + volume: number

    The new volume level

  #### Returns void