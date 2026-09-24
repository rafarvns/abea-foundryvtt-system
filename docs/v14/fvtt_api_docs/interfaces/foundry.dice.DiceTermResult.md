---
title: "DiceTermResult | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.dice.DiceTermResult.html"
category: "interfaces"
---

# Interface DiceTermResult

interface DiceTermResult {  
Â Â Â Â [active](#active)?: boolean;  
Â Â Â Â [count](#count)?: number;  
Â Â Â Â [discarded](#discarded)?: boolean;  
Â Â Â Â [exploded](#exploded)?: boolean;  
Â Â Â Â [failure](#failure)?: boolean;  
Â Â Â Â [rerolled](#rerolled)?: boolean;  
Â Â Â Â [result](#result): number;  
Â Â Â Â [success](#success)?: boolean;  
}

##### Index

### Properties

[active?](#active)
[count?](#count)
[discarded?](#discarded)
[exploded?](#exploded)
[failure?](#failure)
[rerolled?](#rerolled)
[result](#result)
[success?](#success)

## Properties

### `Optional`active

active?: boolean

Is this result active, contributing to the total?

### `Optional`count

count?: number

A value that the result counts as, otherwise the result is not used directly as

### `Optional`discarded

discarded?: boolean

Was this result discarded?

### `Optional`exploded

exploded?: boolean

Was this result exploded?

### `Optional`failure

failure?: boolean

Does this result denote a failure?

### `Optional`rerolled

rerolled?: boolean

Was this result rerolled?

### result

result: number

The numeric result

### `Optional`success

success?: boolean

Does this result denote a success?