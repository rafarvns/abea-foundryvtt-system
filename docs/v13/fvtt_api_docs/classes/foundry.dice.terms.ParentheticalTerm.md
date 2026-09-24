---
title: "ParentheticalTerm | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.dice.terms.ParentheticalTerm.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [dice](../modules/foundry.dice.html)
* [terms](../modules/foundry.dice.terms.html)
* [ParentheticalTerm](foundry.dice.terms.ParentheticalTerm.html)

# Class ParentheticalTerm

A type of RollTerm used to enclose a parenthetical expression to be recursively evaluated.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.dice.terms.ParentheticalTerm))

* [RollTerm](foundry.dice.terms.RollTerm.html)
  + ParentheticalTerm

##### Index

### Properties

[\_root](foundry.dice.terms.ParentheticalTerm.html#_root)
[isIntermediate](foundry.dice.terms.ParentheticalTerm.html#isintermediate)
[options](foundry.dice.terms.ParentheticalTerm.html#options)
[roll](foundry.dice.terms.ParentheticalTerm.html#roll)
[term](foundry.dice.terms.ParentheticalTerm.html#term)
[CLOSE\_REGEXP](foundry.dice.terms.ParentheticalTerm.html#close_regexp)
[FLAVOR\_REGEXP](foundry.dice.terms.ParentheticalTerm.html#flavor_regexp)
[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.ParentheticalTerm.html#flavor_regexp_string)
[OPEN\_REGEXP](foundry.dice.terms.ParentheticalTerm.html#open_regexp)
[REGEXP](foundry.dice.terms.ParentheticalTerm.html#regexp)
[SERIALIZE\_ATTRIBUTES](foundry.dice.terms.ParentheticalTerm.html#serialize_attributes)

### Accessors

[dice](foundry.dice.terms.ParentheticalTerm.html#dice)
[expression](foundry.dice.terms.ParentheticalTerm.html#expression)
[flavor](foundry.dice.terms.ParentheticalTerm.html#flavor)
[formula](foundry.dice.terms.ParentheticalTerm.html#formula)
[isDeterministic](foundry.dice.terms.ParentheticalTerm.html#isdeterministic)
[resolver](foundry.dice.terms.ParentheticalTerm.html#resolver)
[total](foundry.dice.terms.ParentheticalTerm.html#total)

### Methods

[\_evaluate](foundry.dice.terms.ParentheticalTerm.html#_evaluate)
[evaluate](foundry.dice.terms.ParentheticalTerm.html#evaluate)
[toJSON](foundry.dice.terms.ParentheticalTerm.html#tojson)
[\_evaluateAsync](foundry.dice.terms.ParentheticalTerm.html#_evaluateasync)
[\_evaluateSync](foundry.dice.terms.ParentheticalTerm.html#_evaluatesync)
[fromData](foundry.dice.terms.ParentheticalTerm.html#fromdata)
[fromJSON](foundry.dice.terms.ParentheticalTerm.html#fromjson)
[fromParseNode](foundry.dice.terms.ParentheticalTerm.html#fromparsenode)
[fromTerms](foundry.dice.terms.ParentheticalTerm.html#fromterms)
[isDeterministic](foundry.dice.terms.ParentheticalTerm.html#isdeterministic-2)
[\_fromData](foundry.dice.terms.ParentheticalTerm.html#_fromdata)

## Properties

### `Internal`\_root

\_root: [Roll](foundry.dice.Roll.html)

A reference to the Roll at the root of the evaluation tree.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[\_root](foundry.dice.terms.RollTerm.html#_root)

### isIntermediate

isIntermediate: boolean = true

Is this term intermediate, and should be evaluated first as part of the simplification process?

Overrides [RollTerm](foundry.dice.terms.RollTerm.html).[isIntermediate](foundry.dice.terms.RollTerm.html#isintermediate)

### options

options: object

An object of additional options which describes and modifies the term.

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[options](foundry.dice.terms.RollTerm.html#options)

### roll

roll: [Roll](foundry.dice.Roll.html)

An already-evaluated Roll instance used instead of the string term.

### term

term: string

The original provided string term used to construct the parenthetical

### `Static`CLOSE\_REGEXP

CLOSE\_REGEXP: RegExp = ...

A regular expression pattern used to identify the closing of a parenthetical expression.

### `Static`FLAVOR\_REGEXP

FLAVOR\_REGEXP: RegExp = ...

A regular expression which identifies term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[FLAVOR\_REGEXP](foundry.dice.terms.RollTerm.html#flavor_regexp)

### `Static`FLAVOR\_REGEXP\_STRING

FLAVOR\_REGEXP\_STRING: string = "(?:\\[([^\\]]+)\\])"

A regular expression pattern which identifies optional term-level flavor text

Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[FLAVOR\_REGEXP\_STRING](foundry.dice.terms.RollTerm.html#flavor_regexp_string)

### `Static`OPEN\_REGEXP

OPEN\_REGEXP: RegExp = ...

The regular expression pattern used to identify the opening of a parenthetical expression.
This could also identify the opening of a math function.

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

* get total(): number

  A string or numeric representation of the final output for this term, after evaluation.

  #### Returns number

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

  Inherited from [RollTerm](foundry.dice.terms.RollTerm.html).[toJSON](foundry.dice.terms.RollTerm.html#tojson)

### `Protected`\_evaluateAsync

* \_evaluateAsync(roll: [Roll](foundry.dice.Roll.html), options?: object): Promise<[RollTerm](foundry.dice.terms.RollTerm.html)>

  `Protected`

  Evaluate this parenthetical when it contains any non-deterministic sub-terms.

  #### Parameters

  + roll: [Roll](foundry.dice.Roll.html)

    The inner Roll instance to evaluate.
  + `Optional`options: object = {}

  #### Returns Promise<[RollTerm](foundry.dice.terms.RollTerm.html)>

### `Protected`\_evaluateSync

* \_evaluateSync(roll: [Roll](foundry.dice.Roll.html), options?: object): [RollTerm](foundry.dice.terms.RollTerm.html)

  `Protected`

  Evaluate this parenthetical when it contains only deterministic sub-terms.

  #### Parameters

  + roll: [Roll](foundry.dice.Roll.html)

    The inner Roll instance to evaluate.
  + `Optional`options: object = {}

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

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

### `Static`fromTerms

* fromTerms(terms: [RollTerm](foundry.dice.terms.RollTerm.html)[], options?: object): [ParentheticalTerm](foundry.dice.terms.ParentheticalTerm.html)

  Construct a ParentheticalTerm from an Array of component terms which should be wrapped inside the parentheses.

  #### Parameters

  + terms: [RollTerm](foundry.dice.terms.RollTerm.html)[]

    The array of terms to use as internal parts of the parenthetical
  + `Optional`options: object

    Additional options passed to the ParentheticalTerm constructor

  #### Returns [ParentheticalTerm](foundry.dice.terms.ParentheticalTerm.html)

  The constructed ParentheticalTerm instance

  #### Example: Create a Parenthetical Term from an array of component RollTerm instances

  ```
  const d6 = new Die({number: 4, faces: 6});  
  const plus = new OperatorTerm({operator: "+"});  
  const bonus = new NumericTerm({number: 4});  
  t = ParentheticalTerm.fromTerms([d6, plus, bonus]);  
  t.formula; // (4d6 + 4)
  Copy
  ```

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