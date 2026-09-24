---
title: "AdoptableHTMLElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.AdoptableHTMLElement.html"
category: "classes"
---

# Class AdoptableHTMLElement

An HTMLElement implementation which provides extra resilience when being adopted across Documents, working around a
Firefox bug that causes them to lose their custom prototypes.
<https://bugzilla.mozilla.org/show_bug.cgi?id=1502814>

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.AdoptableHTMLElement))

* HTMLElement
  + AdoptableHTMLElement
    - [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md)
    - [HTMLDocumentEmbedElement](foundry.applications.elements.HTMLDocumentEmbedElement.md)
    - [HTMLEnrichedContentElement](foundry.applications.elements.HTMLEnrichedContentElement.md)
    - [HTMLSecretBlockElement](foundry.applications.elements.HTMLSecretBlockElement.md)

##### Index

### Methods

[adoptedCallback](#adoptedcallback)
[disconnectedCallback](#disconnectedcallback)

## Methods

### adoptedCallback

* adoptedCallback(): void

  Called when the element is moved into a new Document.

  #### Returns void

### disconnectedCallback

* disconnectedCallback(): void

  Called when the element is first removed from a Document. In cases where it is then moved into another Document,
  this callback is invoked before adoptedCallback, so we must also re-apply the prototype here so that subclasses
  have any disconnectedCallback overrides invoked appropriately.

  #### Returns void