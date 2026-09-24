---
title: "GameTime | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.GameTime.html"
category: "classes"
---

# Class GameTime

A singleton class at which keeps the official Server and World time stamps.
Uses a basic implementation of <https://www.geeksforgeeks.org/cristians-algorithm/> for synchronization.

#### See

[foundry.Game#time](foundry.Game.md#time)

##### Index

### Properties

[SYNC\_INTERVAL\_MS](#sync_interval_ms)

### Accessors

[averageLatency](#averagelatency)
[calendar](#calendar)
[components](#components)
[earthCalendar](#earthcalendar)
[serverTime](#servertime)
[worldTime](#worldtime)

### Methods

[advance](#advance)
[initializeCalendar](#initializecalendar)
[onUpdateWorldTime](#onupdateworldtime)
[set](#set)
[sync](#sync)

## Properties

### `Static`SYNC\_INTERVAL\_MS

SYNC\_INTERVAL\_MS: number = ...

The amount of time to delay before re-syncing the official server time.

## Accessors

### averageLatency

* get averageLatency(): number

  The average one-way latency between client and server in milliseconds.

  #### Returns number

### calendar

* get calendar(): [CalendarData](foundry.data.CalendarData.md)<[TimeComponents](../interfaces/foundry.data.types.TimeComponents.md)>

  The calendar instance for in-world timekeeping.

  #### Returns [CalendarData](foundry.data.CalendarData.md)<[TimeComponents](../interfaces/foundry.data.types.TimeComponents.md)>

### components

* get components(): [TimeComponents](../interfaces/foundry.data.types.TimeComponents.md)

  The current World time expressed as components.

  #### Returns [TimeComponents](../interfaces/foundry.data.types.TimeComponents.md)

### earthCalendar

* get earthCalendar(): [CalendarData](foundry.data.CalendarData.md)<[TimeComponents](../interfaces/foundry.data.types.TimeComponents.md)>

  The "Earth" calendar instance for IRL timekeeping.

  #### Returns [CalendarData](foundry.data.CalendarData.md)<[TimeComponents](../interfaces/foundry.data.types.TimeComponents.md)>

### serverTime

* get serverTime(): number

  The current server time based on the last synchronization point and the approximated one-way latency.

  #### Returns number

### worldTime

* get worldTime(): number

  + The current World time expressed in seconds.

  #### Returns number

## Methods

### advance

* advance(delta: number | [TimeComponents](../interfaces/foundry.data.types.TimeComponents.md), options?: object): Promise<number>

  Advance or rewind the world time according to a delta amount expressed either in seconds or as components.

  #### Parameters

  + delta: number | [TimeComponents](../interfaces/foundry.data.types.TimeComponents.md)

    The number of seconds to advance (or rewind if negative) by
  + `Optional`options: object

    Additional options passed to game.settings.set

  #### Returns Promise<number>

  The new game time

### initializeCalendar

* initializeCalendar(): void

  Initialize a calendar configuration.
  This is called once automatically upon construction, but can be called manually if CONFIG.time changes.

  #### Returns void

### onUpdateWorldTime

* onUpdateWorldTime(  
  Â Â Â Â worldTime: number,  
  Â Â Â Â options: object,  
  Â Â Â Â userId: string,  
  ): Promise<void>

  Handle follow-up actions when the official World time is changed

  #### Parameters

  + worldTime: number

    The new canonical World time.
  + options: object

    Options passed from the requesting client where the change was made
  + userId: string

    The ID of the User who advanced the time

  #### Returns Promise<void>

### set

* set(time: number | [TimeComponents](../interfaces/foundry.data.types.TimeComponents.md), options?: object): Promise<number>

  Directly set the world time to a certain value expressed either in seconds or as components.

  #### Parameters

  + time: number | [TimeComponents](../interfaces/foundry.data.types.TimeComponents.md)

    The desired world time
  + `Optional`options: object

    Additional options passed to game.settings.set

  #### Returns Promise<number>

  The new game time

### sync

* sync(): Promise<GameTime>

  Synchronize the local client game time with the official time kept by the server

  #### Returns Promise<GameTime>