---
title: "CalendarConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.CalendarConfig.html"
category: "interfaces"
---

# Interface CalendarConfig

interface CalendarConfig {  
Â Â Â Â [days](#days): [CalendarConfigDays](foundry.data.types.CalendarConfigDays.md);  
Â Â Â Â [description](#description): string;  
Â Â Â Â [months](#months): [CalendarConfigMonths](foundry.data.types.CalendarConfigMonths.md) | null;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [seasons](#seasons): [CalendarConfigSeasons](foundry.data.types.CalendarConfigSeasons.md) | null;  
Â Â Â Â [years](#years): [CalendarConfigYears](foundry.data.types.CalendarConfigYears.md);  
}

##### Index

### Properties

[days](#days)
[description](#description)
[months](#months)
[name](#name)
[seasons](#seasons)
[years](#years)

## Properties

### days

days: [CalendarConfigDays](foundry.data.types.CalendarConfigDays.md)

Configuration of days.

### description

description: string

A text description of the calendar configuration.

### months

months: [CalendarConfigMonths](foundry.data.types.CalendarConfigMonths.md) | null

Configuration of months.

### name

name: string

The name of the calendar being used.

### seasons

seasons: [CalendarConfigSeasons](foundry.data.types.CalendarConfigSeasons.md) | null

Configuration of seasons.

### years

years: [CalendarConfigYears](foundry.data.types.CalendarConfigYears.md)

Configuration of years.