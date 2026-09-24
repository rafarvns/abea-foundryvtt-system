---
title: "time | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.time.html"
category: "variables"
---

# Variable time`Const`

time: {  
Â Â Â Â earthCalendarClass: typeof [CalendarData](../classes/foundry.data.CalendarData.md);  
Â Â Â Â earthCalendarConfig: [CalendarConfig](../interfaces/foundry.data.types.CalendarConfig.md);  
Â Â Â Â formatters: Record<string, TimeFormatter>;  
Â Â Â Â roundTime: number;  
Â Â Â Â turnTime: number;  
Â Â Â Â worldCalendarClass: typeof [CalendarData](../classes/foundry.data.CalendarData.md);  
Â Â Â Â worldCalendarConfig: [CalendarConfig](../interfaces/foundry.data.types.CalendarConfig.md);  
} = ...

Configuration for time tracking.

#### Type Declaration

* ##### earthCalendarClass: typeof [CalendarData](../classes/foundry.data.CalendarData.md)

  The CalendarData subclass is used for IRL timekeeping.
* ##### earthCalendarConfig: [CalendarConfig](../interfaces/foundry.data.types.CalendarConfig.md)

  The Calendar configuration used for IRL timekeeping.
* ##### formatters: Record<string, TimeFormatter>

  Formatting functions used to display time data as strings.
* ##### roundTime: number

  The number of seconds that automatically elapse at the end of a Combat round.
* ##### turnTime: number

  The number of seconds that automatically elapse at the end of a Combat turn.
* ##### worldCalendarClass: typeof [CalendarData](../classes/foundry.data.CalendarData.md)

  The CalendarData subclass is used for in-world timekeeping.
* ##### worldCalendarConfig: [CalendarConfig](../interfaces/foundry.data.types.CalendarConfig.md)

  The Calendar configuration used for in-world timekeeping.