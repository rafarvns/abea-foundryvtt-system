---
title: "PoolTerm | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.dice.terms.PoolTerm.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [dice](../modules/foundry.dice.html)
* [terms](../modules/foundry.dice.terms.html)
* [PoolTerm](foundry.dice.terms.PoolTerm.html)

# Class PoolTerm

A type of RollTerm which encloses a pool of multiple inner Rolls which are evaluated jointly.

A dice pool represents a set of Roll expressions which are collectively modified to compute an effective total
across all Rolls in the pool. The final total for the pool is defined as the sum over kept rolls, relative to any
success count or margin.

#### Example: Keep the highest of the 3 roll expressions

```
let pool = new PoolTerm({  
  terms: ["4d6", "3d8 - 1", "2d10 + 3"],  
  modifiers: ["kh"]  
});  
pool.evaluate();
Copy
```

#### Hierarchy ([View Summary](../hierarchy.html#foundry.dice.terms.PoolTerm))

* [RollTerm](foundry.dice.terms.RollTerm.html)
  + PoolTerm

##### Index

### Properties

[\_root](foundry.dice.terms.PoolTerm.html#_root)
[isIntermediate](foundry.dice.terms.PoolTerm.html#isintermediate)
[modifiers](foundry.dice.terms.PoolTerm.html#modifiers)
[options](foundry.dice.terms.PoolTerm.html#options)
[results](foundry.dice.terms.PoolTerm.html#results)
[rolls](foundry.dice.terms.PoolTerm.html#rolls)
[terms](foundry.dice.terms.PoolTerm.html#terms)
[CLOSE\_REGEXP](foundry.dice.terms.PoolTerm.html#close_regexp)
[FLAVOR\_REGEXP](foundry.dice.terms.PoolTerm.html#flavor_regexp)
[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.PoolTerm.html#flavor_regexp_string)
[MODIFIERS](foundry.dice.terms.PoolTerm.html#modifiers-1)
[OPEN\_REGEXP](foundry.dice.terms.PoolTerm.html#open_regexp)
[REGEXP](foundry.dice.terms.PoolTerm.html#regexp)
[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.PoolTerm.html#serialize_attributes)

### Accessors

[dice](foundry.dice.terms.PoolTerm.html#dice)
[expression](foundry.dice.terms.PoolTerm.html#expression)
[flavor](foundry.dice.terms.PoolTerm.html#flavor)
[formula](foundry.dice.terms.PoolTerm.html#formula)
[isDeterministic](foundry.dice.terms.PoolTerm.html#isdeterministic)
[resolver](foundry.dice.terms.PoolTerm.html#resolver)
[total](foundry.dice.terms.PoolTerm.html#total)
[values](foundry.dice.terms.PoolTerm.html#values)

### Methods

[\_evaluate](foundry.dice.terms.PoolTerm.html#_evaluate)
[\_evaluateModifier](foundry.dice.terms.PoolTerm.html#_evaluatemodifier)
[\_evaluateModifiers](foundry.dice.terms.PoolTerm.html#_evaluatemodifiers)
[alter](foundry.dice.terms.PoolTerm.html#alter)
[countFailures](foundry.dice.terms.PoolTerm.html#countfailures)
[countSuccess](foundry.dice.terms.PoolTerm.html#countsuccess)
[drop](foundry.dice.terms.PoolTerm.html#drop)
[evaluate](foundry.dice.terms.PoolTerm.html#evaluate)
[keep](foundry.dice.terms.PoolTerm.html#keep)
[toJSON](foundry.dice.terms.PoolTerm.html#tojson)
[\_evaluateAsync](foundry.dice.terms.PoolTerm.html#_evaluateasync)
[\_evaluateSync](foundry.dice.terms.PoolTerm.html#_evaluatesync)
[\_fromData](foundry.dice.terms.PoolTerm.html#_fromdata)
[fromData](foundry.dice.terms.PoolTerm.html#fromdata)
[fromExpression](foundry.dice.terms.PoolTerm.html#fromexpression)
[fromJSON](foundry.dice.terms.PoolTerm.html#fromjson)
[fromParseNode](foundry.dice.terms.PoolTerm.html#fromparsenode)
[fromRolls](foundry.dice.terms.PoolTerm.html#fromrolls)
[isDeterministic](foundry.dice.terms.PoolTerm.html#isdeterministic-2)

## Properties

### `Internal`\_root

\_root: [Roll](foundry.dice.Roll.html)

A reference to the Roll at the root of the evaluation tree.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[\_root](foundry.dice.terms.RollTerm.html#_root)

### isIntermediate

isIntermediate: boolean = false

Is this term intermediate, and should be evaluated first as part of the simplification process?

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[isIntermediate](foundry.dice.terms.RollTerm.html#isintermediate)

### modifiers

modifiers: string[]

The string modifiers applied to resolve the pool

### options

options: object

An object of additional options which describes and modifies the term.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[options](foundry.dice.terms.RollTerm.html#options)

### results

results: [DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)[]

The array of dice pool results which have been rolled

### rolls

rolls: [Roll](foundry.dice.Roll.html)[]

Each component term of the dice pool as a Roll instance.

### terms

terms: string[]

The original provided terms to the Dice Pool

### `Static`CLOSE\_REGEXP

CLOSE\_REGEXP: RegExp = ...

A regular expression pattern used to identify the closing of a dice pool expression.

### `Static`FLAVOR\_REGEXP

FLAVOR\_REGEXP: RegExp = ...

A regular expression which identifies term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[FLAVOR\_REGEXP](foundry.dice.terms.RollTerm.html#flavor_regexp)

### `Static`FLAVOR\_REGEXP\_STRING

FLAVOR\_REGEXP\_STRING: string = "(?:\\[([^\\]]+)\\])"

A regular expression pattern which identifies optional term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.RollTerm.html#flavor_regexp_string)

### `Static`MODIFIERS

MODIFIERS: Record<string, string | Function> = ...

Define the modifiers that can be used for this particular DiceTerm type.

### `Static`OPEN\_REGEXP

OPEN\_REGEXP: RegExp = ...

The regular expression pattern used to identify the opening of a dice pool expression.

### `Static`REGEXP

REGEXP: RegExp = ...

A regular expression pattern used to match the entirety of a DicePool expression.

Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[REGEXP](foundry.dice.terms.RollTerm.html#regexp)

### `Static`SERIALIZE\_ATTRIBUTES

SERIALIZE\_ATTRIBUTES: string[] = ...

An array of additional attributes which should be retained when the term is serialized

Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.RollTerm.html#serialize_attributes)

## Accessors

### dice

* get dice(): [DiceTerm](foundry.dice.terms.DiceTerm.html)[]

  Return an Array of each individual DiceTerm instances contained within the PoolTerm.

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.html)[]

### expression

* get expression(): string

  A string representation of the formula expression for this RollTerm, prior to evaluation.

  #### Returns string

  Overrides RollTerm.expression

### flavor

* get flavor(): string

  Optional flavor text which modifies and describes this term.

  #### Returns string

  Inherited from RollTerm.flavor

### formula

* get formula(): string

  A string representation of the formula, including optional flavor text.

  #### Returns string

  Inherited from RollTerm.formula

### isDeterministic

* get isDeterministic(): boolean

  Whether this term is entirely deterministic or contains some randomness.

  #### Returns boolean

  Overrides RollTerm.isDeterministic

### resolver

* get resolver(): [RollResolver](foundry.applications.dice.RollResolver.html)

  A reference to the RollResolver app being used to externally resolve this term.

  #### Returns [RollResolver](foundry.applications.dice.RollResolver.html)

  Inherited from RollTerm.resolver

### total

* get total(): undefined | number

  A string or numeric representation of the final output for this term, after evaluation.

  #### Returns undefined | number

  Overrides RollTerm.total

### values

* get values(): number[]

  Return an array of rolled values which are still active within the PoolTerm

  #### Returns number[]

## Methods

### \_evaluate

* \_evaluate(options?: {}): [PoolTerm](foundry.dice.terms.PoolTerm.html) | Promise<[PoolTerm](foundry.dice.terms.PoolTerm.html)>

  Evaluate the term.

  #### Parameters

  + options: {} = {}

    Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

  #### Returns [PoolTerm](foundry.dice.terms.PoolTerm.html) | Promise<[PoolTerm](foundry.dice.terms.PoolTerm.html)>

  Returns a Promise if the term is non-deterministic.

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[\_evaluate](foundry.dice.terms.RollTerm.html#_evaluate)

### \_evaluateModifier

* \_evaluateModifier(command: string, modifier: string): Promise<void>

  `Internal`

  Use the same logic as for the DiceTerm to avoid duplication

  #### Parameters

  + command: string
  + modifier: string

  #### Returns Promise<void>

  #### See

  [foundry.dice.terms.DiceTerm#\_evaluateModifier](foundry.dice.terms.DiceTerm.html#_evaluatemodifier)

### \_evaluateModifiers

* \_evaluateModifiers(): Promise<void>

  `Internal`

  Use the same logic as for the DiceTerm to avoid duplication

  #### Returns Promise<void>

  #### See

  [foundry.dice.terms.DiceTerm#\_evaluateModifiers](foundry.dice.terms.DiceTerm.html#_evaluatemodifiers)

### alter

* alter(...args: any[]): [PoolTerm](foundry.dice.terms.PoolTerm.html)

  Alter the DiceTerm by adding or multiplying the number of dice which are rolled

  #### Parameters

  + ...args: any[]

    Arguments passed to each contained Roll#alter method.

  #### Returns [PoolTerm](foundry.dice.terms.PoolTerm.html)

  The altered pool

### countFailures

* countFailures(modifier: string): undefined | false

  Count the number of failed results which occurred in a given result set.
  Failures are counted relative to some target, or relative to the lowest possible value if no target is given.
  Applying a count-failures modifier to the results re-casts all results to 1 (failure) or 0 (non-failure)

  6d6cf Count the number of dice which rolled a 1 as failures
  6d6cf<=3 Count the number of dice which rolled less than 3 as failures
  6d6cf>4 Count the number of dice which rolled greater than 4 as failures

  #### Parameters

  + modifier: string

    The matched modifier query

  #### Returns undefined | false

### countSuccess

* countSuccess(modifier: string): undefined | false

  Count the number of successful results which occurred in the pool.
  Successes are counted relative to some target, or relative to the maximum possible value if no target is given.
  Applying a count-success modifier to the results re-casts all results to 1 (success) or 0 (failure)

  20d20cs Count the number of dice which rolled a 20
  20d20cs>10 Count the number of dice which rolled higher than 10
  20d20cs<10 Count the number of dice which rolled less than 10

  #### Parameters

  + modifier: string

    The matched modifier query

  #### Returns undefined | false

### drop

* drop(modifier: string): undefined | false

  Keep a certain number of highest or lowest dice rolls from the result set.

  {1d6,1d8,1d10,1d12}dl3 Drop the 3 worst results in the pool
  {1d12,6}dh Drop the highest result in the pool

  #### Parameters

  + modifier: string

    The matched modifier query

  #### Returns undefined | false

### evaluate

* evaluate(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowStrings?: boolean;  
  Â Â Â Â Â Â Â Â maximize?: boolean;  
  Â Â Â Â Â Â Â Â minimize?: boolean;  
  Â Â Â Â },  
  ): [RollTerm](foundry.dice.terms.RollTerm.html)  
  | Promise<[RollTerm](foundry.dice.terms.RollTerm.html)>

  Evaluate the term, processing its inputs and finalizing its total.

  #### Parameters

  + `Optional`options: { allowStrings?: boolean; maximize?: boolean; minimize?: boolean } = {}

    Options which modify how the RollTerm is evaluated

    - ##### `Optional`allowStrings?: boolean

      If true, string terms will not throw an error when evaluated.
    - ##### `Optional`maximize?: boolean

      Maximize the result, obtaining the largest possible value.
    - ##### `Optional`minimize?: boolean

      Minimize the result, obtaining the smallest possible value.

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html) | Promise<[RollTerm](foundry.dice.terms.RollTerm.html)>

  Returns a Promise if the term is non-deterministic.

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[evaluate](foundry.dice.terms.RollTerm.html#evaluate)

### keep

* keep(modifier: string): undefined | false

  Keep a certain number of highest or lowest dice rolls from the result set.

  {1d6,1d8,1d10,1d12}kh2 Keep the 2 best rolls from the pool
  {1d12,6}kl Keep the lowest result in the pool

  #### Parameters

  + modifier: string

    The matched modifier query

  #### Returns undefined | false

### toJSON

* toJSON(): [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)

  Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
  This method should return an object suitable for passing to the JSON.stringify function.

  #### Returns [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[toJSON](foundry.dice.terms.RollTerm.html#tojson)

### `Protected`\_evaluateAsync

* \_evaluateAsync(options?: object): Promise<[PoolTerm](foundry.dice.terms.PoolTerm.html)>

  `Protected`

  Evaluate this pool term when it contains any non-deterministic sub-terms.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[PoolTerm](foundry.dice.terms.PoolTerm.html)>

### `Protected`\_evaluateSync

* \_evaluateSync(options?: object): [PoolTerm](foundry.dice.terms.PoolTerm.html)

  `Protected`

  Evaluate this pool term when it contains only deterministic sub-terms.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns [PoolTerm](foundry.dice.terms.PoolTerm.html)

### `Static`\_fromData

* \_fromData(data: any): [RollTerm](foundry.dice.terms.RollTerm.html)

  Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm

  #### Parameters

  + data: any

    The de-serialized term data

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  The re-constructed RollTerm object

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[\_fromData](foundry.dice.terms.RollTerm.html#_fromdata)

### `Static`fromData

* fromData(data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)): [RollTerm](foundry.dice.terms.RollTerm.html)

  Construct a RollTerm from a provided data object

  #### Parameters

  + data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)

    Provided data from an un-serialized term

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  The constructed RollTerm

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[fromData](foundry.dice.terms.RollTerm.html#fromdata)

### `Static`fromExpression

* fromExpression(formula: string, options?: object): null | [PoolTerm](foundry.dice.terms.PoolTerm.html)

  Given a string formula, create and return an evaluated PoolTerm object

  #### Parameters

  + formula: string

    The string formula to parse
  + `Optional`options: object = {}

    Additional options applied to the PoolTerm

  #### Returns null | [PoolTerm](foundry.dice.terms.PoolTerm.html)

  The evaluated PoolTerm object or null if the formula is invalid

### `Static`fromJSON

* fromJSON(json: string): [RollTerm](foundry.dice.terms.RollTerm.html)

  Reconstruct a RollTerm instance from a provided JSON string

  #### Parameters

  + json: string

    A serialized JSON representation of a DiceTerm

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  A reconstructed RollTerm from the provided JSON

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[fromJSON](foundry.dice.terms.RollTerm.html#fromjson)

### `Static`fromParseNode

* fromParseNode(node: any): [RollTerm](foundry.dice.terms.RollTerm.html)

  #### Parameters

  + node: any

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[fromParseNode](foundry.dice.terms.RollTerm.html#fromparsenode)

### `Static`fromRolls

* fromRolls(rolls?: [Roll](foundry.dice.Roll.html)[]): [PoolTerm](foundry.dice.terms.PoolTerm.html)

  Create a PoolTerm by providing an array of existing Roll objects

  #### Parameters

  + rolls: [Roll](foundry.dice.Roll.html)[] = []

    An array of Roll objects from which to create the pool

  #### Returns [PoolTerm](foundry.dice.terms.PoolTerm.html)

  The constructed PoolTerm comprised of the provided rolls

### `Static`isDeterministic

* isDeterministic(  
  Â Â Â Â term: [RollTerm](foundry.dice.terms.RollTerm.html),  
  Â Â Â Â options?: { maximize?: boolean; minimize?: boolean },  
  ): boolean

  Determine if evaluating a given RollTerm with certain evaluation options can be done so deterministically.

  #### Parameters

  + term: [RollTerm](foundry.dice.terms.RollTerm.html)

    The term.
  + `Optional`options: { maximize?: boolean; minimize?: boolean } = {}

    Options for evaluating the term.

    - ##### `Optional`maximize?: boolean

      Force the result to be maximized.
    - ##### `Optional`minimize?: boolean

      Force the result to be minimized.

  #### Returns boolean

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[isDeterministic](foundry.dice.terms.RollTerm.html#isdeterministic-2)