---
title: "TimeFormatter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.data.types.TimeFormatter.html"
category: "types"
---

# Type Alias TimeFormatter

TimeFormatter: (  
Â Â Â Â calendar: CalendarData,  
Â Â Â Â components: [TimeComponents](../interfaces/foundry.data.types.TimeComponents.md),  
Â Â Â Â options: object,  
) => string

#### Type Declaration

* + (calendar: CalendarData, components: [TimeComponents](../interfaces/foundry.data.types.TimeComponents.md), options: object): string
  + #### Parameters

    - calendar: CalendarData

      The configured calendar
    - components: [TimeComponents](../interfaces/foundry.data.types.TimeComponents.md)

      Time components to format
    - options: object

      Additional formatting options

    #### Returns string