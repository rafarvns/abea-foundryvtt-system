---
title: "ProseMirrorDirtyPlugin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorDirtyPlugin.html"
category: "classes"
---

# Class ProseMirrorDirtyPlugin

A simple plugin that records the dirty state of the editor.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.prosemirror.ProseMirrorDirtyPlugin))

* [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md)
  + ProseMirrorDirtyPlugin

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

* new ProseMirrorDirtyPlugin(schema: Schema<any, any>): ProseMirrorDirtyPlugin

  An abstract class for building a ProseMirror Plugin.

  #### Parameters

  + schema: Schema<any, any>

    The schema to build the plugin against.

  #### Returns ProseMirrorDirtyPlugin

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

* build(schema: any, options?: {}): Plugin<boolean>

  Build the plugin.

  #### Parameters

  + schema: any

    The ProseMirror schema to build the plugin against.
  + options: {} = {}

    Additional options to pass to the plugin.

  #### Returns Plugin<boolean>

  Overrides [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[build](foundry.prosemirror.ProseMirrorPlugin.md#build)