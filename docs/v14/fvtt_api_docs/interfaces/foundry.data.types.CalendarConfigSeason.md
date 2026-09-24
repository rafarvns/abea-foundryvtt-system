---
title: "CalendarConfigSeason | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.CalendarConfigSeason.html"
category: "interfaces"
---

# Interface CalendarConfigSeason

A definition of a season within a calendar year. By default, seasons can be defined as aligning to either months or
specific ranges of days. A range in either months or in days must be specified.

interface CalendarConfigSeason {  
Â Â Â Â [abbreviation](#abbreviation)?: string;  
Â Â Â Â [dayEnd](#dayend)?: number | null;  
Â Â Â Â [dayStart](#daystart)?: number | null;  
Â Â Â Â [monthEnd](#monthend)?: number | null;  
Â Â Â Â [monthStart](#monthstart)?: number | null;  
Â Â Â Â [name](#name): string;  
}

##### Index

### Properties

[abbreviation?](#abbreviation)
[dayEnd?](#dayend)
[dayStart?](#daystart)
[monthEnd?](#monthend)
[monthStart?](#monthstart)
[name](#name)

## Properties

### `Optional`abbreviation

abbreviation?: string

The abbreviated name of the season.

### `Optional`dayEnd

dayEnd?: number | null

A day of the year at the end of which the season ends.

### `Optional`dayStart

dayStart?: number | null

A day of the year at the beginning of which the season starts.

### `Optional`monthEnd

monthEnd?: number | null

An ordinal month at the end of which the season starts.

### `Optional`monthStart

monthStart?: number | null

An ordinal month at the beginning of which the season starts.

### name

name: string

The full name of the season.