---
title: "default | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.default.html"
category: "classes"
---

# Class default

ProseMirror implementation of the HTML disclosure widget.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[contentDOM](#contentdom)
[dom](#dom)
[getPos](#getpos)

### Accessors

[nodes](#nodes)

### Methods

[update](#update)
[view](#view)

## Constructors

### constructor

* new default(node: Node, view: EditorView, getPos: () => number): default

  #### Parameters

  + node: Node

    The node this view represents.
  + view: EditorView

    The parent EditorView.
  + getPos: () => number

    A function that returns the node's current position.

  #### Returns default

## Properties

### contentDOM

contentDOM: HTMLDetailsElement

The DOM node to render the document node's children into.

### dom

dom: HTMLDetailsElement

The outer DOM node that represents the document node.

### getPos

getPos: () => number

A function that returns the node's current position.

## Accessors

### `Static`nodes

* get nodes(): Record<string, NodeSpec>

  Return the specs for the disclosure widget nodes.

  #### Returns Record<string, NodeSpec>

## Methods

### update

* update(node: Node): boolean

  When the EditorView updates itself, determine if this view can update to the given node.

  #### Parameters

  + node: Node

    The node.

  #### Returns boolean

### `Static`view

* view(node: Node, view: EditorView, getPos: () => number): default

  Static instantiator function for the NodeView that can be passed to a new EditorView.

  #### Parameters

  + node: Node

    The node this view represents.
  + view: EditorView

    The parent EditorView.
  + getPos: () => number

    A function that returns the node's current position.

  #### Returns default