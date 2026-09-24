---
title: "HTMLEnrichedContentElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.HTMLEnrichedContentElement.html"
category: "classes"
---

# Class HTMLEnrichedContentElement

A custom HTMLElement that is used to wrap enriched content that requires additional interactivity.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.HTMLEnrichedContentElement))

* [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md)
  + HTMLEnrichedContentElement

##### Index

### Properties

[observedAttributes](#observedattributes)
[tagName](#tagname)

### Methods

[adoptedCallback](#adoptedcallback)
[attributeChangedCallback](#attributechangedcallback)
[connectedCallback](#connectedcallback)
[disconnectedCallback](#disconnectedcallback)

## Properties

### `Static`observedAttributes

observedAttributes: string[] = ...

Attributes requiring change notifications

### `Static`tagName

tagName: string = "enriched-content"

The HTML tag named used by this element.

## Methods

### adoptedCallback

* adoptedCallback(): void

  Called when the element is moved into a new Document.

  #### Returns void

  Inherited from [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md).[adoptedCallback](foundry.applications.elements.AdoptableHTMLElement.md#adoptedcallback)

### attributeChangedCallback

* attributeChangedCallback(  
  Â Â Â Â attrName: string,  
  Â Â Â Â oldValue: string | null,  
  Â Â Â Â newValue: string | null,  
  ): void

  Fire a callback on change to an observed attribute.

  #### Parameters

  + attrName: string

    The name of the attribute
  + oldValue: string | null

    The old value: null indicates the attribute was not present.
  + newValue: string | null

    The new value: null indicates the attribute is removed.

  #### Returns void

### connectedCallback

* connectedCallback(): void

  Invoke the enricher onRender callback when it is added to the DOM.

  #### Returns void

### disconnectedCallback

* disconnectedCallback(): void

  Called when the element is first removed from a Document. In cases where it is then moved into another Document,
  this callback is invoked before adoptedCallback, so we must also re-apply the prototype here so that subclasses
  have any disconnectedCallback overrides invoked appropriately.

  #### Returns void

  Inherited from [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md).[disconnectedCallback](foundry.applications.elements.AdoptableHTMLElement.md#disconnectedcallback)