---
title: "NumericTerm | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.dice.terms.NumericTerm.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [dice](../modules/foundry.dice.html)
* [terms](../modules/foundry.dice.terms.html)
* [NumericTerm](foundry.dice.terms.NumericTerm.html)

# Class NumericTerm

A type of RollTerm used to represent static numbers.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.dice.terms.NumericTerm))

* [RollTerm](foundry.dice.terms.RollTerm.html)
  + NumericTerm

##### Index

### Properties

[\_evaluated](foundry.dice.terms.NumericTerm.html#_evaluated)
[\_root](foundry.dice.terms.NumericTerm.html#_root)
[isIntermediate](foundry.dice.terms.NumericTerm.html#isintermediate)
[number](foundry.dice.terms.NumericTerm.html#number)
[options](foundry.dice.terms.NumericTerm.html#options)
[FLAVOR\_REGEXP](foundry.dice.terms.NumericTerm.html#flavor_regexp)
[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.NumericTerm.html#flavor_regexp_string)
[REGEXP](foundry.dice.terms.NumericTerm.html#regexp)
[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.NumericTerm.html#serialize_attributes)

### Accessors

[expression](foundry.dice.terms.NumericTerm.html#expression)
[flavor](foundry.dice.terms.NumericTerm.html#flavor)
[formula](foundry.dice.terms.NumericTerm.html#formula)
[isDeterministic](foundry.dice.terms.NumericTerm.html#isdeterministic)
[resolver](foundry.dice.terms.NumericTerm.html#resolver)
[total](foundry.dice.terms.NumericTerm.html#total)

### Methods

[evaluate](foundry.dice.terms.NumericTerm.html#evaluate)
[toJSON](foundry.dice.terms.NumericTerm.html#tojson)
[\_evaluate](foundry.dice.terms.NumericTerm.html#_evaluate)
[fromData](foundry.dice.terms.NumericTerm.html#fromdata)
[fromJSON](foundry.dice.terms.NumericTerm.html#fromjson)
[fromMatch](foundry.dice.terms.NumericTerm.html#frommatch)
[fromParseNode](foundry.dice.terms.NumericTerm.html#fromparsenode)
[isDeterministic](foundry.dice.terms.NumericTerm.html#isdeterministic-2)
[matchTerm](foundry.dice.terms.NumericTerm.html#matchterm)
[\_fromData](foundry.dice.terms.NumericTerm.html#_fromdata)

## Properties

### `Internal`\_evaluated

\_evaluated: boolean = false

An internal flag for whether the term has been evaluated

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[\_evaluated](foundry.dice.terms.RollTerm.html#_evaluated)

### `Internal`\_root

\_root: [Roll](foundry.dice.Roll.html)

A reference to the Roll at the root of the evaluation tree.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[\_root](foundry.dice.terms.RollTerm.html#_root)

### isIntermediate

isIntermediate: boolean = false

Is this term intermediate, and should be evaluated first as part of the simplification process?

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[isIntermediate](foundry.dice.terms.RollTerm.html#isintermediate)

### number

number: number

The term's numeric value.

### options

options: object

An object of additional options which describes and modifies the term.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[options](foundry.dice.terms.RollTerm.html#options)

### `Static`FLAVOR\_REGEXP

FLAVOR\_REGEXP: RegExp = ...

A regular expression which identifies term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[FLAVOR\_REGEXP](foundry.dice.terms.RollTerm.html#flavor_regexp)

### `Static`FLAVOR\_REGEXP\_STRING

FLAVOR\_REGEXP\_STRING: string = "(?:\\[([^\\]]+)\\])"

A regular expression pattern which identifies optional term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.RollTerm.html#flavor_regexp_string)

### `Static`REGEXP

REGEXP: RegExp = ...

A regular expression used to match a term of this type

Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[REGEXP](foundry.dice.terms.RollTerm.html#regexp)

### `Static`SERIALIZE\_ATTRIBUTES

SERIALIZE\_ATTRIBUTES: string[] = ...

An array of additional attributes which should be retained when the term is serialized

Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.RollTerm.html#serialize_attributes)

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

* get resolver(): [RollResolver](foundry.applications.dice.RollResolver.html)

  A reference to the RollResolver app being used to externally resolve this term.

  #### Returns [RollResolver](foundry.applications.dice.RollResolver.html)

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

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[toJSON](foundry.dice.terms.RollTerm.html#tojson)

### `Protected`\_evaluate

* \_evaluate(options?: object): [RollTerm](foundry.dice.terms.RollTerm.html) | Promise<[RollTerm](foundry.dice.terms.RollTerm.html)>

  `Protected`

  Evaluate the term.

  #### Parameters

  + `Optional`options: object = {}

    Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html) | Promise<[RollTerm](foundry.dice.terms.RollTerm.html)>

  Returns a Promise if the term is non-deterministic.

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[\_evaluate](foundry.dice.terms.RollTerm.html#_evaluate)

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

* fromMatch(match: RegExpMatchArray): [NumericTerm](foundry.dice.terms.NumericTerm.html)

  Construct a term of this type given a matched regular expression array.

  #### Parameters

  + match: RegExpMatchArray

    The matched regular expression array

  #### Returns [NumericTerm](foundry.dice.terms.NumericTerm.html)

  The constructed term

### `Static`fromParseNode

* fromParseNode(node: [RollParseNode](../interfaces/foundry.dice.RollParseNode.html)): [RollTerm](foundry.dice.terms.RollTerm.html)

  Construct a RollTerm from parser information.

  #### Parameters

  + node: [RollParseNode](../interfaces/foundry.dice.RollParseNode.html)

    The node.

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[fromParseNode](foundry.dice.terms.RollTerm.html#fromparsenode)

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

* matchTerm(expression: string): null | RegExpMatchArray

  Determine whether a string expression matches a NumericTerm

  #### Parameters

  + expression: string

    The expression to parse

  #### Returns null | RegExpMatchArray

### `Protected` `Static`\_fromData

* \_fromData(data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)): [RollTerm](foundry.dice.terms.RollTerm.html)

  `Protected`

  Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm

  #### Parameters

  + data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.html)

    The de-serialized term data

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  The re-constructed RollTerm object

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[\_fromData](foundry.dice.terms.RollTerm.html#_fromdata)