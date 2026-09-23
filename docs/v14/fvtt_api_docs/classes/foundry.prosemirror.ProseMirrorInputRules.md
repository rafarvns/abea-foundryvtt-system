---
title: "ProseMirrorInputRules | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorInputRules.html"
category: "classes"
---

# Class ProseMirrorInputRules

A class responsible for building the input rules for the ProseMirror editor.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.prosemirror.ProseMirrorInputRules))

* [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md)
  + ProseMirrorInputRules

##### Index

### Constructors

[constructor](#constructor)

### Properties

[schema](#schema)

### Accessors

[key](#key)

### Methods

[buildRules](#buildrules)
[build](#build)

## Constructors

### constructor

* new ProseMirrorInputRules(schema: Schema<any, any>): ProseMirrorInputRules

  An abstract class for building a ProseMirror Plugin.

  #### Parameters

  + schema: Schema<any, any>

    The schema to build the plugin against.

  #### Returns ProseMirrorInputRules

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

### buildRules

* buildRules(): InputRule[]

  Build input rules for node types present in the schema.

  #### Returns InputRule[]

### `Static`build

* build(  
  Â Â Â Â schema: Schema,  
  Â Â Â Â options?: { minHeadingLevel?: number },  
  ): Plugin<PluginState>

  Build the plugin.

  #### Parameters

  + schema: Schema

    The ProseMirror schema to build the plugin against.
  + `Optional`options: { minHeadingLevel?: number } = {}

    Additional options to pass to the plugin.

    - ##### `Optional`minHeadingLevel?: number

      The minimum heading level to start from when generating heading input
      rules. The resulting heading level for a heading rule is equal to the
      number of leading hashes minus this number.

  #### Returns Plugin<PluginState>

  Overrides [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[build](foundry.prosemirror.ProseMirrorPlugin.md#build)