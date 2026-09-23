---
title: "ProseMirrorContentLinkPlugin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorContentLinkPlugin.html"
category: "classes"
---

# Class ProseMirrorContentLinkPlugin

A class responsible for handling the dropping of Documents onto the editor and creating content links for them.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.prosemirror.ProseMirrorContentLinkPlugin))

* [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md)
  + ProseMirrorContentLinkPlugin

##### Index

### Constructors

[constructor](#constructor)

### Properties

[schema](#schema)

### Accessors

[key](#key)

### Methods

[\_onDrop](#_ondrop)
[build](#build)

## Constructors

### constructor

* new ProseMirrorContentLinkPlugin(  
  Â Â Â Â schema: Schema,  
  Â Â Â Â options?: [ProseMirrorContentLinkOptions](../interfaces/foundry.prosemirror.types.ProseMirrorContentLinkOptions.md),  
  ): ProseMirrorContentLinkPlugin

  #### Parameters

  + schema: Schema

    The ProseMirror schema.
  + options: [ProseMirrorContentLinkOptions](../interfaces/foundry.prosemirror.types.ProseMirrorContentLinkOptions.md) = {}

    Additional options to configure the plugin's behaviour.

  #### Returns ProseMirrorContentLinkPlugin

  Overrides [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[constructor](foundry.prosemirror.ProseMirrorPlugin.md#constructor)

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

### `Protected`\_onDrop

* \_onDrop(  
  Â Â Â Â view: EditorView,  
  Â Â Â Â event: DragEvent,  
  Â Â Â Â slice: Slice,  
  Â Â Â Â moved: boolean,  
  ): true | undefined

  `Protected`

  Handle a drop onto the editor.

  #### Parameters

  + view: EditorView

    The ProseMirror editor view.
  + event: DragEvent

    The drop event.
  + slice: Slice

    A slice of editor content.
  + moved: boolean

    Whether the slice has been moved from a different part of the editor.

  #### Returns true | undefined

### `Static`build

* build(schema: any, options?: {}): Plugin<any>

  Build the plugin.

  #### Parameters

  + schema: any

    The ProseMirror schema to build the plugin against.
  + options: {} = {}

    Additional options to pass to the plugin.

  #### Returns Plugin<any>

  Overrides [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[build](foundry.prosemirror.ProseMirrorPlugin.md#build)