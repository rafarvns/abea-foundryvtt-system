---
title: "NumericTerm | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.dice.terms.NumericTerm.html"
category: "classes"
---

# Class NumericTerm

A type of RollTerm used to represent static numbers.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.dice.terms.NumericTerm))

* [RollTerm](foundry.dice.terms.RollTerm.md)
  + NumericTerm

##### Index

### Properties

[\_evaluated](#_evaluated)
[\_root](#_root)
[isIntermediate](#isintermediate)
[number](#number)
[options](#options)
[FLAVOR\_REGEXP](#flavor_regexp)
[FLAVOR\_REGEXP\_STRING](#flavor_regexp_string)
[REGEXP](#regexp)
[SERIALIZE\_ATTRIBUTES](#serialize_attributes)

### Accessors

[expression](#expression)
[flavor](#flavor)
[formula](#formula)
[isDeterministic](#isdeterministic)
[resolver](#resolver)
[total](#total)

### Methods

[evaluate](#evaluate)
[toJSON](#tojson)
[\_evaluate](#_evaluate)
[fromData](#fromdata)
[fromJSON](#fromjson)
[fromMatch](#frommatch)
[fromParseNode](#fromparsenode)
[isDeterministic](#isdeterministic-1)
[matchTerm](#matchterm)
[\_fromData](#_fromdata)

## Properties

### `Internal`\_evaluated

\_evaluated: boolean = false

An internal flag for whether the term has been evaluated

Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[\_evaluated](foundry.dice.terms.RollTerm.md#_evaluated)

### `Internal`\_root

\_root: [Roll](foundry.dice.Roll.md)

A reference to the Roll at the root of the evaluation tree.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[\_root](foundry.dice.terms.RollTerm.md#_root)

### isIntermediate

isIntermediate: boolean = false

Is this term intermediate, and should be evaluated first as part of the simplification process?

Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[isIntermediate](foundry.dice.terms.RollTerm.md#isintermediate)

### number

number: number

The term's numeric value.

### options

options: object

An object of additional options which describes and modifies the term.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[options](foundry.dice.terms.RollTerm.md#options)

### `Static`FLAVOR\_REGEXP

FLAVOR\_REGEXP: RegExp = ...

A regular expression which identifies term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[FLAVOR\_REGEXP](foundry.dice.terms.RollTerm.md#flavor_regexp)

### `Static`FLAVOR\_REGEXP\_STRING

FLAVOR\_REGEXP\_STRING: string = "(?:\\[([^\\]]+)\\])"

A regular expression pattern which identifies optional term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.RollTerm.md#flavor_regexp_string)

### `Static`REGEXP

REGEXP: RegExp = ...

A regular expression used to match a term of this type

Overrides [RollTerm](foundry.dice.terms.RollTerm.md).[REGEXP](foundry.dice.terms.RollTerm.md#regexp)

### `Static`SERIALIZE\_ATTRIBUTES

SERIALIZE\_ATTRIBUTES: string[] = ...

An array of additional attributes which should be retained when the term is serialized

Overrides [RollTerm](foundry.dice.terms.RollTerm.md).[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.RollTerm.md#serialize_attributes)

## Accessors

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

  Inherited from RollTerm.isDeterministic

### resolver

* get resolver(): [RollResolver](foundry.applications.dice.RollResolver.md)

  A reference to the RollResolver app being used to externally resolve this term.

  #### Returns [RollResolver](foundry.applications.dice.RollResolver.md)

  Inherited from RollTerm.resolver

### total

* get total(): number

  A string or numeric representation of the final output for this term, after evaluation.

  #### Returns number

  Overrides RollTerm.total

## Methods

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

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[evaluate](foundry.dice.terms.RollTerm.md#evaluate)

### toJSON

* toJSON(): [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

  Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
  This method should return an object suitable for passing to the JSON.stringify function.

  #### Returns [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[toJSON](foundry.dice.terms.RollTerm.md#tojson)

### `Protected`\_evaluate

* \_evaluate(options?: object): [RollTerm](foundry.dice.terms.RollTerm.md) | Promise<[RollTerm](foundry.dice.terms.RollTerm.md)>

  `Protected`

  Evaluate the term.

  #### Parameters

  + `Optional`options: object = {}

    Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.md) | Promise<[RollTerm](foundry.dice.terms.RollTerm.md)>

  Returns a Promise if the term is non-deterministic.

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[\_evaluate](foundry.dice.terms.RollTerm.md#_evaluate)

### `Static`fromData

* fromData(data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)): [RollTerm](foundry.dice.terms.RollTerm.md)

  Construct a RollTerm from a provided data object

  #### Parameters

  + data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

    Provided data from an un-serialized term

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.md)

  The constructed RollTerm

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[fromData](foundry.dice.terms.RollTerm.md#fromdata)

### `Static`fromJSON

* fromJSON(json: string): [RollTerm](foundry.dice.terms.RollTerm.md)

  Reconstruct a RollTerm instance from a provided JSON string

  #### Parameters

  + json: string

    A serialized JSON representation of a DiceTerm

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.md)

  A reconstructed RollTerm from the provided JSON

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[fromJSON](foundry.dice.terms.RollTerm.md#fromjson)

### `Static`fromMatch

* fromMatch(match: RegExpMatchArray): NumericTerm

  Construct a term of this type given a matched regular expression array.

  #### Parameters

  + match: RegExpMatchArray

    The matched regular expression array

  #### Returns NumericTerm

  The constructed term

### `Static`fromParseNode

* fromParseNode(node: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)): [RollTerm](foundry.dice.terms.RollTerm.md)

  Construct a RollTerm from parser information.

  #### Parameters

  + node: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

    The node.

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.md)

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[fromParseNode](foundry.dice.terms.RollTerm.md#fromparsenode)

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

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[isDeterministic](foundry.dice.terms.RollTerm.md#isdeterministic-1)

### `Static`matchTerm

* matchTerm(expression: string): RegExpMatchArray | null

  Determine whether a string expression matches a NumericTerm

  #### Parameters

  + expression: string

    The expression to parse

  #### Returns RegExpMatchArray | null

### `Protected` `Static`\_fromData

* \_fromData(data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)): [RollTerm](foundry.dice.terms.RollTerm.md)

  `Protected`

  Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm

  #### Parameters

  + data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

    The de-serialized term data

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.md)

  The re-constructed RollTerm object

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.md).[\_fromData](foundry.dice.terms.RollTerm.md#_fromdata)