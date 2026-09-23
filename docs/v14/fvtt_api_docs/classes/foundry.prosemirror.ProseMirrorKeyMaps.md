---
title: "ProseMirrorKeyMaps | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorKeyMaps.html"
category: "classes"
---

# Class ProseMirrorKeyMaps

A class responsible for building the keyboard commands for the ProseMirror editor.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.prosemirror.ProseMirrorKeyMaps))

* [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md)
  + ProseMirrorKeyMaps

##### Index

### Constructors

[constructor](#constructor)

### Properties

[schema](#schema)

### Accessors

[key](#key)

### Methods

[buildMapping](#buildmapping)
[build](#build)

## Constructors

### constructor

* new ProseMirrorKeyMaps(  
  Â Â Â Â schema: Schema,  
  Â Â Â Â options?: { joinDoubleBreak?: boolean; onSave?: Function },  
  ): ProseMirrorKeyMaps

  #### Parameters

  + schema: Schema

    The ProseMirror schema to build keymaps for.
  + `Optional`options: { joinDoubleBreak?: boolean; onSave?: Function } = {}

    Additional options to configure the plugin's behavior.

    - ##### `Optional`joinDoubleBreak?: boolean

      If a double line-break is detected, join it into a paragraph instead.
    - ##### `Optional`onSave?: Function

      A function to call when Ctrl+S is pressed.

  #### Returns ProseMirrorKeyMaps

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

### buildMapping

* buildMapping(): Record<string, [ProseMirrorCommand](../types/foundry.prosemirror.types.ProseMirrorCommand.md)>

  Build keyboard commands for nodes and marks present in the schema.

  #### Returns Record<string, [ProseMirrorCommand](../types/foundry.prosemirror.types.ProseMirrorCommand.md)>

  An object of keyboard shortcuts to editor functions.

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