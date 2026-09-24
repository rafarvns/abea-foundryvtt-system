---
title: "ProseMirrorClickHandler | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorClickHandler.html"
category: "classes"
---

# Class ProseMirrorClickHandler

A class responsible for managing click events inside a ProseMirror editor.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.prosemirror.ProseMirrorClickHandler))

* [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md)
  + ProseMirrorClickHandler

##### Index

### Constructors

[constructor](#constructor)

### Properties

[schema](#schema)

### Accessors

[key](#key)

### Methods

[\_onClick](#_onclick)
[build](#build)

## Constructors

### constructor

* new ProseMirrorClickHandler(schema: Schema<any, any>): ProseMirrorClickHandler

  An abstract class for building a ProseMirror Plugin.

  #### Parameters

  + schema: Schema<any, any>

    The schema to build the plugin against.

  #### Returns ProseMirrorClickHandler

  #### See

  Inherited from [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[constructor](foundry.prosemirror.ProseMirrorPlugin.md#constructor)

## Properties

### schema

schema: Schema<any, any>

The ProseMirror schema to build the plugin against.

Inherited from [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[schema](foundry.prosemirror.ProseMirrorPlugin.md#schema)

## Accessors

### `Static`key

* get key(): PluginKey<any>

  A unique key for this plugin that can be used to identify a plugin instance in any given editor.

  #### Returns PluginKey<any>

  Inherited from ProseMirrorPlugin.key

## Methods

### `Protected`\_onClick

* \_onClick(  
  Â Â Â Â view: EditorView,  
  Â Â Â Â pos: number,  
  Â Â Â Â node: Node,  
  Â Â Â Â nodePos: number,  
  Â Â Â Â event: PointerEvent,  
  Â Â Â Â direct: boolean,  
  ): boolean | void

  `Protected`

  Handle a click on the editor.

  #### Parameters

  + view: EditorView

    The ProseMirror editor view.
  + pos: number

    The position in the ProseMirror document that the click occurred at.
  + node: Node

    The current ProseMirror Node that the click has bubbled to.
  + nodePos: number

    The position of the click within this Node.
  + event: PointerEvent

    The click event.
  + direct: boolean

    Whether this Node is the one that was directly clicked on.

  #### Returns boolean | void

  A return value of true indicates the event has been handled, it will not propagate to
  other plugins, and ProseMirror will call preventDefault on it.

### `Static`build

* build(schema: any, options?: {}): Plugin<any>

  #### Parameters

  + schema: any
  + options: {} = {}

  #### Returns Plugin<any>

  Overrides [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[build](foundry.prosemirror.ProseMirrorPlugin.md#build)