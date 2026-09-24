---
title: "StringNode | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.utils.StringNode.html"
category: "classes"
---

# Class StringNode

A class that behaves like a lightweight DOM node, allowing children to be appended. Serializes to an HTML string.

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[inline](#inline)

### Methods

[appendChild](#appendchild)
[toString](#tostring)
[fromString](#fromstring)

## Constructors

### constructor

* new StringNode(  
  Â Â Â Â tag?: string,  
  Â Â Â Â attrs?: Record<string, string>,  
  Â Â Â Â inline?: boolean,  
  ): StringNode

  #### Parameters

  + `Optional`tag: string

    The tag name. If none is provided, this node's children will not be wrapped in an
    outer tag.
  + `Optional`attrs: Record<string, string> = {}

    The tag attributes.
  + `Optional`inline: boolean = true

    Whether the node appears inline or as a block.

  #### Returns StringNode

## Accessors

### inline

* get inline(): boolean

  Whether the node appears inline or as a block.

  #### Returns boolean

## Methods

### appendChild

* appendChild(child: string | StringNode): void

  Append a child to this string node.

  #### Parameters

  + child: string | StringNode

    The child node or string.

  #### Returns void

  #### Throws

  If attempting to append a child to a void element.

### toString

* toString(  
  Â Â Â Â spaces?: string | number,  
  Â Â Â Â internal?: { \_depth?: number; \_inlineParent?: boolean },  
  ): any

  Serialize the StringNode structure into a single string.

  #### Parameters

  + spaces: string | number = 0

    The number of spaces to use for indentation (maximum 10). If this value is a string,
    that string is used as indentation instead (or the first 10 characters if it is
    longer).
  + `Optional`internal: { \_depth?: number; \_inlineParent?: boolean } = {}

  #### Returns any

### `Static`fromString

* fromString(html: string): StringNode

  Convert an HTML string to a StringNode.

  #### Parameters

  + html: string

    The HTML string.

  #### Returns StringNode

  #### Throws

  If unable to perform conversion.