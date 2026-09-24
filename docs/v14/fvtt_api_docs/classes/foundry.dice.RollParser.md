---
title: "RollParser | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.dice.RollParser.html"
category: "classes"
---

# Class RollParser

A class for transforming events from the Peggy grammar lexer into various formats.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[formula](#formula)

### Methods

[\_collapseOperators](#_collapseoperators)
[\_onDiceTerm](#_ondiceterm)
[\_onExpression](#_onexpression)
[\_onFunctionTerm](#_onfunctionterm)
[\_onNumericTerm](#_onnumericterm)
[\_onParenthetical](#_onparenthetical)
[\_onPoolTerm](#_onpoolterm)
[\_onStringTerm](#_onstringterm)
[\_wrapNegativeTerm](#_wrapnegativeterm)
[flattenTree](#flattentree)
[formatArg](#formatarg)
[formatDebug](#formatdebug)
[formatList](#formatlist)
[isOperatorTerm](#isoperatorterm)
[toAST](#toast)

## Constructors

### constructor

* new RollParser(formula: string): RollParser

  #### Parameters

  + formula: string

    The full formula.

  #### Returns RollParser

## Properties

### formula

formula: string

The full formula.

## Methods

### `Protected`\_collapseOperators

* \_collapseOperators(operators: string[]): string

  `Protected`

  Collapse multiple additive operators into a single one.

  #### Parameters

  + operators: string[]

    A sequence of additive operators.

  #### Returns string

### `Protected`\_onDiceTerm

* \_onDiceTerm(  
  Â Â Â Â number: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md) | null,  
  Â Â Â Â faces: string | [RollParseNode](../interfaces/foundry.dice.RollParseNode.md) | null,  
  Â Â Â Â modifiers: string | null,  
  Â Â Â Â flavor: string | null,  
  Â Â Â Â formula: string,  
  Â Â Â Â offset: RollParseOffset,  
  ): [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

  `Protected`

  Handle a dice term.

  #### Parameters

  + number: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md) | null

    The number of dice.
  + faces: string | [RollParseNode](../interfaces/foundry.dice.RollParseNode.md) | null

    The number of die faces or a string
    denomination like "c" or "f".
  + modifiers: string | null

    The matched modifiers string.
  + flavor: string | null

    Associated flavor text.
  + formula: string

    The original matched text.
  + offset: RollParseOffset

    The position of the matched term in the
    formula string.

  #### Returns [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

### `Protected`\_onExpression

* \_onExpression(  
  Â Â Â Â head: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md),  
  Â Â Â Â tail: [string[], [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)][],  
  Â Â Â Â leading?: string,  
  Â Â Â Â formula: string,  
  Â Â Â Â error: Function,  
  ): [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

  `Protected`

  Handle a base roll expression.

  #### Parameters

  + head: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

    The first operand.
  + tail: [string[], [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)][]

    Zero or more subsequent (operators, operand) tuples.
  + `Optional`leading: string

    A leading operator.
  + formula: string

    The original matched text.
  + error: Function

    The peggy error callback to invoke on a parse error.

  #### Returns [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

### `Protected`\_onFunctionTerm

* \_onFunctionTerm(  
  Â Â Â Â fn: string,  
  Â Â Â Â head: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md),  
  Â Â Â Â tail: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)[],  
  Â Â Â Â flavor: string,  
  Â Â Â Â formula: string,  
  Â Â Â Â offset: RollParseOffset,  
  ): [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

  `Protected`

  Handle a math term.

  #### Parameters

  + fn: string

    The Math function.
  + head: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

    The first term.
  + tail: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)[]

    Zero or more additional terms.
  + flavor: string

    Associated flavor text.
  + formula: string

    The original matched text.
  + offset: RollParseOffset

    The position of the matched term in the formula string.

  #### Returns [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

### `Protected`\_onNumericTerm

* \_onNumericTerm(  
  Â Â Â Â number: number,  
  Â Â Â Â flavor: string,  
  Â Â Â Â offset: RollParseOffset,  
  ): [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

  `Protected`

  Handle a numeric term.

  #### Parameters

  + number: number

    The number.
  + flavor: string

    Associated flavor text.
  + offset: RollParseOffset

    The position of the matched term in the formula string.

  #### Returns [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

### `Protected`\_onParenthetical

* \_onParenthetical(  
  Â Â Â Â term: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md),  
  Â Â Â Â flavor: string | null,  
  Â Â Â Â formula: string,  
  Â Â Â Â offset: RollParseOffset,  
  ): [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

  `Protected`

  Handle a parenthetical.

  #### Parameters

  + term: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

    The inner term.
  + flavor: string | null

    Associated flavor text.
  + formula: string

    The original matched text.
  + offset: RollParseOffset

    The position of the matched term in the formula string.

  #### Returns [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

### `Protected`\_onPoolTerm

* \_onPoolTerm(  
  Â Â Â Â head: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md),  
  Â Â Â Â tail: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)[],  
  Â Â Â Â modifiers: string | null,  
  Â Â Â Â flavor: string | null,  
  Â Â Â Â formula: string,  
  Â Â Â Â offset: RollParseOffset,  
  ): [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

  `Protected`

  Handle a pool term.

  #### Parameters

  + head: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

    The first term.
  + tail: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)[]

    Zero or more additional terms.
  + modifiers: string | null

    The matched modifiers string.
  + flavor: string | null

    Associated flavor text.
  + formula: string

    The original matched text.
  + offset: RollParseOffset

    The position of the matched term in the formula string.

  #### Returns [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

### `Protected`\_onStringTerm

* \_onStringTerm(  
  Â Â Â Â term: string,  
  Â Â Â Â flavor?: string | null,  
  Â Â Â Â offset: RollParseOffset,  
  ): StringParseNode

  `Protected`

  Handle some string that failed to be classified.

  #### Parameters

  + term: string

    The term.
  + `Optional`flavor: string | null

    Associated flavor text.
  + offset: RollParseOffset

    The position of the matched term in the formula string.

  #### Returns StringParseNode

### `Protected`\_wrapNegativeTerm

* \_wrapNegativeTerm(term: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)): [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

  `Protected`

  Wrap a term with a leading minus.

  #### Parameters

  + term: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

    The term to wrap.

  #### Returns [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

### `Static`flattenTree

* flattenTree(root: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)): [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)[]

  Flatten a tree structure (either a parse tree or AST) into an array with operators in infix notation.

  #### Parameters

  + root: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

    The root of the tree.

  #### Returns [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)[]

### `Static`formatArg

* formatArg(arg: any): string

  Format a parser argument.

  #### Parameters

  + arg: any

    The argument.

  #### Returns string

### `Static`formatDebug

* formatDebug(method: string, ...args: any[]): string

  Format arguments for debugging.

  #### Parameters

  + method: string

    The method name.
  + ...args: any[]

    The arguments.

  #### Returns string

### `Static`formatList

* formatList(list: any[]): string

  Format a list argument.

  #### Parameters

  + list: any[]

    The list to format.

  #### Returns string

### `Static`isOperatorTerm

* isOperatorTerm(node: any): boolean

  Determine if a given node is an operator term.

  #### Parameters

  + node: any

  #### Returns boolean

### `Static`toAST

* toAST(root: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md) | RollTerm[]): [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

  Use the Shunting Yard algorithm to convert a parse tree or list of terms into an AST with correct operator
  precedence.
  See <https://en.wikipedia.org/wiki/Shunting_yard_algorithm> for a description of the algorithm in detail.

  #### Parameters

  + root: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md) | RollTerm[]

    The root of the parse tree or a list of terms.

  #### Returns [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)

  The root of the AST.