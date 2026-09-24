---
title: "CalendarConfigDay | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.CalendarConfigDay.html"
category: "interfaces"
---

# Interface CalendarConfigDay

A definition of the days of the week within a calendar.

interface CalendarConfigDay {  
Â Â Â Â [abbreviation](#abbreviation)?: string;  
Â Â Â Â [isRestDay](#isrestday)?: boolean;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [ordinal](#ordinal): number;  
}

##### Index

### Properties

[abbreviation?](#abbreviation)
[isRestDay?](#isrestday)
[name](#name)
[ordinal](#ordinal)

## Properties

### `Optional`abbreviation

abbreviation?: string

The abbreviated name of the weekday.

### `Optional`isRestDay

isRestDay?: boolean

Is this weekday considered a rest day (weekend)?

### name

name: string

The full name of the weekday.

### ordinal

ordinal: number

The ordinal position of this weekday in the week.