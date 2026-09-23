---
title: "EffectDurationData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.EffectDurationData.html"
category: "interfaces"
---

# Interface EffectDurationData

interface EffectDurationData {  
Â Â Â Â [expired](#expired): boolean;  
Â Â Â Â [expiry](#expiry): string | null;  
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

[expired](#expired)
[expiry](#expiry)
[units](#units)
[value](#value)

## Properties

### expired

expired: boolean

Is this ActiveEffect expired?

### expiry

expiry: string | null

An identifier of an event at which the Effect will expire: expiration occurs when both
the end of the duration and the expiry event are reached. A truly indefinite duration
is one in which both duration value and expiry are null.

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