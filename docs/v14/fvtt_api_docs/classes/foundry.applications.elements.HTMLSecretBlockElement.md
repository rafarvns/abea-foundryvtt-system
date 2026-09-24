---
title: "HTMLSecretBlockElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.HTMLSecretBlockElement.html"
category: "classes"
---

# Class HTMLSecretBlockElement

A custom HTML element used to wrap secret blocks in HTML content in order to provide additional interactivity.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.HTMLSecretBlockElement))

* [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md)
  + HTMLSecretBlockElement

##### Index

### Properties

[tagName](#tagname)

### Accessors

[revealable](#revealable)
[revealed](#revealed)
[secret](#secret)

### Methods

[adoptedCallback](#adoptedcallback)
[connectedCallback](#connectedcallback)
[disconnectedCallback](#disconnectedcallback)
[toggleRevealed](#togglerevealed)

## Properties

### `Static`tagName

tagName: string = "secret-block"

The HTML tag named used by this element.

## Accessors

### revealable

* get revealable(): boolean

  Show the button to toggle the revealed state?

  #### Returns boolean

### revealed

* get revealed(): boolean

  The revealed state of the secret block.

  #### Returns boolean

### secret

* get secret(): HTMLElement

  The wrapped secret block.

  #### Returns HTMLElement

## Methods

### adoptedCallback

* adoptedCallback(): void

  Called when the element is moved into a new Document.

  #### Returns void

  Inherited from [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md).[adoptedCallback](foundry.applications.elements.AdoptableHTMLElement.md#adoptedcallback)

### connectedCallback

* connectedCallback(): void

  #### Returns void

### disconnectedCallback

* disconnectedCallback(): void

  Called when the element is first removed from a Document. In cases where it is then moved into another Document,
  this callback is invoked before adoptedCallback, so we must also re-apply the prototype here so that subclasses
  have any disconnectedCallback overrides invoked appropriately.

  #### Returns void

  Inherited from [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md).[disconnectedCallback](foundry.applications.elements.AdoptableHTMLElement.md#disconnectedcallback)

### toggleRevealed

* toggleRevealed(content: string): string

  Toggle the secret revealed or hidden state in content that this secret block represents.

  #### Parameters

  + content: string

    The raw string content for this secret.

  #### Returns string

  The modified raw content.