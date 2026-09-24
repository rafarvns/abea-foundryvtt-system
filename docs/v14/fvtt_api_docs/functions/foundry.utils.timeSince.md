---
title: "timeSince | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.timeSince.html"
category: "functions"
---

# Function timeSince

* timeSince(timeStamp: string | Date): string

  Express a timestamp as a relative string.
  This helper internally uses GameTime#format using the relative formatter and the Earth calendar.

  #### Parameters

  + timeStamp: string | Date

    A timestamp string or Date object to be formatted as a relative time

  #### Returns string

  A string expression for the relative time