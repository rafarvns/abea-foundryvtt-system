---
title: "Coin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.dice.terms.Coin.html"
category: "classes"
---

# Class Coin

A type of DiceTerm used to represent flipping a two-sided coin.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.dice.terms.Coin))

* [DiceTerm](foundry.dice.terms.DiceTerm.md)
  + Coin

##### Index

### Properties

[\_root](#_root)
[isIntermediate](#isintermediate)
[modifiers](#modifiers)
[options](#options)
[results](#results)
[\_faces](#_faces)
[\_number](#_number)
[DENOMINATION](#denomination)
[FLAVOR\_REGEXP](#flavor_regexp)
[FLAVOR\_REGEXP\_STRING](#flavor_regexp_string)
[MODIFIER\_REGEXP](#modifier_regexp)
[MODIFIERS](#modifiers-1)
[MODIFIERS\_REGEXP\_STRING](#modifiers_regexp_string)
[REGEXP](#regexp)
[SERIALIZE\_ATTRIBUTES](#serialize_attributes)

### Accessors

[denomination](#denomination-1)
[dice](#dice)
[expression](#expression)
[faces](#faces)
[flavor](#flavor)
[formula](#formula)
[isDeterministic](#isdeterministic)
[method](#method)
[number](#number)
[resolver](#resolver)
[total](#total)
[values](#values)

### Methods

[\_evaluate](#_evaluate)
[\_evaluateModifier](#_evaluatemodifier)
[\_evaluateModifiers](#_evaluatemodifiers)
[alter](#alter)
[call](#call)
[evaluate](#evaluate)
[getResultCSS](#getresultcss)
[getResultLabel](#getresultlabel)
[getTooltipData](#gettooltipdata)
[mapRandomFace](#maprandomface)
[randomFace](#randomface)
[roll](#roll)
[toJSON](#tojson)
[\_evaluateAsync](#_evaluateasync)
[\_evaluateSync](#_evaluatesync)
[\_roll](#_roll)
[\_applyCount](#_applycount)
[\_applyDeduct](#_applydeduct)
[\_fromData](#_fromdata)
[\_keepOrDrop](#_keepordrop)
[compareResult](#compareresult)
[fromData](#fromdata)
[fromJSON](#fromjson)
[fromMatch](#frommatch)
[fromParseNode](#fromparsenode)
[isDeterministic](#isdeterministic-1)
[matchTerm](#matchterm)

## Properties

### `Internal`\_root

\_root: [Roll](foundry.dice.Roll.md)

A reference to the Roll at the root of the evaluation tree.

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_root](foundry.dice.terms.DiceTerm.md#_root)

### isIntermediate

isIntermediate: boolean = false

Is this term intermediate, and should be evaluated first as part of the simplification process?

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[isIntermediate](foundry.dice.terms.DiceTerm.md#isintermediate)

### modifiers

modifiers: string[]

An Array of dice term modifiers which are applied

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[modifiers](foundry.dice.terms.DiceTerm.md#modifiers)

### options

options: object

An object of additional options which describes and modifies the term.

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[options](foundry.dice.terms.DiceTerm.md#options)

### results

results: [DiceTermResult](../interfaces/foundry.dice.DiceTermResult.md)[]

The array of dice term results which have been rolled

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[results](foundry.dice.terms.DiceTerm.md#results)

### `Protected`\_faces

\_faces: number | [Roll](foundry.dice.Roll.md)

The number of faces on the die, or a Roll instance that will be evaluated to a number.

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_faces](foundry.dice.terms.DiceTerm.md#_faces)

### `Protected`\_number

\_number: number | [Roll](foundry.dice.Roll.md)

The number of dice of this term to roll, before modifiers are applied, or a Roll instance that will be evaluated to
a number.

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_number](foundry.dice.terms.DiceTerm.md#_number)

### `Static`DENOMINATION

DENOMINATION: string = "c"

Define the denomination string used to register this DiceTerm type in CONFIG.Dice.terms

Overrides [DiceTerm](foundry.dice.terms.DiceTerm.md).[DENOMINATION](foundry.dice.terms.DiceTerm.md#denomination)

### `Static`FLAVOR\_REGEXP

FLAVOR\_REGEXP: RegExp = ...

A regular expression which identifies term-level flavor text

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[FLAVOR\_REGEXP](foundry.dice.terms.DiceTerm.md#flavor_regexp)

### `Static`FLAVOR\_REGEXP\_STRING

FLAVOR\_REGEXP\_STRING: string = "(?:\\[([^\\]]+)\\])"

A regular expression pattern which identifies optional term-level flavor text

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.DiceTerm.md#flavor_regexp_string)

### `Static`MODIFIER\_REGEXP

MODIFIER\_REGEXP: RegExp = ...

A regular expression used to separate individual modifiers

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[MODIFIER\_REGEXP](foundry.dice.terms.DiceTerm.md#modifier_regexp)

### `Static`MODIFIERS

MODIFIERS: { c: string } = ...

Define the named modifiers that can be applied for this particular DiceTerm type.

Overrides [DiceTerm](foundry.dice.terms.DiceTerm.md).[MODIFIERS](foundry.dice.terms.DiceTerm.md#modifiers-1)

### `Static`MODIFIERS\_REGEXP\_STRING

MODIFIERS\_REGEXP\_STRING: string = "([^ (){}[\\]+\\-\*/]+)"

A regular expression pattern which captures the full set of term modifiers
Anything until a space, group symbol, or arithmetic operator

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[MODIFIERS\_REGEXP\_STRING](foundry.dice.terms.DiceTerm.md#modifiers_regexp_string)

### `Static`REGEXP

REGEXP: RegExp = ...

A regular expression used to match a term of this type

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[REGEXP](foundry.dice.terms.DiceTerm.md#regexp)

### `Static`SERIALIZE\_ATTRIBUTES

SERIALIZE\_ATTRIBUTES: string[] = ...

An array of additional attributes which should be retained when the term is serialized

Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.DiceTerm.md#serialize_attributes)

## Accessors

### denomination

* get denomination(): string

  The denomination of this DiceTerm instance.

  #### Returns string

  Inherited from DiceTerm.denomination

### dice

* get dice(): [DiceTerm](foundry.dice.terms.DiceTerm.md)[]

  An array of additional DiceTerm instances involved in resolving this DiceTerm.

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.md)[]

  Inherited from DiceTerm.dice

### expression

* get expression(): string

  A string representation of the formula expression for this RollTerm, prior to evaluation.

  #### Returns string

  Inherited from DiceTerm.expression

### faces

* get faces(): number | void

  The number of faces on the die. Returns undefined if the faces are represented as a complex term that has not yet
  been evaluated.

  #### Returns number | void

  Inherited from DiceTerm.faces
* set faces(value: number | [Roll](foundry.dice.Roll.md)): void

  #### Parameters

  + value: number | [Roll](foundry.dice.Roll.md)

  #### Returns void

  Inherited from DiceTerm.faces

### flavor

* get flavor(): string

  Optional flavor text which modifies and describes this term.

  #### Returns string

  Inherited from DiceTerm.flavor

### formula

* get formula(): string

  A string representation of the formula, including optional flavor text.

  #### Returns string

  Inherited from DiceTerm.formula

### isDeterministic

* get isDeterministic(): boolean

  Whether this term is entirely deterministic or contains some randomness.

  #### Returns boolean

  Inherited from DiceTerm.isDeterministic

### method

* get method(): string

  The resolution method used to resolve this DiceTerm.

  #### Returns string

  Inherited from DiceTerm.method

### number

* get number(): number | void

  The number of dice of this term to roll. Returns undefined if the number is a complex term that has not yet been
  evaluated.

  #### Returns number | void

  Inherited from DiceTerm.number
* set number(value: number | [Roll](foundry.dice.Roll.md)): void

  #### Parameters

  + value: number | [Roll](foundry.dice.Roll.md)

  #### Returns void

  Inherited from DiceTerm.number

### resolver

* get resolver(): [RollResolver](foundry.applications.dice.RollResolver.md)

  A reference to the RollResolver app being used to externally resolve this term.

  #### Returns [RollResolver](foundry.applications.dice.RollResolver.md)

  Inherited from DiceTerm.resolver

### total

* get total(): number | undefined

  A string or numeric representation of the final output for this term, after evaluation.

  #### Returns number | undefined

  Inherited from DiceTerm.total

### values

* get values(): number[]

  Return an array of rolled values which are still active within this term

  #### Returns number[]

  Inherited from DiceTerm.values

## Methods

### \_evaluate

* \_evaluate(options?: {}): [DiceTerm](foundry.dice.terms.DiceTerm.md) | Promise<[DiceTerm](foundry.dice.terms.DiceTerm.md)>

  Evaluate the term.

  #### Parameters

  + options: {} = {}

    Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.md) | Promise<[DiceTerm](foundry.dice.terms.DiceTerm.md)>

  Returns a Promise if the term is non-deterministic.

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_evaluate](foundry.dice.terms.DiceTerm.md#_evaluate)

### \_evaluateModifier

* \_evaluateModifier(command: string, modifier: string): Promise<void>

  `Internal`

  Asynchronously evaluate a single modifier command, recording it in the array of evaluated modifiers

  #### Parameters

  + command: string

    The parsed modifier command
  + modifier: string

    The full modifier request

  #### Returns Promise<void>

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_evaluateModifier](foundry.dice.terms.DiceTerm.md#_evaluatemodifier)

### \_evaluateModifiers

* \_evaluateModifiers(): Promise<void>

  `Internal`

  Sequentially evaluate each dice roll modifier by passing the term to its evaluation function
  Augment or modify the results array.

  #### Returns Promise<void>

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_evaluateModifiers](foundry.dice.terms.DiceTerm.md#_evaluatemodifiers)

### alter

* alter(multiply: number, add: number): [DiceTerm](foundry.dice.terms.DiceTerm.md)

  Alter the DiceTerm by adding or multiplying the number of dice which are rolled

  #### Parameters

  + multiply: number

    A factor to multiply. Dice are multiplied before any additions.
  + add: number

    A number of dice to add. Dice are added after multiplication.

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.md)

  The altered term

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[alter](foundry.dice.terms.DiceTerm.md#alter)

### call

* call(modifier: string): false | undefined

  Call the result of the coin flip, marking any coins that matched the called target as a success
  3dcc1 Flip 3 coins and treat "heads" as successes
  2dcc0 Flip 2 coins and treat "tails" as successes

  #### Parameters

  + modifier: string

    The matched modifier query

  #### Returns false | undefined

### evaluate

* evaluate(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowStrings?: boolean;  
  Â Â Â Â Â Â Â Â maximize?: boolean;  
  Â Â Â Â Â Â Â Â minimize?: boolean;  
  Â Â Â Â },  
  ): [RollTerm](foundry.dice.terms.RollTerm.md)  
  | Promise<[RollTerm](foundry.dice.terms.RollTerm.md)>

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

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.md) | Promise<[RollTerm](foundry.dice.terms.RollTerm.md)>

  Returns a Promise if the term is non-deterministic.

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[evaluate](foundry.dice.terms.DiceTerm.md#evaluate)

### getResultCSS

* getResultCSS(result: any): (string | null)[]

  Get the CSS classes that should be used to display each rolled result

  #### Parameters

  + result: any

    The rolled result

  #### Returns (string | null)[]

  The desired classes

  Overrides [DiceTerm](foundry.dice.terms.DiceTerm.md).[getResultCSS](foundry.dice.terms.DiceTerm.md#getresultcss)

### getResultLabel

* getResultLabel(result: any): any

  Return a string used as the label for each rolled result

  #### Parameters

  + result: any

    The rolled result

  #### Returns any

  The result label

  Overrides [DiceTerm](foundry.dice.terms.DiceTerm.md).[getResultLabel](foundry.dice.terms.DiceTerm.md#getresultlabel)

### getTooltipData

* getTooltipData(): object

  Render the tooltip HTML for a Roll instance

  #### Returns object

  The data object used to render the default tooltip template for this DiceTerm

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[getTooltipData](foundry.dice.terms.DiceTerm.md#gettooltipdata)

### mapRandomFace

* mapRandomFace(randomUniform: any): number

  #### Parameters

  + randomUniform: any

  #### Returns number

  Overrides [DiceTerm](foundry.dice.terms.DiceTerm.md).[mapRandomFace](foundry.dice.terms.DiceTerm.md#maprandomface)

### randomFace

* randomFace(): number

  Generate a random face value for this die using the configured PRNG.

  #### Returns number

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[randomFace](foundry.dice.terms.DiceTerm.md#randomface)

### roll

* roll(  
  Â Â Â Â \_\_namedParameters?: { maximize?: boolean; minimize?: boolean },  
  ): Promise<result>

  Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.

  #### Parameters

  + \_\_namedParameters: { maximize?: boolean; minimize?: boolean } = {}

    Options which modify how a random result is produced

  #### Returns Promise<result>

  The produced result

  Overrides [DiceTerm](foundry.dice.terms.DiceTerm.md).[roll](foundry.dice.terms.DiceTerm.md#roll)

### toJSON

* toJSON(): [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

  Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
  This method should return an object suitable for passing to the JSON.stringify function.

  #### Returns [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[toJSON](foundry.dice.terms.DiceTerm.md#tojson)

### `Protected`\_evaluateAsync

* \_evaluateAsync(options?: object): Promise<[DiceTerm](foundry.dice.terms.DiceTerm.md)>

  `Protected`

  Evaluate this dice term asynchronously.

  #### Parameters

  + `Optional`options: object = {}

    Options forwarded to inner Roll evaluation.

  #### Returns Promise<[DiceTerm](foundry.dice.terms.DiceTerm.md)>

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_evaluateAsync](foundry.dice.terms.DiceTerm.md#_evaluateasync)

### `Protected`\_evaluateSync

* \_evaluateSync(  
  Â Â Â Â options?: { maximize?: boolean; minimize?: boolean; strict?: boolean },  
  ): [DiceTerm](foundry.dice.terms.DiceTerm.md)

  `Protected`

  Evaluate deterministic values of this term synchronously.

  #### Parameters

  + `Optional`options: { maximize?: boolean; minimize?: boolean; strict?: boolean } = {}
    - ##### `Optional`maximize?: boolean

      Force the result to be maximized.
    - ##### `Optional`minimize?: boolean

      Force the result to be minimized.
    - ##### `Optional`strict?: boolean

      Throw an error if attempting to evaluate a die term in a way that cannot be
      done synchronously.

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.md)

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_evaluateSync](foundry.dice.terms.DiceTerm.md#_evaluatesync)

### `Protected`\_roll

* \_roll(options?: object): Promise<number | void>

  `Protected`

  Generate a roll result value for this DiceTerm based on its fulfillment method.

  #### Parameters

  + `Optional`options: object = {}

    Options forwarded to the fulfillment method handler.

  #### Returns Promise<number | void>

  Returns a Promise that resolves to the fulfilled number, or undefined if it could
  not be fulfilled.

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_roll](foundry.dice.terms.DiceTerm.md#_roll)

### `Static`\_applyCount

* \_applyCount(  
  Â Â Â Â results: any,  
  Â Â Â Â comparison: any,  
  Â Â Â Â target: any,  
  Â Â Â Â \_\_namedParameters?: { flagFailure?: boolean; flagSuccess?: boolean },  
  ): void

  A reusable helper function to handle the identification and deduction of failures

  #### Parameters

  + results: any
  + comparison: any
  + target: any
  + \_\_namedParameters: { flagFailure?: boolean; flagSuccess?: boolean } = {}

  #### Returns void

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_applyCount](foundry.dice.terms.DiceTerm.md#_applycount)

### `Static`\_applyDeduct

* \_applyDeduct(  
  Â Â Â Â results: any,  
  Â Â Â Â comparison: any,  
  Â Â Â Â target: any,  
  Â Â Â Â \_\_namedParameters?: { deductFailure?: boolean; invertFailure?: boolean },  
  ): void

  A reusable helper function to handle the identification and deduction of failures

  #### Parameters

  + results: any
  + comparison: any
  + target: any
  + \_\_namedParameters: { deductFailure?: boolean; invertFailure?: boolean } = {}

  #### Returns void

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_applyDeduct](foundry.dice.terms.DiceTerm.md#_applydeduct)

### `Static`\_fromData

* \_fromData(data: any): [RollTerm](foundry.dice.terms.RollTerm.md)

  Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm

  #### Parameters

  + data: any

    The de-serialized term data

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.md)

  The re-constructed RollTerm object

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_fromData](foundry.dice.terms.DiceTerm.md#_fromdata)

### `Static`\_keepOrDrop

* \_keepOrDrop(  
  Â Â Â Â results: object[],  
  Â Â Â Â number: number,  
  Â Â Â Â options?: { highest?: boolean; keep?: boolean },  
  ): object[]

  A helper method to modify the results array of a dice term by flagging certain results are kept or dropped.

  #### Parameters

  + results: object[]

    The results array
  + number: number

    The number to keep or drop
  + `Optional`options: { highest?: boolean; keep?: boolean } = {}
    - ##### `Optional`highest?: boolean

      Keep the highest?
    - ##### `Optional`keep?: boolean

      Keep results?

  #### Returns object[]

  The modified results array

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[\_keepOrDrop](foundry.dice.terms.DiceTerm.md#_keepordrop)

### `Static`compareResult

* compareResult(result: number, comparison: string, target: number): boolean

  A helper comparison function.
  Returns a boolean depending on whether the result compares favorably against the target.

  #### Parameters

  + result: number

    The result being compared
  + comparison: string

    The comparison operator in [=,<,<=,>,>=]
  + target: number

    The target value

  #### Returns boolean

  Is the comparison true?

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[compareResult](foundry.dice.terms.DiceTerm.md#compareresult)

### `Static`fromData

* fromData(data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)): [RollTerm](foundry.dice.terms.RollTerm.md)

  Construct a RollTerm from a provided data object

  #### Parameters

  + data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

    Provided data from an un-serialized term

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.md)

  The constructed RollTerm

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[fromData](foundry.dice.terms.DiceTerm.md#fromdata)

### `Static`fromJSON

* fromJSON(json: string): [RollTerm](foundry.dice.terms.RollTerm.md)

  Reconstruct a RollTerm instance from a provided JSON string

  #### Parameters

  + json: string

    A serialized JSON representation of a DiceTerm

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.md)

  A reconstructed RollTerm from the provided JSON

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[fromJSON](foundry.dice.terms.DiceTerm.md#fromjson)

### `Static`fromMatch

* fromMatch(match: RegExpMatchArray): [DiceTerm](foundry.dice.terms.DiceTerm.md)

  Construct a term of this type given a matched regular expression array.

  #### Parameters

  + match: RegExpMatchArray

    The matched regular expression array

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.md)

  The constructed term

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[fromMatch](foundry.dice.terms.DiceTerm.md#frommatch)

### `Static`fromParseNode

* fromParseNode(node: any): [RollTerm](foundry.dice.terms.RollTerm.md)

  #### Parameters

  + node: any

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.md)

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[fromParseNode](foundry.dice.terms.DiceTerm.md#fromparsenode)

### `Static`isDeterministic

* isDeterministic(  
  Â Â Â Â term: [RollTerm](foundry.dice.terms.RollTerm.md),  
  Â Â Â Â options?: { maximize?: boolean; minimize?: boolean },  
  ): boolean

  Determine if evaluating a given RollTerm with certain evaluation options can be done so deterministically.

  #### Parameters

  + term: [RollTerm](foundry.dice.terms.RollTerm.md)

    The term.
  + `Optional`options: { maximize?: boolean; minimize?: boolean } = {}

    Options for evaluating the term.

    - ##### `Optional`maximize?: boolean

      Force the result to be maximized.
    - ##### `Optional`minimize?: boolean

      Force the result to be minimized.

  #### Returns boolean

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[isDeterministic](foundry.dice.terms.DiceTerm.md#isdeterministic-1)

### `Static`matchTerm

* matchTerm(  
  Â Â Â Â expression: string,  
  Â Â Â Â options?: { imputeNumber?: boolean },  
  ): RegExpMatchArray | null

  Determine whether a string expression matches this type of term

  #### Parameters

  + expression: string

    The expression to parse
  + `Optional`options: { imputeNumber?: boolean } = {}

    Additional options which customize the match

    - ##### `Optional`imputeNumber?: boolean

      Allow the number of dice to be optional, i.e. "d6"

  #### Returns RegExpMatchArray | null

  Inherited from [DiceTerm](foundry.dice.terms.DiceTerm.md).[matchTerm](foundry.dice.terms.DiceTerm.md#matchterm)