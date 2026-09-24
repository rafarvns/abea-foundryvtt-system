---
title: "CalendarConfigYears | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.CalendarConfigYears.html"
category: "interfaces"
---

# Interface CalendarConfigYears

A definition of a year within a calendar.

interface CalendarConfigYears {  
Â Â Â Â [firstWeekday](#firstweekday)?: number;  
Â Â Â Â [leapYear](#leapyear)?: [CalendarConfigLeapYear](foundry.data.types.CalendarConfigLeapYear.md) | null;  
Â Â Â Â [yearZero](#yearzero)?: number;  
}

##### Index

### Properties

[firstWeekday?](#firstweekday)
[leapYear?](#leapyear)
[yearZero?](#yearzero)

## Properties

### `Optional`firstWeekday

firstWeekday?: number

The index of days.values that is the first weekday at time=0

### `Optional`leapYear

leapYear?: [CalendarConfigLeapYear](foundry.data.types.CalendarConfigLeapYear.md) | null

A definition of how leap years work within a calendar.

### `Optional`yearZero

yearZero?: number

The year which is presented as 0 when formatting a time
into a string representation.