---
title: "Dice | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.Dice.html"
category: "variables"
---

# Variable Dice`Const`

Dice: {  
Â Â Â Â fulfillment: {  
Â Â Â Â Â Â Â Â defaultMethod: string;  
Â Â Â Â Â Â Â Â dice: Record<string, [DiceFulfillmentDenomination](../interfaces/CONFIG.DiceFulfillmentDenomination.md)>;  
Â Â Â Â Â Â Â Â methods: Record<string, [DiceFulfillmentMethod](../interfaces/CONFIG.DiceFulfillmentMethod.md)>;  
Â Â Â Â };  
Â Â Â Â functions: Record<string, [RollFunction](../types/CONFIG.RollFunction.md)>;  
Â Â Â Â parser: typeof [RollParser](../classes/foundry.dice.RollParser.md);  
Â Â Â Â randomUniform: () => number;  
Â Â Â Â rolls: typeof [Roll](../classes/foundry.dice.Roll.md)[];  
Â Â Â Â terms: Record<string, typeof [DiceTerm](../classes/foundry.dice.terms.DiceTerm.md)>;  
Â Â Â Â termTypes: Record<string, typeof [RollTerm](../classes/foundry.dice.terms.RollTerm.md)>;  
Â Â Â Â types: typeof [DiceTerm](../classes/foundry.dice.terms.DiceTerm.md)[];  
} = ...

Configuration for dice rolling behaviors in the Foundry Virtual Tabletop client.

#### Type Declaration

* ##### fulfillment: { Â Â Â Â defaultMethod: string; Â Â Â Â dice: Record<string, [DiceFulfillmentDenomination](../interfaces/CONFIG.DiceFulfillmentDenomination.md)>; Â Â Â Â methods: Record<string, [DiceFulfillmentMethod](../interfaces/CONFIG.DiceFulfillmentMethod.md)>; }

  Dice roll fulfillment configuration.
* ##### functions: Record<string, [RollFunction](../types/CONFIG.RollFunction.md)>

  A collection of custom functions that can be included in roll expressions.
* ##### parser: typeof [RollParser](../classes/foundry.dice.RollParser.md)

  A parser implementation for parsing Roll expressions.
* ##### randomUniform: () => number

  A function used to provide random uniform values.
* ##### rolls: typeof [Roll](../classes/foundry.dice.Roll.md)[]

  Configured Roll class definitions
* ##### terms: Record<string, typeof [DiceTerm](../classes/foundry.dice.terms.DiceTerm.md)>

  Configured roll terms and the classes they map to.
* ##### termTypes: Record<string, typeof [RollTerm](../classes/foundry.dice.terms.RollTerm.md)>

  Configured DiceTerm class definitions
* ##### types: typeof [DiceTerm](../classes/foundry.dice.terms.DiceTerm.md)[]

  The Dice types which are supported.