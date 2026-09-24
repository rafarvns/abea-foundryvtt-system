---
title: "ProseMirrorImagePlugin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorImagePlugin.html"
category: "classes"
---

# Class ProseMirrorImagePlugin

A class responsible for handle drag-and-drop and pasting of image content. Ensuring no base64 data is injected
directly into the journal content and it is instead uploaded to the user's data directory.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.prosemirror.ProseMirrorImagePlugin))

* [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md)
  + ProseMirrorImagePlugin

##### Index

### Constructors

[constructor](#constructor)

### Properties

[schema](#schema)

### Accessors

[key](#key)

### Methods

[\_extractBase64Images](#_extractbase64images)
[\_onDrop](#_ondrop)
[\_onPaste](#_onpaste)
[\_replaceBase64Images](#_replacebase64images)
[\_uploadImages](#_uploadimages)
[base64ToFile](#base64tofile)
[build](#build)

## Constructors

### constructor

* new ProseMirrorImagePlugin(  
  Â Â Â Â schema: Schema,  
  Â Â Â Â options?: { document: ClientDocument },  
  ): ProseMirrorImagePlugin

  #### Parameters

  + schema: Schema

    The ProseMirror schema.
  + options: { document: ClientDocument } = {}

    Additional options to configure the plugin's behaviour.

    - ##### document: ClientDocument

      A related Document to store extract base64 images for.

  #### Returns ProseMirrorImagePlugin

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

### `Protected`\_extractBase64Images

* \_extractBase64Images(html: string): [full: string, mime: string, data: string][]

  `Protected`

  Detect base64 image data embedded in an HTML string and extract it.

  #### Parameters

  + html: string

    The HTML data as a string.

  #### Returns [full: string, mime: string, data: string][]

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

### `Protected`\_onPaste

* \_onPaste(view: EditorView, event: ClipboardEvent): true | undefined

  `Protected`

  Handle a paste into the editor.

  #### Parameters

  + view: EditorView

    The ProseMirror editor view.
  + event: ClipboardEvent

    The paste event.

  #### Returns true | undefined

### `Protected`\_replaceBase64Images

* \_replaceBase64Images(  
  Â Â Â Â view: EditorView,  
  Â Â Â Â html: string,  
  Â Â Â Â images: [full: string, mime: string, data: string][],  
  ): Promise<void>

  `Protected`

  Capture any base64-encoded images embedded in the rich text paste and upload them.

  #### Parameters

  + view: EditorView

    The ProseMirror editor view.
  + html: string

    The HTML data as a string.
  + images: [full: string, mime: string, data: string][]

    An array of extracted base64 image data.

  #### Returns Promise<void>

### `Protected`\_uploadImages

* \_uploadImages(view: EditorView, files: FileList, pos?: number): Promise<void>

  `Protected`

  Upload any image files encountered in the drop.

  #### Parameters

  + view: EditorView

    The ProseMirror editor view.
  + files: FileList

    The files to upload.
  + `Optional`pos: number

    The position in the document to insert at. If not provided, the current selection will be
    replaced instead.

  #### Returns Promise<void>

### `Static`base64ToFile

* base64ToFile(data: string, filename: string, mimetype: string): File

  Convert a base64 string into a File object.

  #### Parameters

  + data: string

    Base64 encoded data.
  + filename: string

    The filename.
  + mimetype: string

    The file's mimetype.

  #### Returns File

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