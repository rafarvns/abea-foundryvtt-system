---
title: "DiceFulfillmentConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.DiceFulfillmentConfiguration.html"
category: "interfaces"
---

# Interface DiceFulfillmentConfiguration

interface DiceFulfillmentConfiguration {  
Â Â Â Â [defaultMethod](#defaultmethod): string;  
Â Â Â Â [dice](#dice): Record<string, [DiceFulfillmentDenomination](CONFIG.DiceFulfillmentDenomination.md)>;  
Â Â Â Â [methods](#methods): Record<string, [DiceFulfillmentMethod](CONFIG.DiceFulfillmentMethod.md)>;  
}

##### Index

### Properties

[defaultMethod](#defaultmethod)
[dice](#dice)
[methods](#methods)

## Properties

### defaultMethod

defaultMethod: string

Designate one of the methods to be used by default
for dice fulfillment, if the user hasn't specified
otherwise. Leave this blank to use the configured
randomUniform to generate die rolls.

### dice

dice: Record<string, [DiceFulfillmentDenomination](CONFIG.DiceFulfillmentDenomination.md)>

The die denominations available for configuration.

### methods

methods: Record<string, [DiceFulfillmentMethod](CONFIG.DiceFulfillmentMethod.md)>

The methods available for fulfillment.