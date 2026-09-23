---
title: "DiceFulfillmentMethod | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.DiceFulfillmentMethod.html"
category: "interfaces"
---

# Interface DiceFulfillmentMethod

interface DiceFulfillmentMethod {  
Â Â Â Â [handler](#handler)?: [DiceFulfillmentHandler](../types/CONFIG.DiceFulfillmentHandler.md);  
Â Â Â Â [icon](#icon)?: string;  
Â Â Â Â [interactive](#interactive)?: boolean;  
Â Â Â Â [label](#label): string;  
Â Â Â Â [resolver](#resolver)?: typeof [RollResolver](../classes/foundry.applications.dice.RollResolver.md);  
}

##### Index

### Properties

[handler?](#handler)
[icon?](#icon)
[interactive?](#interactive)
[label](#label)
[resolver?](#resolver)

## Properties

### `Optional`handler

handler?: [DiceFulfillmentHandler](../types/CONFIG.DiceFulfillmentHandler.md)

A function to invoke to programmatically fulfil a given term for non-
interactive fulfillment methods.

### `Optional`icon

icon?: string

An icon to represent the fulfillment method.

### `Optional`interactive

interactive?: boolean

Whether this method requires input from the user or if it is
fulfilled entirely programmatically.

### label

label: string

The human-readable label for the fulfillment method.

### `Optional`resolver

resolver?: typeof [RollResolver](../classes/foundry.applications.dice.RollResolver.md)

A custom RollResolver implementation. If the only interactive methods
the user has configured are this method and manual, this resolver will
be used to resolve interactive rolls, instead of the default resolver.
This resolver must therefore be capable of handling manual rolls.