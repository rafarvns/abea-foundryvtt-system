---
title: "ProseMirrorPlugin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorPlugin.html"
category: "classes"
---

# Class ProseMirrorPlugin`Abstract`

#### Hierarchy ([View Summary](../hierarchy.md#foundry.prosemirror.ProseMirrorPlugin))

* ProseMirrorPlugin
  + [ProseMirrorContentLinkPlugin](foundry.prosemirror.ProseMirrorContentLinkPlugin.md)
  + [ProseMirrorHighlightMatchesPlugin](foundry.prosemirror.ProseMirrorHighlightMatchesPlugin.md)
  + [ProseMirrorDirtyPlugin](foundry.prosemirror.ProseMirrorDirtyPlugin.md)
  + [ProseMirrorImagePlugin](foundry.prosemirror.ProseMirrorImagePlugin.md)
  + [ProseMirrorClickHandler](foundry.prosemirror.ProseMirrorClickHandler.md)
  + [ProseMirrorPasteTransformer](foundry.prosemirror.ProseMirrorPasteTransformer.md)
  + [ProseMirrorInputRules](foundry.prosemirror.ProseMirrorInputRules.md)
  + [ProseMirrorKeyMaps](foundry.prosemirror.ProseMirrorKeyMaps.md)
  + [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md)
  + [ChatInputPlugin](foundry.common_prosemirror_chat__module.ChatInputPlugin.md)

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

* new ProseMirrorPlugin(schema: Schema<any, any>): ProseMirrorPlugin

  An abstract class for building a ProseMirror Plugin.

  #### Parameters

  + schema: Schema<any, any>

    The schema to build the plugin against.

  #### Returns ProseMirrorPlugin

  #### See

## Properties

### schema

schema: Schema<any, any>

The ProseMirror schema to build the plugin against.

## Accessors

### `Static`key

* get key(): PluginKey<any>

  A unique key for this plugin that can be used to identify a plugin instance in any given editor.

  #### Returns PluginKey<any>

## Methods

### `Static` `Abstract`build

* build(schema: Schema<any, any>, options?: object): Plugin<any>

  Build the plugin.

  #### Parameters

  + schema: Schema<any, any>

    The ProseMirror schema to build the plugin against.
  + `Optional`options: object = {}

    Additional options to pass to the plugin.

  #### Returns Plugin<any>