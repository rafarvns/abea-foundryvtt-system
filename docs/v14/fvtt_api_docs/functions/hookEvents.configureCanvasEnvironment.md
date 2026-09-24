---
title: "configureCanvasEnvironment | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.configureCanvasEnvironment.html"
category: "functions"
---

# Function configureCanvasEnvironment

* configureCanvasEnvironment(config: [CanvasEnvironmentConfig](../interfaces/foundry.CanvasEnvironmentConfig.md)): void

  A hook event that fires at the beginning of [foundry.canvas.groups.EnvironmentCanvasGroup#initialize](../classes/foundry.canvas.groups.EnvironmentCanvasGroup.md#initialize) which
  allows the environment configuration to be altered by hook functions.
  The provided config param should be mutated to make any desired changes.
  A method subscribing to this hook may return false to prevent further configuration.

  #### Parameters

  + config: [CanvasEnvironmentConfig](../interfaces/foundry.CanvasEnvironmentConfig.md)

  #### Returns void