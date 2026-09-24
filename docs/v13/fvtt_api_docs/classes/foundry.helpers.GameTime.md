---
title: "GameTime | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.helpers.GameTime.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [helpers](../modules/foundry.helpers.html)
* [GameTime](foundry.helpers.GameTime.html)

# Class GameTime

A singleton class at which keeps the official Server and World time stamps.
Uses a basic implementation of <https://www.geeksforgeeks.org/cristians-algorithm/> for synchronization.

#### See

[foundry.Game#time](foundry.Game.html#time)

##### Index

### Properties

[SYNC\_INTERVAL\_MS](foundry.helpers.GameTime.html#sync_interval_ms)

### Accessors

[averageLatency](foundry.helpers.GameTime.html#averagelatency)
[calendar](foundry.helpers.GameTime.html#calendar)
[components](foundry.helpers.GameTime.html#components)
[earthCalendar](foundry.helpers.GameTime.html#earthcalendar)
[serverTime](foundry.helpers.GameTime.html#servertime)
[worldTime](foundry.helpers.GameTime.html#worldtime)

### Methods

[advance](foundry.helpers.GameTime.html#advance)
[initializeCalendar](foundry.helpers.GameTime.html#initializecalendar)
[onUpdateWorldTime](foundry.helpers.GameTime.html#onupdateworldtime)
[set](foundry.helpers.GameTime.html#set)
[sync](foundry.helpers.GameTime.html#sync)

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

* get calendar(): [CalendarData](foundry.data.CalendarData.html)<any>

  The calendar instance for in-world timekeeping.

  #### Returns [CalendarData](foundry.data.CalendarData.html)<any>

### components

* get components(): [TimeComponents](../interfaces/foundry.data.types.TimeComponents.html)

  The current World time expressed as components.

  #### Returns [TimeComponents](../interfaces/foundry.data.types.TimeComponents.html)

### earthCalendar

* get earthCalendar(): [CalendarData](foundry.data.CalendarData.html)<any>

  The "Earth" calendar instance for IRL timekeeping.

  #### Returns [CalendarData](foundry.data.CalendarData.html)<any>

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

* advance(delta: number | [TimeComponents](../interfaces/foundry.data.types.TimeComponents.html), options?: object): Promise<number>

  Advance or rewind the world time according to a delta amount expressed either in seconds or as components.

  #### Parameters

  + delta: number | [TimeComponents](../interfaces/foundry.data.types.TimeComponents.html)

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

* onUpdateWorldTime(worldTime: number, options: object, userId: string): void

  Handle follow-up actions when the official World time is changed

  #### Parameters

  + worldTime: number

    The new canonical World time.
  + options: object

    Options passed from the requesting client where the change was made
  + userId: string

    The ID of the User who advanced the time

  #### Returns void

### set

* set(time: number | [TimeComponents](../interfaces/foundry.data.types.TimeComponents.html), options?: object): Promise<number>

  Directly set the world time to a certain value expressed either in seconds or as components.

  #### Parameters

  + time: number | [TimeComponents](../interfaces/foundry.data.types.TimeComponents.html)

    The desired world time
  + `Optional`options: object

    Additional options passed to game.settings.set

  #### Returns Promise<number>

  The new game time

### sync

* sync(): Promise<[GameTime](foundry.helpers.GameTime.html)>

  Synchronize the local client game time with the official time kept by the server

  #### Returns Promise<[GameTime](foundry.helpers.GameTime.html)>