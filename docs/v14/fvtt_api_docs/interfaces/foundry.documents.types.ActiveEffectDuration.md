---
title: "ActiveEffectDuration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.ActiveEffectDuration.html"
category: "interfaces"
---

# Interface ActiveEffectDuration

interface ActiveEffectDuration {  
Â Â Â Â [\_combatTime](#_combattime)?: number;  
Â Â Â Â [\_worldTime](#_worldtime)?: number;  
Â Â Â Â [expired](#expired): boolean;  
Â Â Â Â [expiry](#expiry): string | null;  
Â Â Â Â [label](#label): string;  
Â Â Â Â [remaining](#remaining): number;  
Â Â Â Â [seconds](#seconds): number | null;  
Â Â Â Â [secondsRemaining](#secondsremaining)?: number;  
Â Â Â Â [units](#units):  
Â Â Â Â Â Â Â Â | "years"  
Â Â Â Â Â Â Â Â | "months"  
Â Â Â Â Â Â Â Â | "days"  
Â Â Â Â Â Â Â Â | "hours"  
Â Â Â Â Â Â Â Â | "minutes"  
Â Â Â Â Â Â Â Â | "seconds"  
Â Â Â Â Â Â Â Â | "rounds"  
Â Â Â Â Â Â Â Â | "turns";  
Â Â Â Â [value](#value): number  
Â Â Â Â | null;  
}

##### Index

### Properties

[\_combatTime?](#_combattime)
[\_worldTime?](#_worldtime)
[expired](#expired)
[expiry](#expiry)
[label](#label)
[remaining](#remaining)
[seconds](#seconds)
[secondsRemaining?](#secondsremaining)
[units](#units)
[value](#value)

## Properties

### `Optional`\_combatTime

\_combatTime?: number

An internal flag used determine when to recompute turns-based duration

### `Optional`\_worldTime

\_worldTime?: number

An internal flag used determine when to recompute seconds-based duration

### expired

expired: boolean

Is this ActiveEffect expired?

### expiry

expiry: string | null

An identifier of an event at which the Effect will expire: expiration occurs when both
the end of the duration and the expiry event are reached. A truly indefinite duration
is one in which both duration value and expiry are null.

### label

label: string

A formatted string label that represents the remaining duration

### remaining

remaining: number

The remaining effect duration in a quantity of the configured unit

### seconds

seconds: number | null

The total duration in seconds

### `Optional`secondsRemaining

secondsRemaining?: number

The remaining effect duration in seconds, given it is possible to express

### units

units:  
Â Â Â Â | "years"  
Â Â Â Â | "months"  
Â Â Â Â | "days"  
Â Â Â Â | "hours"  
Â Â Â Â | "minutes"  
Â Â Â Â | "seconds"  
Â Â Â Â | "rounds"  
Â Â Â Â | "turns"

The time- or combat-based unit of the duration value

### value

value: number | null

The maximum duration of the Effect in the quantity of the unit, with null being
initialized to Infinity