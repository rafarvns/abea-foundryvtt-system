---
title: "error | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.error.html"
category: "functions"
---

# Function error

* error(location: string, error: Error, data: object): void

  A hook event that fires whenever foundry experiences an error.

  #### Parameters

  + location: string

    The method where the error was caught.
  + error: Error

    The error.
  + data: object

    Additional data that might be provided, based on the nature of the error.

  #### Returns void