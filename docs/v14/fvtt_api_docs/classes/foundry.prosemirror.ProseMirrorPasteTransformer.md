---
title: "ProseMirrorPasteTransformer | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorPasteTransformer.html"
category: "classes"
---

# Class ProseMirrorPasteTransformer

A class responsible for applying transformations to content pasted inside the editor.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.prosemirror.ProseMirrorPasteTransformer))

* [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md)
  + ProseMirrorPasteTransformer

##### Index

### Constructors

[constructor](#constructor)

### Properties

[schema](#schema)

### Accessors

[key](#key)

### Methods

[build](#build)

## Constructors

### constructor

* new ProseMirrorPasteTransformer(  
  Â Â Â Â schema: Schema<any, any>,  
  ): ProseMirrorPasteTransformer

  An abstract class for building a ProseMirror Plugin.

  #### Parameters

  + schema: Schema<any, any>

    The schema to build the plugin against.

  #### Returns ProseMirrorPasteTransformer

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

### `Static`build

* build(schema: any, options?: {}): Plugin<any>

  #### Parameters

  + schema: any
  + options: {} = {}

  #### Returns Plugin<any>

  Overrides [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[build](foundry.prosemirror.ProseMirrorPlugin.md#build)