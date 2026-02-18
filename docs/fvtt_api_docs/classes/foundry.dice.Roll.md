---
title: "Roll | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.dice.Roll.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [dice](../modules/foundry.dice.html)
* [Roll](foundry.dice.Roll.html)

# Class Roll

An interface and API for constructing and evaluating dice rolls.
The basic structure for a dice roll is a string formula and an object of data against which to parse it.

#### Example: Attack with advantage

```
// Construct the Roll instance  
let r = new Roll("2d20kh + @prof + @strMod", {prof: 2, strMod: 4});  
  
// The parsed terms of the roll formula  
console.log(r.terms);    // [Die, OperatorTerm, NumericTerm, OperatorTerm, NumericTerm]  
  
// Execute the roll  
await r.evaluate();  
  
// The resulting equation after it was rolled  
console.log(r.result);   // 16 + 2 + 4  
  
// The total resulting from the roll  
console.log(r.total);    // 22
Copy
```

##### Index

### Constructors

[constructor](foundry.dice.Roll.html#constructor)

### Properties

[\_dice](foundry.dice.Roll.html#_dice)
[\_evaluated](foundry.dice.Roll.html#_evaluated)
[\_formula](foundry.dice.Roll.html#_formula)
[\_resolver](foundry.dice.Roll.html#_resolver)
[\_root](foundry.dice.Roll.html#_root)
[\_total](foundry.dice.Roll.html#_total)
[data](foundry.dice.Roll.html#data)
[options](foundry.dice.Roll.html#options)
[terms](foundry.dice.Roll.html#terms)
[CHAT\_TEMPLATE](foundry.dice.Roll.html#chat_template)
[DICE\_CONFIGURATION\_SETTING](foundry.dice.Roll.html#dice_configuration_setting)
[MATH\_PROXY](foundry.dice.Roll.html#math_proxy)
[RESOLVERS](foundry.dice.Roll.html#resolvers)
[TOOLTIP\_TEMPLATE](foundry.dice.Roll.html#tooltip_template)

### Accessors

[dice](foundry.dice.Roll.html#dice)
[formula](foundry.dice.Roll.html#formula)
[isDeterministic](foundry.dice.Roll.html#isdeterministic)
[product](foundry.dice.Roll.html#product)
[result](foundry.dice.Roll.html#result)
[total](foundry.dice.Roll.html#total)
[defaultImplementation](foundry.dice.Roll.html#defaultimplementation)
[resolverImplementation](foundry.dice.Roll.html#resolverimplementation)

### Methods

[alter](foundry.dice.Roll.html#alter)
[clone](foundry.dice.Roll.html#clone)
[evaluate](foundry.dice.Roll.html#evaluate)
[evaluateSync](foundry.dice.Roll.html#evaluatesync)
[getTooltip](foundry.dice.Roll.html#gettooltip)
[propagateFlavor](foundry.dice.Roll.html#propagateflavor)
[render](foundry.dice.Roll.html#render)
[reroll](foundry.dice.Roll.html#reroll)
[resetFormula](foundry.dice.Roll.html#resetformula)
[roll](foundry.dice.Roll.html#roll)
[toAnchor](foundry.dice.Roll.html#toanchor)
[toJSON](foundry.dice.Roll.html#tojson)
[toMessage](foundry.dice.Roll.html#tomessage)
[toString](foundry.dice.Roll.html#tostring)
[\_evaluate](foundry.dice.Roll.html#_evaluate)
[\_evaluateASTAsync](foundry.dice.Roll.html#_evaluateastasync)
[\_evaluateASTSync](foundry.dice.Roll.html#_evaluateastsync)
[\_evaluateSync](foundry.dice.Roll.html#_evaluatesync)
[\_evaluateTotal](foundry.dice.Roll.html#_evaluatetotal)
[\_prepareChatRenderContext](foundry.dice.Roll.html#_preparechatrendercontext)
[\_prepareData](foundry.dice.Roll.html#_preparedata)
[\_classifyStringTerm](foundry.dice.Roll.html#_classifystringterm)
[collapseInlineResult](foundry.dice.Roll.html#collapseinlineresult)
[create](foundry.dice.Roll.html#create)
[expandInlineResult](foundry.dice.Roll.html#expandinlineresult)
[fromData](foundry.dice.Roll.html#fromdata)
[fromJSON](foundry.dice.Roll.html#fromjson)
[fromTerms](foundry.dice.Roll.html#fromterms)
[getFormula](foundry.dice.Roll.html#getformula)
[identifyFulfillableTerms](foundry.dice.Roll.html#identifyfulfillableterms)
[instantiateAST](foundry.dice.Roll.html#instantiateast)
[parse](foundry.dice.Roll.html#parse)
[registerResult](foundry.dice.Roll.html#registerresult)
[replaceFormulaData](foundry.dice.Roll.html#replaceformuladata)
[safeEval](foundry.dice.Roll.html#safeeval)
[simplifyTerms](foundry.dice.Roll.html#simplifyterms)
[simulate](foundry.dice.Roll.html#simulate)
[validate](foundry.dice.Roll.html#validate)

## Constructors

### constructor

* new Roll(formula?: string, data?: object, options?: [RollOptions](../types/foundry.dice.RollOptions.html)): [Roll](foundry.dice.Roll.html)

  #### Parameters

  + formula: string = ""

    The string formula to parse
  + data: object = {}

    The data object against which to parse attributes within the formula
  + `Optional`options: [RollOptions](../types/foundry.dice.RollOptions.html) = {}

    Options modifying or describing the Roll

  #### Returns [Roll](foundry.dice.Roll.html)

## Properties

### `Internal`\_dice

\_dice: [DiceTerm](foundry.dice.terms.DiceTerm.html)[] = []

An array of inner DiceTerms that were evaluated as part of the Roll evaluation

### `Internal`\_evaluated

\_evaluated: boolean = false

Track whether this Roll instance has been evaluated or not. Once evaluated the Roll is immutable.

### `Internal`\_formula

\_formula: string

Store the original cleaned formula for the Roll, prior to any internal evaluation or simplification

### `Internal`\_resolver

\_resolver: [RollResolver](foundry.applications.dice.RollResolver.html)

A reference to the RollResolver app being used to externally resolve this Roll.

### `Internal`\_root

\_root: [Roll](foundry.dice.Roll.html)

A reference to the Roll at the root of the evaluation tree.

### `Internal`\_total

\_total: number

Cache the numeric total generated through evaluation of the Roll.

### data

data: object

The original provided data object which substitutes into attributes of the roll formula.

### options

options: [RollOptions](../types/foundry.dice.RollOptions.html)

Options modifying or describing the Roll

### terms

terms: [RollTerm](foundry.dice.terms.RollTerm.html)[]

The identified terms of the Roll

### `Static`CHAT\_TEMPLATE

CHAT\_TEMPLATE: string = "templates/dice/roll.hbs"

The HTML template path used to render a complete Roll object to the chat log

### `Static` `Readonly`DICE\_CONFIGURATION\_SETTING

DICE\_CONFIGURATION\_SETTING: "diceConfiguration"

Dice Configuration setting name.

### `Static`MATH\_PROXY

MATH\_PROXY: Math = ...

A Proxy environment for safely evaluating a string using only available Math functions

### `Static`RESOLVERS

RESOLVERS: Map<[Roll](foundry.dice.Roll.html), [RollResolver](foundry.applications.dice.RollResolver.html)> = ...

A mapping of Roll instances to currently-active resolvers.

### `Static`TOOLTIP\_TEMPLATE

TOOLTIP\_TEMPLATE: string = "templates/dice/tooltip.hbs"

The HTML template used to render an expanded Roll tooltip to the chat log

## Accessors

### dice

* get dice(): [DiceTerm](foundry.dice.terms.DiceTerm.html)[]

  Return an Array of the individual DiceTerm instances contained within this Roll.

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.html)[]

### formula

* get formula(): string

  Return a standardized representation for the displayed formula associated with this Roll.

  #### Returns string

### isDeterministic

* get isDeterministic(): boolean

  Whether this Roll contains entirely deterministic terms or whether there is some randomness.

  #### Returns boolean

### product

* get product(): any

  Return the arbitrary product of evaluating this Roll.

  #### Returns any

### result

* get result(): string

  The resulting arithmetic expression after rolls have been evaluated

  #### Returns string

### total

* get total(): number

  Return the total result of the Roll expression if it has been evaluated.

  #### Returns number

### `Static`defaultImplementation

* get defaultImplementation(): typeof [Roll](foundry.dice.Roll.html)

  Get the default configured Roll class.

  #### Returns typeof [Roll](foundry.dice.Roll.html)

### `Static`resolverImplementation

* get resolverImplementation(): typeof [RollResolver](foundry.applications.dice.RollResolver.html)

  Retrieve the appropriate resolver implementation based on the user's configuration.

  #### Returns typeof [RollResolver](foundry.applications.dice.RollResolver.html)

## Methods

### alter

* alter(multiply: number, add: number, multiplyNumeric?: boolean): [Roll](foundry.dice.Roll.html)

  Alter the Roll expression by adding or multiplying the number of dice which are rolled

  #### Parameters

  + multiply: number

    A factor to multiply. Dice are multiplied before any additions.
  + add: number

    A number of dice to add. Dice are added after multiplication.
  + `Optional`multiplyNumeric: boolean = {}

    Apply multiplication factor to numeric scalar terms

  #### Returns [Roll](foundry.dice.Roll.html)

  The altered Roll expression

### clone

* clone(): [Roll](foundry.dice.Roll.html)

  Clone the Roll instance, returning a new Roll instance that has not yet been evaluated.

  #### Returns [Roll](foundry.dice.Roll.html)

### evaluate

* evaluate(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowInteractive?: boolean;  
  Â Â Â Â Â Â Â Â allowStrings?: boolean;  
  Â Â Â Â Â Â Â Â maximize?: boolean;  
  Â Â Â Â Â Â Â Â minimize?: boolean;  
  Â Â Â Â },  
  ): Promise<[Roll](foundry.dice.Roll.html)>

  Execute the Roll asynchronously, replacing dice and evaluating the total result

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â allowInteractive?: boolean;  
    Â Â Â Â allowStrings?: boolean;  
    Â Â Â Â maximize?: boolean;  
    Â Â Â Â minimize?: boolean;  
    } = {}

    Options which inform how the Roll is evaluated

    - ##### `Optional`allowInteractive?: boolean

      If false, force the use of non-interactive rolls and do not
      prompt the user to make manual rolls.
    - ##### `Optional`allowStrings?: boolean

      If true, string terms will not cause an error to be thrown during
      evaluation.
    - ##### `Optional`maximize?: boolean

      Maximize the result, obtaining the largest possible value.
    - ##### `Optional`minimize?: boolean

      Minimize the result, obtaining the smallest possible value.

  #### Returns Promise<[Roll](foundry.dice.Roll.html)>

  The evaluated Roll instance

  #### Example: Evaluate a Roll expression

  ```
  let r = new Roll("2d6 + 4 + 1d4");  
  await r.evaluate();  
  console.log(r.result); // 5 + 4 + 2  
  console.log(r.total);  // 11
  Copy
  ```

### evaluateSync

* evaluateSync(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowStrings?: boolean;  
  Â Â Â Â Â Â Â Â maximize?: boolean;  
  Â Â Â Â Â Â Â Â minimize?: boolean;  
  Â Â Â Â Â Â Â Â strict?: boolean;  
  Â Â Â Â },  
  ): [Roll](foundry.dice.Roll.html)

  Execute the Roll synchronously, replacing dice and evaluating the total result.

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â allowStrings?: boolean;  
    Â Â Â Â maximize?: boolean;  
    Â Â Â Â minimize?: boolean;  
    Â Â Â Â strict?: boolean;  
    } = {}
    - ##### `Optional`allowStrings?: boolean

      If true, string terms will not cause an error to be thrown during
      evaluation.
    - ##### `Optional`maximize?: boolean

      Maximize the result, obtaining the largest possible value.
    - ##### `Optional`minimize?: boolean

      Minimize the result, obtaining the smallest possible value.
    - ##### `Optional`strict?: boolean

      Throw an Error if the Roll contains non-deterministic terms that
      cannot be evaluated synchronously. If this is set to false,
      non-deterministic terms will be ignored.

  #### Returns [Roll](foundry.dice.Roll.html)

  The evaluated Roll instance.

### getTooltip

* getTooltip(): Promise<string>

  Render the tooltip HTML for a Roll instance

  #### Returns Promise<string>

  The rendered HTML tooltip as a string

### propagateFlavor

* propagateFlavor(flavor: string): void

  Propagate flavor text across all terms that do not have any.

  #### Parameters

  + flavor: string

    The flavor text.

  #### Returns void

### render

* render(  
  Â Â Â Â options?: { flavor?: string; isPrivate?: boolean; template?: string },  
  ): Promise<string>

  Render a Roll instance to HTML

  #### Parameters

  + `Optional`options: { flavor?: string; isPrivate?: boolean; template?: string } = {}

    Options which affect how the Roll is rendered

    - ##### `Optional`flavor?: string

      Flavor text to include
    - ##### `Optional`isPrivate?: boolean

      Is the Roll displayed privately?
    - ##### `Optional`template?: string

      A custom HTML template path

  #### Returns Promise<string>

  The rendered HTML template as a string

### reroll

* reroll(options?: object): Promise<[Roll](foundry.dice.Roll.html)>

  Create a new Roll object using the original provided formula and data.
  Each roll is immutable, so this method returns a new Roll instance using the same data.

  #### Parameters

  + `Optional`options: object = {}

    Evaluation options passed to Roll#evaluate

  #### Returns Promise<[Roll](foundry.dice.Roll.html)>

  A new Roll object, rolled using the same formula and data

### resetFormula

* resetFormula(): string

  Recompile the formula string that represents this Roll instance from its component terms.

  #### Returns string

  The re-compiled formula

### roll

* roll(options?: object): Promise<[Roll](foundry.dice.Roll.html)>

  Alias for evaluate.

  #### Parameters

  + options: object = {}

    Options passed to Roll#evaluate

  #### Returns Promise<[Roll](foundry.dice.Roll.html)>

  #### See

### toAnchor

* toAnchor(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â attrs?: Record<string, string>;  
  Â Â Â Â Â Â Â Â classes?: string[];  
  Â Â Â Â Â Â Â Â dataset?: Record<string, string>;  
  Â Â Â Â Â Â Â Â icon?: string;  
  Â Â Â Â Â Â Â Â label?: string;  
  Â Â Â Â },  
  ): HTMLAnchorElement

  Construct an inline roll link for this Roll.

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â attrs?: Record<string, string>;  
    Â Â Â Â classes?: string[];  
    Â Â Â Â dataset?: Record<string, string>;  
    Â Â Â Â icon?: string;  
    Â Â Â Â label?: string;  
    } = {}

    Additional options to configure how the link is constructed.

    - ##### `Optional`attrs?: Record<string, string>

      Attributes to set on the link.
    - ##### `Optional`classes?: string[]

      Additional classes to add to the link. The classes `inline-roll`
      and `inline-result` are added by default.
    - ##### `Optional`dataset?: Record<string, string>

      Custom data attributes to set on the link.
    - ##### `Optional`icon?: string

      A font-awesome icon class to use as the icon instead of a d20.
    - ##### `Optional`label?: string

      A custom label for the total.

  #### Returns HTMLAnchorElement

### toJSON

* toJSON(): object

  Represent the data of the Roll as an object suitable for JSON serialization.

  #### Returns object

  Structured data which can be serialized into JSON

### toMessage

* toMessage(  
  Â Â Â Â messageData?: object,  
  Â Â Â Â options?: { create?: boolean; rollMode?: string },  
  ): Promise<any>

  Transform a Roll instance into a ChatMessage, displaying the roll result.
  This function can either create the ChatMessage directly, or return the data object that will be used to create.

  #### Parameters

  + messageData: object = {}

    The data object to use when creating the message
  + `Optional`options: { create?: boolean; rollMode?: string } = {}

    Additional options which modify the created message.

    - ##### `Optional`create?: boolean

      Whether to automatically create the chat message, or only return the
      prepared chatData object.
    - ##### `Optional`rollMode?: string

      The template roll mode to use for the message from CONFIG.Dice.rollModes

  #### Returns Promise<any>

  A promise which resolves to the created ChatMessage document if create is
  true, or the Object of prepared chatData otherwise.

### toString

* toString(): string

  #### Returns string

### `Protected`\_evaluate

* \_evaluate(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowInteractive?: boolean;  
  Â Â Â Â Â Â Â Â allowStrings?: boolean;  
  Â Â Â Â Â Â Â Â maximize?: boolean;  
  Â Â Â Â Â Â Â Â minimize?: boolean;  
  Â Â Â Â },  
  ): Promise<[Roll](foundry.dice.Roll.html)>

  `Protected`

  Evaluate the roll asynchronously.

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â allowInteractive?: boolean;  
    Â Â Â Â allowStrings?: boolean;  
    Â Â Â Â maximize?: boolean;  
    Â Â Â Â minimize?: boolean;  
    } = {}

    Options which inform how evaluation is performed

    - ##### `Optional`allowInteractive?: boolean

      If false, force the use of digital rolls and do not prompt the user to
      make manual rolls.
    - ##### `Optional`allowStrings?: boolean

      If true, string terms will not cause an error to be thrown during
      evaluation.
    - ##### `Optional`maximize?: boolean

      Force the result to be maximized
    - ##### `Optional`minimize?: boolean

      Force the result to be minimized

  #### Returns Promise<[Roll](foundry.dice.Roll.html)>

### `Protected`\_evaluateASTAsync

* \_evaluateASTAsync(  
  Â Â Â Â node: [RollParseNode](../interfaces/foundry.dice.RollParseNode.html) | [RollTerm](foundry.dice.terms.RollTerm.html),  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowStrings?: boolean;  
  Â Â Â Â Â Â Â Â maximize?: boolean;  
  Â Â Â Â Â Â Â Â minimize?: boolean;  
  Â Â Â Â },  
  ): Promise<string | number>

  `Protected`

  Evaluate an AST asynchronously.

  #### Parameters

  + node: [RollParseNode](../interfaces/foundry.dice.RollParseNode.html) | [RollTerm](foundry.dice.terms.RollTerm.html)

    The root node or term.
  + `Optional`options: { allowStrings?: boolean; maximize?: boolean; minimize?: boolean } = {}

    Options which inform how evaluation is performed

    - ##### `Optional`allowStrings?: boolean

      If true, string terms will not cause an error to be thrown during
      evaluation.
    - ##### `Optional`maximize?: boolean

      Force the result to be maximized
    - ##### `Optional`minimize?: boolean

      Force the result to be minimized

  #### Returns Promise<string | number>

### `Protected`\_evaluateASTSync

* \_evaluateASTSync(  
  Â Â Â Â node: [RollParseNode](../interfaces/foundry.dice.RollParseNode.html) | [RollTerm](foundry.dice.terms.RollTerm.html),  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowStrings?: boolean;  
  Â Â Â Â Â Â Â Â maximize?: boolean;  
  Â Â Â Â Â Â Â Â minimize?: boolean;  
  Â Â Â Â Â Â Â Â strict?: boolean;  
  Â Â Â Â },  
  ): string  
  | number

  `Protected`

  Evaluate an AST synchronously.

  #### Parameters

  + node: [RollParseNode](../interfaces/foundry.dice.RollParseNode.html) | [RollTerm](foundry.dice.terms.RollTerm.html)

    The root node or term.
  + `Optional`options: {  
    Â Â Â Â allowStrings?: boolean;  
    Â Â Â Â maximize?: boolean;  
    Â Â Â Â minimize?: boolean;  
    Â Â Â Â strict?: boolean;  
    } = {}

    Options which inform how evaluation is performed

    - ##### `Optional`allowStrings?: boolean

      If true, string terms will not cause an error to be thrown during
      evaluation.
    - ##### `Optional`maximize?: boolean

      Force the result to be maximized
    - ##### `Optional`minimize?: boolean

      Force the result to be minimized
    - ##### `Optional`strict?: boolean

      Throw an error if encountering a term that cannot be synchronously
      evaluated.

  #### Returns string | number

### `Protected`\_evaluateSync

* \_evaluateSync(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowStrings?: boolean;  
  Â Â Â Â Â Â Â Â maximize?: boolean;  
  Â Â Â Â Â Â Â Â minimize?: boolean;  
  Â Â Â Â Â Â Â Â strict?: boolean;  
  Â Â Â Â },  
  ): [Roll](foundry.dice.Roll.html)

  `Protected`

  Evaluate the roll synchronously.

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â allowStrings?: boolean;  
    Â Â Â Â maximize?: boolean;  
    Â Â Â Â minimize?: boolean;  
    Â Â Â Â strict?: boolean;  
    } = {}

    Options which inform how evaluation is performed

    - ##### `Optional`allowStrings?: boolean

      If true, string terms will not cause an error to be thrown during
      evaluation.
    - ##### `Optional`maximize?: boolean

      Force the result to be maximized
    - ##### `Optional`minimize?: boolean

      Force the result to be minimized
    - ##### `Optional`strict?: boolean

      Throw an error if encountering a term that cannot be synchronously
      evaluated.

  #### Returns [Roll](foundry.dice.Roll.html)

### `Protected`\_evaluateTotal

* \_evaluateTotal(): number

  `Protected`

  Safely evaluate the final total result for the Roll using its component terms.

  #### Returns number

  The evaluated total

### `Protected`\_prepareChatRenderContext

* \_prepareChatRenderContext(  
  Â Â Â Â options?: { flavor?: string; isPrivate?: boolean },  
  ): Promise<{ object: any }>

  `Protected`

  Prepare context data used to render the CHAT\_TEMPLATE for this roll.

  #### Parameters

  + options: { flavor?: string; isPrivate?: boolean } = {}

  #### Returns Promise<{ object: any }>

### `Protected`\_prepareData

* \_prepareData(data: object): object

  `Protected`

  Prepare the data structure used for the Roll.
  This is factored out to allow for custom Roll classes to do special data preparation using provided input.

  #### Parameters

  + data: object

    Provided roll data

  #### Returns object

  The prepared data object

### `Static`\_classifyStringTerm

* \_classifyStringTerm(  
  Â Â Â Â term: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â intermediate?: boolean;  
  Â Â Â Â Â Â Â Â next?: string | [RollTerm](foundry.dice.terms.RollTerm.html);  
  Â Â Â Â Â Â Â Â prior?: string | [RollTerm](foundry.dice.terms.RollTerm.html);  
  Â Â Â Â },  
  ): [RollTerm](foundry.dice.terms.RollTerm.html)

  `Internal`

  Classify a remaining string term into a recognized RollTerm class

  #### Parameters

  + term: string

    A remaining un-classified string
  + `Optional`options: { intermediate?: boolean; next?: string | [RollTerm](foundry.dice.terms.RollTerm.html); prior?: string | [RollTerm](foundry.dice.terms.RollTerm.html) } = {}

    Options which customize classification

    - ##### `Optional`intermediate?: boolean

      Allow intermediate terms
    - ##### `Optional`next?: string | [RollTerm](foundry.dice.terms.RollTerm.html)

      The next term to classify
    - ##### `Optional`prior?: string | [RollTerm](foundry.dice.terms.RollTerm.html)

      The prior classified term

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)

  A classified RollTerm instance

### `Static`collapseInlineResult

* collapseInlineResult(a: HTMLAnchorElement): void

  Collapse an expanded inline roll to conceal its tooltip.

  #### Parameters

  + a: HTMLAnchorElement

    The inline-roll button

  #### Returns void

### `Static`create

* create(formula: string, data?: object, options?: object): [Roll](foundry.dice.Roll.html)

  A factory method which constructs a Roll instance using the default configured Roll class.

  #### Parameters

  + formula: string

    The formula used to create the Roll instance
  + `Optional`data: object = {}

    The data object which provides component data for the formula
  + `Optional`options: object = {}

    Additional options which modify or describe this Roll

  #### Returns [Roll](foundry.dice.Roll.html)

  The constructed Roll instance

### `Static`expandInlineResult

* expandInlineResult(a: HTMLAnchorElement): Promise<void>

  Expand an inline roll element to display its contained dice result as a tooltip.

  #### Parameters

  + a: HTMLAnchorElement

    The inline-roll button

  #### Returns Promise<void>

### `Static`fromData

* fromData(data: object): [Roll](foundry.dice.Roll.html)

  Recreate a Roll instance using a provided data object

  #### Parameters

  + data: object

    Unpacked data representing the Roll

  #### Returns [Roll](foundry.dice.Roll.html)

  A reconstructed Roll instance

### `Static`fromJSON

* fromJSON(json: string): [Roll](foundry.dice.Roll.html)

  Recreate a Roll instance using a provided JSON string

  #### Parameters

  + json: string

    Serialized JSON data representing the Roll

  #### Returns [Roll](foundry.dice.Roll.html)

  A reconstructed Roll instance

### `Static`fromTerms

* fromTerms(terms: [RollTerm](foundry.dice.terms.RollTerm.html)[], options?: object): [Roll](foundry.dice.Roll.html)

  Manually construct a Roll object by providing an explicit set of input terms

  #### Parameters

  + terms: [RollTerm](foundry.dice.terms.RollTerm.html)[]

    The array of terms to use as the basis for the Roll
  + `Optional`options: object = {}

    Additional options passed to the Roll constructor

  #### Returns [Roll](foundry.dice.Roll.html)

  The constructed Roll instance

  #### Example: Construct a Roll instance from an array of component terms

  ```
  const t1 = new Die({number: 4, faces: 8};  
  const plus = new OperatorTerm({operator: "+"});  
  const t2 = new NumericTerm({number: 8});  
  const roll = Roll.fromTerms([t1, plus, t2]);  
  roll.formula; // 4d8 + 8
  Copy
  ```

### `Static`getFormula

* getFormula(terms: [RollTerm](foundry.dice.terms.RollTerm.html)[]): string

  Transform an array of RollTerm objects into a cleaned string formula representation.

  #### Parameters

  + terms: [RollTerm](foundry.dice.terms.RollTerm.html)[]

    An array of terms to represent as a formula

  #### Returns string

  The string representation of the formula

### `Static`identifyFulfillableTerms

* identifyFulfillableTerms(terms: [RollTerm](foundry.dice.terms.RollTerm.html)[]): [DiceTerm](foundry.dice.terms.DiceTerm.html)[]

  Determine which of the given terms require external fulfillment.

  #### Parameters

  + terms: [RollTerm](foundry.dice.terms.RollTerm.html)[]

    The terms.

  #### Returns [DiceTerm](foundry.dice.terms.DiceTerm.html)[]

### `Static`instantiateAST

* instantiateAST(ast: [RollParseNode](../interfaces/foundry.dice.RollParseNode.html)): [RollTerm](foundry.dice.terms.RollTerm.html)[]

  Instantiate the nodes in an AST sub-tree into RollTerm instances.

  #### Parameters

  + ast: [RollParseNode](../interfaces/foundry.dice.RollParseNode.html)

    The root of the AST sub-tree.

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)[]

### `Static`parse

* parse(formula?: string, data?: object): [RollTerm](foundry.dice.terms.RollTerm.html)[]

  Parse a formula expression using the compiled peggy grammar.

  #### Parameters

  + formula: string = ""

    The original string expression to parse.
  + data: object = {}

    A data object used to substitute for attributes in the formula.

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)[]

### `Static`registerResult

* registerResult(  
  Â Â Â Â method: string,  
  Â Â Â Â denomination: string,  
  Â Â Â Â result: number,  
  ): boolean | void

  Register an externally-fulfilled result with an active RollResolver.

  #### Parameters

  + method: string

    The fulfillment method.
  + denomination: string

    The die denomination being fulfilled.
  + result: number

    The obtained result.

  #### Returns boolean | void

  Whether the result was consumed. Returns undefined if no resolver was available.

### `Static`replaceFormulaData

* replaceFormulaData(  
  Â Â Â Â formula: string,  
  Â Â Â Â data: object,  
  Â Â Â Â options?: { missing?: string; warn?: boolean },  
  ): string

  Replace referenced data attributes in the roll formula with values from the provided data.
  Data references in the formula use the @attr syntax and would reference the corresponding attr key.

  #### Parameters

  + formula: string

    The original formula within which to replace
  + data: object

    The data object which provides replacements
  + `Optional`options: { missing?: string; warn?: boolean } = {}

    Options which modify formula replacement

    - ##### `Optional`missing?: string

      The value that should be assigned to any unmatched keys.
      If null, the unmatched key is left as-is.
    - ##### `Optional`warn?: boolean

      Display a warning notification when encountering an un-matched key.

  #### Returns string

### `Static`safeEval

* safeEval(expression: string): number

  A sandbox-safe evaluation function to execute user-input code with access to scoped Math methods.

  #### Parameters

  + expression: string

    The input string expression

  #### Returns number

  The numeric evaluated result

### `Static`simplifyTerms

* simplifyTerms(terms: [RollTerm](foundry.dice.terms.RollTerm.html)[]): [RollTerm](foundry.dice.terms.RollTerm.html)[]

  After parenthetical and arithmetic terms have been resolved, we need to simplify the remaining expression.
  Any remaining string terms need to be combined with adjacent non-operators in order to construct parsable terms.

  #### Parameters

  + terms: [RollTerm](foundry.dice.terms.RollTerm.html)[]

    An array of terms which is eligible for simplification

  #### Returns [RollTerm](foundry.dice.terms.RollTerm.html)[]

  An array of simplified terms

### `Static`simulate

* simulate(formula: string, n?: number): Promise<number[]>

  Simulate a roll and evaluate the distribution of returned results

  #### Parameters

  + formula: string

    The Roll expression to simulate
  + n: number = 10000

    The number of simulations

  #### Returns Promise<number[]>

  The rolled totals

### `Static`validate

* validate(formula: string): boolean

  Validate that a provided roll formula can represent a valid

  #### Parameters

  + formula: string

    A candidate formula to validate

  #### Returns boolean

  Is the provided input a valid dice formula?