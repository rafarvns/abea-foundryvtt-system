---
title: "ChatInputPlugin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.common_prosemirror_chat__module.ChatInputPlugin.html"
category: "classes"
---

# Class ChatInputPlugin

A plugin for the chat message editor which handles interactivity.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.common/prosemirror/chat/_module.ChatInputPlugin))

* [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md)
  + ChatInputPlugin

##### Index

### Constructors

[constructor](#constructor)

### Properties

[schema](#schema)

### Accessors

[chat](#chat)
[key](#key)

### Methods

[sendMessage](#sendmessage)
[setMessage](#setmessage)
[\_inspectTransactions](#_inspecttransactions)
[\_onKeyDown](#_onkeydown)
[build](#build)

## Constructors

### constructor

* new ChatInputPlugin(schema: Schema, chat: ChatLog): ChatInputPlugin

  #### Parameters

  + schema: Schema

    The ProseMirror schema to build the plugin against.
  + chat: ChatLog

    The ChatLog instance this plugin belongs to.

  #### Returns ChatInputPlugin

  Overrides [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[constructor](foundry.prosemirror.ProseMirrorPlugin.md#constructor)

## Properties

### schema

schema: Schema<any, any>

The ProseMirror schema to build the plugin against.

Inherited from [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[schema](foundry.prosemirror.ProseMirrorPlugin.md#schema)

## Accessors

### chat

* get chat(): ChatLog

  The ChatLog instance this plugin belongs to.

  #### Returns ChatLog

### `Static`key

* get key(): PluginKey<any>

  A unique key for this plugin that can be used to identify a plugin instance in any given editor.

  #### Returns PluginKey<any>

  Inherited from ProseMirrorPlugin.key

## Methods

### sendMessage

* sendMessage(view: EditorView): Promise<void>

  Handle sending a chat message.

  #### Parameters

  + view: EditorView

    The editor view.

  #### Returns Promise<void>

### setMessage

* setMessage(view: EditorView, message: string, meta: object): void

  Set the contents of the chat input to the given value.

  #### Parameters

  + view: EditorView

    The editor view.
  + message: string

    The message to set.
  + meta: object

    Any metadata to append to the transaction.

  #### Returns void

### `Protected`\_inspectTransactions

* \_inspectTransactions(  
  Â Â Â Â transactions: Transaction[],  
  Â Â Â Â oldState: EditorState,  
  Â Â Â Â newState: EditorState,  
  ): void

  `Protected`

  Inspect transactions and update pending state if they involve insertions or deletions.

  #### Parameters

  + transactions: Transaction[]

    The transactions.
  + oldState: EditorState

    The editor state before.
  + newState: EditorState

    The editor state after.

  #### Returns void

### `Protected`\_onKeyDown

* \_onKeyDown(view: EditorView, event: KeyboardEvent): boolean | void

  `Protected`

  Handle keydown events.

  #### Parameters

  + view: EditorView

    The editor view.
  + event: KeyboardEvent

    The keyboard event.

  #### Returns boolean | void

### `Static`build

* build(schema: Schema, options?: { chat?: any }): Plugin<any>

  Build the plugin.

  #### Parameters

  + schema: Schema

    The ProseMirror schema to build the plugin against.
  + `Optional`options: { chat?: any } = {}
    - ##### `Optional`chat?: any

      The ChatLog instance this plugin belongs to.

  #### Returns Plugin<any>

  Overrides [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[build](foundry.prosemirror.ProseMirrorPlugin.md#build)