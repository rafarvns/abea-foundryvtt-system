---
title: "TimeComponents | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.TimeComponents.html"
category: "interfaces"
---

# Interface TimeComponents

A decomposition of the integer world time in seconds into component parts.
Each component expresses the number of that temporal unit since the time=0 epoch.

interface TimeComponents {  
Â Â Â Â [day](#day): number;  
Â Â Â Â [dayOfMonth](#dayofmonth): number;  
Â Â Â Â [dayOfWeek](#dayofweek): number;  
Â Â Â Â [hour](#hour): number;  
Â Â Â Â [leapYear](#leapyear): boolean;  
Â Â Â Â [minute](#minute): number;  
Â Â Â Â [month](#month): number;  
Â Â Â Â [season](#season): number;  
Â Â Â Â [second](#second): number;  
Â Â Â Â [year](#year): number;  
}

##### Index

### Properties

[day](#day)
[dayOfMonth](#dayofmonth)
[dayOfWeek](#dayofweek)
[hour](#hour)
[leapYear](#leapyear)
[minute](#minute)
[month](#month)
[season](#season)
[second](#second)
[year](#year)

## Properties

### day

day: number

The number of days completed within the year

### dayOfMonth

dayOfMonth: number

The day of the month, starting from zero

### dayOfWeek

dayOfWeek: number

The weekday, an index of the days.values array

### hour

hour: number

The number of hours completed within the year

### leapYear

leapYear: boolean

Is it a leap year?

### minute

minute: number

The number of minutes completed within the hour

### month

month: number

The month, an index of the months.values array

### season

season: number

The season, an index of the seasons.values array

### second

second: number

The number of seconds completed within the minute

### year

year: number

The number of years completed since zero