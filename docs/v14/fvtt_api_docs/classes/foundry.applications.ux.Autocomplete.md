---
title: "Autocomplete | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ux.Autocomplete.html"
category: "classes"
---

# Class Autocomplete

A widget that provides a drop-down list of autocompletion options.

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[element](#element)
[implementation](#implementation)

### Methods

[activate](#activate)
[commit](#commit)
[dismiss](#dismiss)
[select](#select)
[activateListeners](#activatelisteners)

## Constructors

### constructor

* new Autocomplete(options?: { onSelect?: [AutocompleteCallback](../types/foundry.AutocompleteCallback.md) }): Autocomplete

  #### Parameters

  + `Optional`options: { onSelect?: [AutocompleteCallback](../types/foundry.AutocompleteCallback.md) } = {}
    - ##### `Optional`onSelect?: [AutocompleteCallback](../types/foundry.AutocompleteCallback.md)

      Callback to fire when an entry is selected.

  #### Returns Autocomplete

## Accessors

### element

* get element(): HTMLMenuElement

  The auto-complete menu.

  #### Returns HTMLMenuElement

### `Static`implementation

* get implementation(): typeof Autocomplete

  Retrieve the configured Autocomplete implementation.

  #### Returns typeof Autocomplete

## Methods

### activate

* activate(  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â entries: [AutocompleteEntry](../interfaces/foundry.AutocompleteEntry.md)[],  
  Â Â Â Â options?: { position?: any; prefix?: string },  
  ): void

  Activate an auto-complete menu.

  #### Parameters

  + target: HTMLElement

    The element the autocomplete is being rendered for.
  + entries: [AutocompleteEntry](../interfaces/foundry.AutocompleteEntry.md)[]

    The entries to render.
  + `Optional`options: { position?: any; prefix?: string } = {}
    - ##### `Optional`position?: any

      Position the menu. If omitted, the menu is positioned
      underneath the target.
    - ##### `Optional`prefix?: string

      The matched prefix that triggered the autocomplete menu.

  #### Returns void

### commit

* commit(): void

  Commit a choice.

  #### Returns void

### dismiss

* dismiss(): void

  Dismiss the auto-complete menu.

  #### Returns void

### select

* select(increment?: number): void

  Move the current auto-complete selection.

  #### Parameters

  + increment: number = 0

    The number of entries to advance the selection. A negative number moves up, and a
    positive number moves down.

  #### Returns void

### `Static`activateListeners

* activateListeners(document: Document): void

  Bind global autocomplete listeners to a given document.

  #### Parameters

  + document: Document

    The document.

  #### Returns void