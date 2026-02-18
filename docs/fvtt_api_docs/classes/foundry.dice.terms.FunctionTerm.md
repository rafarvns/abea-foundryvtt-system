---
title: "FunctionTerm | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.dice.terms.FunctionTerm.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [dice](../modules/foundry.dice.html)
* [terms](../modules/foundry.dice.terms.html)
* [FunctionTerm](foundry.dice.terms.FunctionTerm.html)

# Class FunctionTerm

A type of RollTerm used to apply a function.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.dice.terms.FunctionTerm))

* [RollTerm](foundry.dice.terms.RollTerm.html)
  + FunctionTerm

##### Index

### Properties

[\_root](foundry.dice.terms.FunctionTerm.html#_root)
[fn](foundry.dice.terms.FunctionTerm.html#fn)
[isIntermediate](foundry.dice.terms.FunctionTerm.html#isintermediate)
[options](foundry.dice.terms.FunctionTerm.html#options)
[result](foundry.dice.terms.FunctionTerm.html#result)
[rolls](foundry.dice.terms.FunctionTerm.html#rolls)
[terms](foundry.dice.terms.FunctionTerm.html#terms)
[FLAVOR\_REGEXP](foundry.dice.terms.FunctionTerm.html#flavor_regexp)
[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.FunctionTerm.html#flavor_regexp_string)
[REGEXP](foundry.dice.terms.FunctionTerm.html#regexp)
[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.FunctionTerm.html#serialize_attributes)

### Accessors

[dice](foundry.dice.terms.FunctionTerm.html#dice)
[expression](foundry.dice.terms.FunctionTerm.html#expression)
[flavor](foundry.dice.terms.FunctionTerm.html#flavor)
[formula](foundry.dice.terms.FunctionTerm.html#formula)
[function](foundry.dice.terms.FunctionTerm.html#function)
[isDeterministic](foundry.dice.terms.FunctionTerm.html#isdeterministic)
[resolver](foundry.dice.terms.FunctionTerm.html#resolver)
[total](foundry.dice.terms.FunctionTerm.html#total)

### Methods

[\_evaluate](foundry.dice.terms.FunctionTerm.html#_evaluate)
[evaluate](foundry.dice.terms.FunctionTerm.html#evaluate)
[toJSON](foundry.dice.terms.FunctionTerm.html#tojson)
[\_evaluateAsync](foundry.dice.terms.FunctionTerm.html#_evaluateasync)
[\_evaluateSync](foundry.dice.terms.FunctionTerm.html#_evaluatesync)
[\_fromData](foundry.dice.terms.FunctionTerm.html#_fromdata)
[fromData](foundry.dice.terms.FunctionTerm.html#fromdata)
[fromJSON](foundry.dice.terms.FunctionTerm.html#fromjson)
[fromParseNode](foundry.dice.terms.FunctionTerm.html#fromparsenode)
[isDeterministic](foundry.dice.terms.FunctionTerm.html#isdeterministic-2)

## Properties

### `Internal`\_root

\_root: [Roll](foundry.dice.Roll.html)

A reference to the Roll at the root of the evaluation tree.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[\_root](foundry.dice.terms.RollTerm.html#_root)

### fn

fn: string

The name of the configured function, or one in the Math environment, which should be applied to the term

### isIntermediate

isIntermediate: boolean = true

Is this term intermediate, and should be evaluated first as part of the simplification process?

Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[isIntermediate](foundry.dice.terms.RollTerm.html#isintermediate)

### options

options: object

An object of additional options which describes and modifies the term.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[options](foundry.dice.terms.RollTerm.html#options)

### result

result: string | number

The cached result of evaluating the method arguments

### rolls

rolls: [Roll](foundry.dice.Roll.html)[]

The cached Roll instances for each function argument

### terms

terms: string[]

An array of string argument terms for the function

### `Static`FLAVOR\_REGEXP

FLAVOR\_REGEXP: RegExp = ...

A regular expression which identifies term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[FLAVOR\_REGEXP](foundry.dice.terms.RollTerm.html#flavor_regexp)

### `Static`FLAVOR\_REGEXP\_STRING

FLAVOR\_REGEXP\_STRING: string = "(?:\\[([^\\]]+)\\])"

A regular expression pattern which identifies optional term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.RollTerm.html#flavor_regexp_string)

### `Static`REGEXP

REGEXP: RegExp = undefined

A regular expression used to match a term of this type

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[REGEXP](foundry.dice.terms.RollTerm.html#regexp)

### `Static`SERIALIZE\_ATTRIBUTES

SERIALIZE\_ATTRIBUTES: string[] = ...

An array of additional attributes which should be retained when the term is serialized

Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.RollTerm.html#serialize_attributes)

## Accessors

### dice

* get dice(): [DiceTerm](foundry.dice.terms.DiceTerm.html)[]

  An array of evaluated DiceTerm instances that should be bubbled up to the parent Roll

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

### function

* get function(): [RollFunction](../types/CONFIG.RollFunction.html)

  The function this term represents.

  #### Returns [RollFunction](../types/CONFIG.RollFunction.html)

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

* get total(): string | number

  A string or numeric representation of the final output for this term, after evaluation.

  #### Returns string | number

  Overrides RollTerm.total

## Methods

### \_evaluate

* \_evaluate(options?: {}): [RollTerm](foundry.dice.terms.RollTerm.html) | Promise<[RollTerm](foundry.dice.terms.RollTerm.html)>

  Evaluate the term.

  #### Parameters

  + options: {} = {}

    Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html) | Promise<[RollTerm](foundry.dice.terms.RollTerm.html)>

  Returns a Promise if the term is non-deterministic.

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[\_evaluate](foundry.dice.terms.RollTerm.html#_evaluate)

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

### toJSON

* toJSON(): [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)

  Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
  This method should return an object suitable for passing to the JSON.stringify function.

  #### Returns [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)

  Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[toJSON](foundry.dice.terms.RollTerm.html#tojson)

### `Protected`\_evaluateAsync

* \_evaluateAsync(options?: object): Promise<[RollTerm](foundry.dice.terms.RollTerm.html)>

  `Protected`

  Evaluate this function when it contains any non-deterministic sub-terms.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns Promise<[RollTerm](foundry.dice.terms.RollTerm.html)>

### `Protected`\_evaluateSync

* \_evaluateSync(options?: object): [RollTerm](foundry.dice.terms.RollTerm.html)

  `Protected`

  Evaluate this function when it contains only deterministic sub-terms.

  #### Parameters

  + `Optional`options: object = {}

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

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