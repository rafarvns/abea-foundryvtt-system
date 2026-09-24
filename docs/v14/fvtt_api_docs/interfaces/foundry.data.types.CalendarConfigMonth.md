---
title: "CalendarConfigMonth | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.CalendarConfigMonth.html"
category: "interfaces"
---

# Interface CalendarConfigMonth

A definition of a month within a calendar year.

interface CalendarConfigMonth {  
Â Â Â Â [abbreviation](#abbreviation)?: string;  
Â Â Â Â [dayOffset](#dayoffset)?: number;  
Â Â Â Â [days](#days): number;  
Â Â Â Â [intercalary](#intercalary)?: boolean;  
Â Â Â Â [leapDays](#leapdays)?: number;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [ordinal](#ordinal): number;  
Â Â Â Â [startingWeekday](#startingweekday)?: number | null;  
}

##### Index

### Properties

[abbreviation?](#abbreviation)
[dayOffset?](#dayoffset)
[days](#days)
[intercalary?](#intercalary)
[leapDays?](#leapdays)
[name](#name)
[ordinal](#ordinal)
[startingWeekday?](#startingweekday)

## Properties

### `Optional`abbreviation

abbreviation?: string

The abbreviated name of the month.

### `Optional`dayOffset

dayOffset?: number

The amount to offset day numbers for this month.

### days

days: number

The number of days in the month.

### `Optional`intercalary

intercalary?: boolean

If this month is an intercalary month.

### `Optional`leapDays

leapDays?: number

The number of days in the month during a leap year.
If not defined the value of days is used.

### name

name: string

The full name of the month.

### ordinal

ordinal: number

The ordinal position of this month in the year.

### `Optional`startingWeekday

startingWeekday?: number | null

The day of the week this month should always start on.
If the value is null the month will start on the next weekday
after the previous month