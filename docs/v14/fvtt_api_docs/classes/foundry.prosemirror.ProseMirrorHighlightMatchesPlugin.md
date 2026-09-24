---
title: "ProseMirrorHighlightMatchesPlugin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorHighlightMatchesPlugin.html"
category: "classes"
---

# Class ProseMirrorHighlightMatchesPlugin

A ProseMirrorPlugin wrapper around the PossibleMatchesTooltip class.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.prosemirror.ProseMirrorHighlightMatchesPlugin))

* [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md)
  + ProseMirrorHighlightMatchesPlugin

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

* new ProseMirrorHighlightMatchesPlugin(  
  Â Â Â Â schema: Schema,  
  Â Â Â Â options?: any,  
  ): ProseMirrorHighlightMatchesPlugin

  #### Parameters

  + schema: Schema

    The ProseMirror schema.
  + `Optional`options: any = {}

    Additional options to configure the plugin's behaviour.

  #### Returns ProseMirrorHighlightMatchesPlugin

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