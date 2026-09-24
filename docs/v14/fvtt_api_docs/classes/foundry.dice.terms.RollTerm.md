---
title: "RollTerm | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.dice.terms.RollTerm.html"
category: "classes"
---

# Class RollTerm

An abstract class which represents a single token that can be used as part of a Roll formula.
Every portion of a Roll formula is parsed into a subclass of RollTerm in order for the Roll to be fully evaluated.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.dice.terms.RollTerm))

* RollTerm
  + [DiceTerm](foundry.dice.terms.DiceTerm.md)
  + [FunctionTerm](foundry.dice.terms.FunctionTerm.md)
  + [NumericTerm](foundry.dice.terms.NumericTerm.md)
  + [OperatorTerm](foundry.dice.terms.OperatorTerm.md)
  + [ParentheticalTerm](foundry.dice.terms.ParentheticalTerm.md)
  + [PoolTerm](foundry.dice.terms.PoolTerm.md)
  + [StringTerm](foundry.dice.terms.StringTerm.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_evaluated](#_evaluated)
[\_root](#_root)
[isIntermediate](#isintermediate)
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
[fromParseNode](#fromparsenode)
[isDeterministic](#isdeterministic-1)
[\_fromData](#_fromdata)

## Constructors

### constructor

* new RollTerm(termData?: { options?: object }): RollTerm

  #### Parameters

  + `Optional`termData: { options?: object } = {}
    - ##### `Optional`options?: object

      An object of additional options which describes and modifies the term.

  #### Returns RollTerm

## Properties

### `Internal`\_evaluated

\_evaluated: boolean = false

An internal flag for whether the term has been evaluated

### `Internal`\_root

\_root: [Roll](foundry.dice.Roll.md)

A reference to the Roll at the root of the evaluation tree.

### isIntermediate

isIntermediate: boolean = false

Is this term intermediate, and should be evaluated first as part of the simplification process?

### options

options: object

An object of additional options which describes and modifies the term.

### `Static`FLAVOR\_REGEXP

FLAVOR\_REGEXP: RegExp = ...

A regular expression which identifies term-level flavor text

### `Static`FLAVOR\_REGEXP\_STRING

FLAVOR\_REGEXP\_STRING: string = "(?:\\[([^\\]]+)\\])"

A regular expression pattern which identifies optional term-level flavor text

### `Static`REGEXP

REGEXP: RegExp = undefined

A regular expression used to match a term of this type

### `Static`SERIALIZE\_ATTRIBUTES

SERIALIZE\_ATTRIBUTES: string[] = []

An array of additional attributes which should be retained when the term is serialized

## Accessors

### expression

* get expression(): string

  A string representation of the formula expression for this RollTerm, prior to evaluation.

  #### Returns string

### flavor

* get flavor(): string

  Optional flavor text which modifies and describes this term.

  #### Returns string

### formula

* get formula(): string

  A string representation of the formula, including optional flavor text.

  #### Returns string

### isDeterministic

* get isDeterministic(): boolean

  Whether this term is entirely deterministic or contains some randomness.

  #### Returns boolean

### resolver

* get resolver(): [RollResolver](foundry.applications.dice.RollResolver.md)

  A reference to the RollResolver app being used to externally resolve this term.

  #### Returns [RollResolver](foundry.applications.dice.RollResolver.md)

### total

* get total(): string | number | void

  A string or numeric representation of the final output for this term, after evaluation.

  #### Returns string | number | void

## Methods

### evaluate

* evaluate(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowStrings?: boolean;  
  Â Â Â Â Â Â Â Â maximize?: boolean;  
  Â Â Â Â Â Â Â Â minimize?: boolean;  
  Â Â Â Â },  
  ): RollTerm  
  | Promise<RollTerm>

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

  #### Returns RollTerm | Promise<RollTerm>

  Returns a Promise if the term is non-deterministic.

### toJSON

* toJSON(): [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

  Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
  This method should return an object suitable for passing to the JSON.stringify function.

  #### Returns [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

### `Protected`\_evaluate

* \_evaluate(options?: object): RollTerm | Promise<RollTerm>

  `Protected`

  Evaluate the term.

  #### Parameters

  + `Optional`options: object = {}

    Options which modify how the RollTerm is evaluated, see RollTerm#evaluate

  #### Returns RollTerm | Promise<RollTerm>

  Returns a Promise if the term is non-deterministic.

### `Static`fromData

* fromData(data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)): RollTerm

  Construct a RollTerm from a provided data object

  #### Parameters

  + data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

    Provided data from an un-serialized term

  #### Returns RollTerm

  The constructed RollTerm

### `Static`fromJSON

* fromJSON(json: string): RollTerm

  Reconstruct a RollTerm instance from a provided JSON string

  #### Parameters

  + json: string

    A serialized JSON representation of a DiceTerm

  #### Returns RollTerm

  A reconstructed RollTerm from the provided JSON

### `Static`fromParseNode

* fromParseNode(node: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)): RollTerm

  Construct a RollTerm from parser information.

  #### Parameters

  + node: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

    The node.

  #### Returns RollTerm

### `Static`isDeterministic

* isDeterministic(  
  Â Â Â Â term: RollTerm,  
  Â Â Â Â options?: { maximize?: boolean; minimize?: boolean },  
  ): boolean

  Determine if evaluating a given RollTerm with certain evaluation options can be done so deterministically.

  #### Parameters

  + term: RollTerm

    The term.
  + `Optional`options: { maximize?: boolean; minimize?: boolean } = {}

    Options for evaluating the term.

    - ##### `Optional`maximize?: boolean

      Force the result to be maximized.
    - ##### `Optional`minimize?: boolean

      Force the result to be minimized.

  #### Returns boolean

### `Protected` `Static`\_fromData

* \_fromData(data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)): RollTerm

  `Protected`

  Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm

  #### Parameters

  + data: [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md)

    The de-serialized term data

  #### Returns RollTerm

  The re-constructed RollTerm object