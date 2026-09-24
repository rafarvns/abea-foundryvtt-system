---
title: "HTMLDocumentEmbedElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.HTMLDocumentEmbedElement.html"
category: "classes"
---

# Class HTMLDocumentEmbedElement

A custom HTMLElement that is used to wrap enriched content that requires additional interactivity.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.HTMLDocumentEmbedElement))

* [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md)
  + HTMLDocumentEmbedElement

##### Index

### Properties

[tagName](#tagname)

### Methods

[adoptedCallback](#adoptedcallback)
[connectedCallback](#connectedcallback)
[disconnectedCallback](#disconnectedcallback)

## Properties

### `Static`tagName

tagName: string = "document-embed"

The HTML tag named used by this element.

## Methods

### adoptedCallback

* adoptedCallback(): void

  Called when the element is moved into a new Document.

  #### Returns void

  Inherited from [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md).[adoptedCallback](foundry.applications.elements.AdoptableHTMLElement.md#adoptedcallback)

### connectedCallback

* connectedCallback(): void

  Invoke the Document#onEmbed callback when it is added to the DOM.

  #### Returns void

### disconnectedCallback

* disconnectedCallback(): void

  Called when the element is first removed from a Document. In cases where it is then moved into another Document,
  this callback is invoked before adoptedCallback, so we must also re-apply the prototype here so that subclasses
  have any disconnectedCallback overrides invoked appropriately.

  #### Returns void

  Inherited from [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md).[disconnectedCallback](foundry.applications.elements.AdoptableHTMLElement.md#disconnectedcallback)