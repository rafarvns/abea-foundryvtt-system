---
title: "CalendarConfigDays | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.CalendarConfigDays.html"
category: "interfaces"
---

# Interface CalendarConfigDays

Day related configuration for a calendar.

interface CalendarConfigDays {  
Â Â Â Â [daysPerYear](#daysperyear)?: number;  
Â Â Â Â [hoursPerDay](#hoursperday)?: number;  
Â Â Â Â [minutesPerHour](#minutesperhour)?: number;  
Â Â Â Â [secondsPerMinute](#secondsperminute)?: number;  
Â Â Â Â [values](#values): [CalendarConfigDay](foundry.data.types.CalendarConfigDay.md)[];  
}

##### Index

### Properties

[daysPerYear?](#daysperyear)
[hoursPerDay?](#hoursperday)
[minutesPerHour?](#minutesperhour)
[secondsPerMinute?](#secondsperminute)
[values](#values)

## Properties

### `Optional`daysPerYear

daysPerYear?: number

The number of days in a year.

### `Optional`hoursPerDay

hoursPerDay?: number

The number of hours in a day.

### `Optional`minutesPerHour

minutesPerHour?: number

The number of minutes in an hour.

### `Optional`secondsPerMinute

secondsPerMinute?: number

The number of seconds in a minute.

### values

values: [CalendarConfigDay](foundry.data.types.CalendarConfigDay.md)[]

The configuration of the days of the week.