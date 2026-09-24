---
title: "DiceTerm | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.dice.terms.DiceTerm.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [dice](../modules/foundry.dice.html)
* [terms](../modules/foundry.dice.terms.html)
* [DiceTerm](foundry.dice.terms.DiceTerm.html)

# Class DiceTerm

An abstract base class for any type of RollTerm which involves randomized input from dice, coins, or other devices.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.dice.terms.DiceTerm))

* [RollTerm](foundry.dice.terms.RollTerm.html)
  + DiceTerm
    - [Coin](foundry.dice.terms.Coin.html)
    - [Die](foundry.dice.terms.Die.html)
    - [FateDie](foundry.dice.terms.FateDie.html)

##### Index

### Constructors

[constructor](foundry.dice.terms.DiceTerm.html#constructor)

### Properties

[\_root](foundry.dice.terms.DiceTerm.html#_root)
[isIntermediate](foundry.dice.terms.DiceTerm.html#isintermediate)
[modifiers](foundry.dice.terms.DiceTerm.html#modifiers)
[options](foundry.dice.terms.DiceTerm.html#options)
[results](foundry.dice.terms.DiceTerm.html#results)
[\_faces](foundry.dice.terms.DiceTerm.html#_faces)
[\_number](foundry.dice.terms.DiceTerm.html#_number)
[DENOMINATION](foundry.dice.terms.DiceTerm.html#denomination)
[FLAVOR\_REGEXP](foundry.dice.terms.DiceTerm.html#flavor_regexp)
[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.DiceTerm.html#flavor_regexp_string)
[MODIFIER\_REGEXP](foundry.dice.terms.DiceTerm.html#modifier_regexp)
[MODIFIERS](foundry.dice.terms.DiceTerm.html#modifiers-1)
[MODIFIERS\_REGEXP\_STRING](foundry.dice.terms.DiceTerm.html#modifiers_regexp_string)
[REGEXP](foundry.dice.terms.DiceTerm.html#regexp)
[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.DiceTerm.html#serialize_attributes)

### Accessors

[denomination](foundry.dice.terms.DiceTerm.html#denomination-1)
[dice](foundry.dice.terms.DiceTerm.html#dice)
[expression](foundry.dice.terms.DiceTerm.html#expression)
[faces](foundry.dice.terms.DiceTerm.html#faces)
[flavor](foundry.dice.terms.DiceTerm.html#flavor)
[formula](foundry.dice.terms.DiceTerm.html#formula)
[isDeterministic](foundry.dice.terms.DiceTerm.html#isdeterministic)
[method](foundry.dice.terms.DiceTerm.html#method)
[number](foundry.dice.terms.DiceTerm.html#number)
[resolver](foundry.dice.terms.DiceTerm.html#resolver)
[total](foundry.dice.terms.DiceTerm.html#total)
[values](foundry.dice.terms.DiceTerm.html#values)

### Methods

[\_evaluate](foundry.dice.terms.DiceTerm.html#_evaluate)
[\_evaluateModifier](foundry.dice.terms.DiceTerm.html#_evaluatemodifier)
[\_evaluateModifiers](foundry.dice.terms.DiceTerm.html#_evaluatemodifiers)
[alter](foundry.dice.terms.DiceTerm.html#alter)
[evaluate](foundry.dice.terms.DiceTerm.html#evaluate)
[getResultCSS](foundry.dice.terms.DiceTerm.html#getresultcss)
[getResultLabel](foundry.dice.terms.DiceTerm.html#getresultlabel)
[getTooltipData](foundry.dice.terms.DiceTerm.html#gettooltipdata)
[mapRandomFace](foundry.dice.terms.DiceTerm.html#maprandomface)
[randomFace](foundry.dice.terms.DiceTerm.html#randomface)
[roll](foundry.dice.terms.DiceTerm.html#roll)
[toJSON](foundry.dice.terms.DiceTerm.html#tojson)
[\_evaluateAsync](foundry.dice.terms.DiceTerm.html#_evaluateasync)
[\_evaluateSync](foundry.dice.terms.DiceTerm.html#_evaluatesync)
[\_roll](foundry.dice.terms.DiceTerm.html#_roll)
[\_applyCount](foundry.dice.terms.DiceTerm.html#_applycount)
[\_applyDeduct](foundry.dice.terms.DiceTerm.html#_applydeduct)
[\_fromData](foundry.dice.terms.DiceTerm.html#_fromdata)
[\_keepOrDrop](foundry.dice.terms.DiceTerm.html#_keepordrop)
[compareResult](foundry.dice.terms.DiceTerm.html#compareresult)
[fromData](foundry.dice.terms.DiceTerm.html#fromdata)
[fromJSON](foundry.dice.terms.DiceTerm.html#fromjson)
[fromMatch](foundry.dice.terms.DiceTerm.html#frommatch)
[fromParseNode](foundry.dice.terms.DiceTerm.html#fromparsenode)
[isDeterministic](foundry.dice.terms.DiceTerm.html#isdeterministic-2)
[matchTerm](foundry.dice.terms.DiceTerm.html#matchterm)

## Constructors

### constructor

* new DiceTerm(  
  Â Â Â Â termData: {  
  Â Â Â Â Â Â Â Â faces?: number | [Roll](foundry.dice.Roll.html);  
  Â Â Â Â Â Â Â Â method: string;  
  Â Â Â Â Â Â Â Â modifiers?: string[];  
  Â Â Â Â Â Â Â Â number?: number | [Roll](foundry.dice.Roll.html);  
  Â Â Â Â Â Â Â Â options?: object;  
  Â Â Â Â Â Â Â Â results?: [DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)[];  
  Â Â Â Â },  
  ): [DiceTerm](foundry.dice.terms.DiceTerm.html)

  #### Parameters

  + termData: {  
    Â Â Â Â faces?: number | [Roll](foundry.dice.Roll.html);  
    Â Â Â Â method: string;  
    Â Â Â Â modifiers?: string[];  
    Â Â Â Â number?: number | [Roll](foundry.dice.Roll.html);  
    Â Â Â Â options?: object;  
    Â Â Â Â results?: [DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)[];  
    }

    Data used to create the Dice Term, including the following:

    - ##### `Optional`faces?: number | [Roll](foundry.dice.Roll.html)

      The number of faces on each die of this type, or a Roll instance that
      will be evaluated to a number.
    - ##### method: string

      The resolution method used to resolve DiceTerm.
    - ##### `Optional`modifiers?: string[]

      An array of modifiers applied to the results
    - ##### `Optional`number?: number | [Roll](foundry.dice.Roll.html)

      The number of dice of this term to roll, before modifiers are applied, or
      a Roll instance that will be evaluated to a number.
    - ##### `Optional`options?: object

      Additional options that modify the term
    - ##### `Optional`results?: [DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)[]

      An optional array of pre-cast results for the term

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.html)

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[constructor](foundry.dice.terms.RollTerm.html#constructor)

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

An Array of dice term modifiers which are applied

### options

options: object

An object of additional options which describes and modifies the term.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[options](foundry.dice.terms.RollTerm.html#options)

### results

results: [DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)[]

The array of dice term results which have been rolled

### `Protected`\_faces

\_faces: number | [Roll](foundry.dice.Roll.html)

The number of faces on the die, or a Roll instance that will be evaluated to a number.

### `Protected`\_number

\_number: number | [Roll](foundry.dice.Roll.html)

The number of dice of this term to roll, before modifiers are applied, or a Roll instance that will be evaluated to
a number.

### `Static`DENOMINATION

DENOMINATION: string = ""

Define the denomination string used to register this DiceTerm type in CONFIG.Dice.terms

### `Static`FLAVOR\_REGEXP

FLAVOR\_REGEXP: RegExp = ...

A regular expression which identifies term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[FLAVOR\_REGEXP](foundry.dice.terms.RollTerm.html#flavor_regexp)

### `Static`FLAVOR\_REGEXP\_STRING

FLAVOR\_REGEXP\_STRING: string = "(?:\\[([^\\]]+)\\])"

A regular expression pattern which identifies optional term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.RollTerm.html#flavor_regexp_string)

### `Static`MODIFIER\_REGEXP

MODIFIER\_REGEXP: RegExp = ...

A regular expression used to separate individual modifiers

### `Static`MODIFIERS

MODIFIERS: Record<string, string | Function> = {}

Define the named modifiers that can be applied for this particular DiceTerm type.

### `Static`MODIFIERS\_REGEXP\_STRING

MODIFIERS\_REGEXP\_STRING: string = "([^ (){}[\\]+\\-\*/]+)"

A regular expression pattern which captures the full set of term modifiers
Anything until a space, group symbol, or arithmetic operator

### `Static`REGEXP

REGEXP: RegExp = ...

A regular expression used to match a term of this type

Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[REGEXP](foundry.dice.terms.RollTerm.html#regexp)

### `Static`SERIALIZE\_ATTRIBUTES

SERIALIZE\_ATTRIBUTES: string[] = ...

An array of additional attributes which should be retained when the term is serialized

Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.RollTerm.html#serialize_attributes)

## Accessors

### denomination

* get denomination(): string

  The denomination of this DiceTerm instance.

  #### Returns string

### dice

* get dice(): [DiceTerm](foundry.dice.terms.DiceTerm.html)[]

  An array of additional DiceTerm instances involved in resolving this DiceTerm.

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.html)[]

### expression

* get expression(): string

  A string representation of the formula expression for this RollTerm, prior to evaluation.

  #### Returns string

  Overrides RollTerm.expression

### faces

* get faces(): number | void

  The number of faces on the die. Returns undefined if the faces are represented as a complex term that has not yet
  been evaluated.

  #### Returns number | void
* set faces(value: number | [Roll](foundry.dice.Roll.html)): void

  #### Parameters

  + value: number | [Roll](foundry.dice.Roll.html)

  #### Returns void

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

### method

* get method(): string

  The resolution method used to resolve this DiceTerm.

  #### Returns string

### number

* get number(): number | void

  The number of dice of this term to roll. Returns undefined if the number is a complex term that has not yet been
  evaluated.

  #### Returns number | void
* set number(value: number | [Roll](foundry.dice.Roll.html)): void

  #### Parameters

  + value: number | [Roll](foundry.dice.Roll.html)

  #### Returns void

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

  Return an array of rolled values which are still active within this term

  #### Returns number[]

## Methods

### \_evaluate

* \_evaluate(options?: {}): [DiceTerm](foundry.dice.terms.DiceTerm.html) | Promise<[DiceTerm](foundry.dice.terms.DiceTerm.html)>

  Evaluate the term.

  #### Parameters

  + options: {} = {}

    Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.html) | Promise<[DiceTerm](foundry.dice.terms.DiceTerm.html)>

  Returns a Promise if the term is non-deterministic.

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[\_evaluate](foundry.dice.terms.RollTerm.html#_evaluate)

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

### \_evaluateModifiers

* \_evaluateModifiers(): Promise<void>

  `Internal`

  Sequentially evaluate each dice roll modifier by passing the term to its evaluation function
  Augment or modify the results array.

  #### Returns Promise<void>

### alter

* alter(multiply: number, add: number): [DiceTerm](foundry.dice.terms.DiceTerm.html)

  Alter the DiceTerm by adding or multiplying the number of dice which are rolled

  #### Parameters

  + multiply: number

    A factor to multiply. Dice are multiplied before any additions.
  + add: number

    A number of dice to add. Dice are added after multiplication.

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.html)

  The altered term

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

### getResultCSS

* getResultCSS(result: [DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)): (null | string)[]

  Get the CSS classes that should be used to display each rolled result

  #### Parameters

  + result: [DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)

    The rolled result

  #### Returns (null | string)[]

  The desired classes

### getResultLabel

* getResultLabel(result: [DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)): string

  Return a string used as the label for each rolled result

  #### Parameters

  + result: [DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)

    The rolled result

  #### Returns string

  The result label

### getTooltipData

* getTooltipData(): object

  Render the tooltip HTML for a Roll instance

  #### Returns object

  The data object used to render the default tooltip template for this DiceTerm

### mapRandomFace

* mapRandomFace(randomUniform: number): number

  Maps a randomly-generated value in the interval [0, 1) to a face value on the die.

  #### Parameters

  + randomUniform: number

    A value to map. Must be in the interval [0, 1).

  #### Returns number

  The face value.

### randomFace

* randomFace(): number

  Generate a random face value for this die using the configured PRNG.

  #### Returns number

### roll

* roll(  
  Â Â Â Â options?: { maximize?: boolean; minimize?: boolean },  
  ): Promise<[DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)>

  Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.

  #### Parameters

  + `Optional`options: { maximize?: boolean; minimize?: boolean } = {}

    Options which modify how a random result is produced

    - ##### `Optional`maximize?: boolean

      Maximize the result, obtaining the largest possible value.
    - ##### `Optional`minimize?: boolean

      Minimize the result, obtaining the smallest possible value.

  #### Returns Promise<[DiceTermResult](../interfaces/foundry.dice.DiceTermResult.html)>

  The produced result

### toJSON

* toJSON(): [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)

  Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
  This method should return an object suitable for passing to the JSON.stringify function.

  #### Returns [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[toJSON](foundry.dice.terms.RollTerm.html#tojson)

### `Protected`\_evaluateAsync

* \_evaluateAsync(options?: object): Promise<[DiceTerm](foundry.dice.terms.DiceTerm.html)>

  `Protected`

  Evaluate this dice term asynchronously.

  #### Parameters

  + `Optional`options: object = {}

    Options forwarded to inner Roll evaluation.

  #### Returns Promise<[DiceTerm](foundry.dice.terms.DiceTerm.html)>

### `Protected`\_evaluateSync

* \_evaluateSync(  
  Â Â Â Â options?: { maximize?: boolean; minimize?: boolean; strict?: boolean },  
  ): [DiceTerm](foundry.dice.terms.DiceTerm.html)

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

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.html)

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

### `Static`\_fromData

* \_fromData(data: any): [RollTerm](foundry.dice.terms.RollTerm.html)

  Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm

  #### Parameters

  + data: any

    The de-serialized term data

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  The re-constructed RollTerm object

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[\_fromData](foundry.dice.terms.RollTerm.html#_fromdata)

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

### `Static`fromData

* fromData(data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)): [RollTerm](foundry.dice.terms.RollTerm.html)

  Construct a RollTerm from a provided data object

  #### Parameters

  + data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)

    Provided data from an un-serialized term

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  The constructed RollTerm

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[fromData](foundry.dice.terms.RollTerm.html#fromdata)

### `Static`fromJSON

* fromJSON(json: string): [RollTerm](foundry.dice.terms.RollTerm.html)

  Reconstruct a RollTerm instance from a provided JSON string

  #### Parameters

  + json: string

    A serialized JSON representation of a DiceTerm

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  A reconstructed RollTerm from the provided JSON

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[fromJSON](foundry.dice.terms.RollTerm.html#fromjson)

### `Static`fromMatch

* fromMatch(match: RegExpMatchArray): [DiceTerm](foundry.dice.terms.DiceTerm.html)

  Construct a term of this type given a matched regular expression array.

  #### Parameters

  + match: RegExpMatchArray

    The matched regular expression array

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.html)

  The constructed term

### `Static`fromParseNode

* fromParseNode(node: any): [RollTerm](foundry.dice.terms.RollTerm.html)

  #### Parameters

  + node: any

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[fromParseNode](foundry.dice.terms.RollTerm.html#fromparsenode)

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

### `Static`matchTerm

* matchTerm(  
  Â Â Â Â expression: string,  
  Â Â Â Â options?: { imputeNumber?: boolean },  
  ): null | RegExpMatchArray

  Determine whether a string expression matches this type of term

  #### Parameters

  + expression: string

    The expression to parse
  + `Optional`options: { imputeNumber?: boolean } = {}

    Additional options which customize the match

    - ##### `Optional`imputeNumber?: boolean

      Allow the number of dice to be optional, i.e. "d6"

  #### Returns null | RegExpMatchArray