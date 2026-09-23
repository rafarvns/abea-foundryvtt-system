---
title: "TextEditor | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.ux.TextEditor.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [ux](../modules/foundry.applications.ux.html)
* [TextEditor](foundry.applications.ux.TextEditor.html)

# Class TextEditor

A collection of helper functions and utility methods related to the rich text editor.

##### Index

### Accessors

[implementation](foundry.applications.ux.TextEditor.html#implementation)

### Methods

[\_uploadImage](foundry.applications.ux.TextEditor.html#_uploadimage)
[activateListeners](foundry.applications.ux.TextEditor.html#activatelisteners)
[create](foundry.applications.ux.TextEditor.html#create)
[createAnchor](foundry.applications.ux.TextEditor.html#createanchor)
[decodeHTML](foundry.applications.ux.TextEditor.html#decodehtml)
[enrichHTML](foundry.applications.ux.TextEditor.html#enrichhtml)
[getContentLink](foundry.applications.ux.TextEditor.html#getcontentlink)
[getDragEventData](foundry.applications.ux.TextEditor.html#getdrageventdata)
[previewHTML](foundry.applications.ux.TextEditor.html#previewhtml)
[truncateHTML](foundry.applications.ux.TextEditor.html#truncatehtml)
[truncateText](foundry.applications.ux.TextEditor.html#truncatetext)
[\_applyCustomEnrichers](foundry.applications.ux.TextEditor.html#_applycustomenrichers)
[\_createContentLink](foundry.applications.ux.TextEditor.html#_createcontentlink)
[\_createHyperlink](foundry.applications.ux.TextEditor.html#_createhyperlink)
[\_createInlineRoll](foundry.applications.ux.TextEditor.html#_createinlineroll)
[\_createTinyMCE](foundry.applications.ux.TextEditor.html#_createtinymce)
[\_embedContent](foundry.applications.ux.TextEditor.html#_embedcontent)
[\_enrichContentLinks](foundry.applications.ux.TextEditor.html#_enrichcontentlinks)
[\_enrichEmbeds](foundry.applications.ux.TextEditor.html#_enrichembeds)
[\_enrichHyperlinks](foundry.applications.ux.TextEditor.html#_enrichhyperlinks)
[\_enrichInlineRolls](foundry.applications.ux.TextEditor.html#_enrichinlinerolls)
[\_finalizeEnrichedHTML](foundry.applications.ux.TextEditor.html#_finalizeenrichedhtml)
[\_onClickInlineRoll](foundry.applications.ux.TextEditor.html#_onclickinlineroll)
[\_parseEmbedConfig](foundry.applications.ux.TextEditor.html#_parseembedconfig)
[\_primeCompendiums](foundry.applications.ux.TextEditor.html#_primecompendiums)
[\_replaceTextContent](foundry.applications.ux.TextEditor.html#_replacetextcontent)

## Accessors

### `Static`implementation

* get implementation(): typeof [applications](../modules/foundry.applications.html).[ux](../modules/foundry.applications.ux.html).[TextEditor](foundry.applications.ux.TextEditor.html)

  Retrieve the configured TextEditor implementation.

  #### Returns typeof [applications](../modules/foundry.applications.html).[ux](../modules/foundry.applications.ux.html).[TextEditor](foundry.applications.ux.TextEditor.html)

## Methods

### `Static`\_uploadImage

* \_uploadImage(uuid: string, file: File): Promise<string | void>

  `Internal`

  Upload an image to a document's asset path.

  #### Parameters

  + uuid: string

    The document's UUID.
  + file: File

    The image file to upload.

  #### Returns Promise<string | void>

  The path to the uploaded image.

### `Static`activateListeners

* activateListeners(): void

  Activate interaction listeners for the interior content of the editor frame.

  #### Returns void

### `Static`create

* create(  
  Â Â Â Â options?: { engine?: string },  
  Â Â Â Â content?: string,  
  ): Promise<[ProseMirrorEditor](foundry.applications.ux.ProseMirrorEditor.html) | Editor>

  Create a Rich Text Editor. The current implementation uses TinyMCE

  #### Parameters

  + options: { engine?: string } = {}

    Configuration options provided to the Editor init

    - ##### `Optional`engine?: string

      Which rich text editor engine to use, "tinymce" or "prosemirror". TinyMCE
      is deprecated and will be removed in a later version.
  + content: string = ""

    Initial HTML or text content to populate the editor with

  #### Returns Promise<[ProseMirrorEditor](foundry.applications.ux.ProseMirrorEditor.html) | Editor>

  The editor instance.

### `Static`createAnchor

* createAnchor(options?: Partial<[EnrichmentAnchorOptions](../interfaces/foundry.EnrichmentAnchorOptions.html)>): HTMLAnchorElement

  Helper method to create an anchor element.

  #### Parameters

  + `Optional`options: Partial<[EnrichmentAnchorOptions](../interfaces/foundry.EnrichmentAnchorOptions.html)> = {}

    Options to configure the anchor's construction.

  #### Returns HTMLAnchorElement

### `Static`decodeHTML

* decodeHTML(html: string): string

  Safely decode an HTML string, removing invalid tags and converting entities back to unicode characters.

  #### Parameters

  + html: string

    The original encoded HTML string

  #### Returns string

  The decoded unicode string

### `Static`enrichHTML

* enrichHTML(content: string, options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html)): Promise<string>

  Enrich HTML content by replacing or augmenting components of it

  #### Parameters

  + content: string

    The original HTML content (as a string)
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html) = {}

    Additional options which configure how HTML is enriched

  #### Returns Promise<string>

  The enriched HTML content

### `Static`getContentLink

* getContentLink(  
  Â Â Â Â eventData: object,  
  Â Â Â Â options?: { label?: string; relativeTo?: any },  
  ): Promise<null | string>

  Given a Drop event, returns a Content link if possible such as "@Actor[ABC123]", else `null`

  #### Parameters

  + eventData: object

    The parsed object of data provided by the transfer event
  + `Optional`options: { label?: string; relativeTo?: any } = {}

    Additional options to configure link creation.

    - ##### `Optional`label?: string

      A custom label to use instead of the document's name.
    - ##### `Optional`relativeTo?: any

      A document to generate the link relative to.

  #### Returns Promise<null | string>

### `Static`getDragEventData

* getDragEventData(event: DragEvent): object

  Extract JSON data from a drag/drop event.

  #### Parameters

  + event: DragEvent

    The drag event which contains JSON data.

  #### Returns object

  The extracted JSON data. The object will be empty if the DragEvent did not contain
  JSON-parseable data.

### `Static`previewHTML

* previewHTML(content: string, length?: number): string

  Preview an HTML fragment by constructing a substring of a given length from its inner text.

  #### Parameters

  + content: string

    The raw HTML to preview
  + length: number = 250

    The desired length

  #### Returns string

  The previewed HTML

### `Static`truncateHTML

* truncateHTML(html: HTMLElement): HTMLElement

  Sanitises an HTML fragment and removes any non-paragraph-style text.

  #### Parameters

  + html: HTMLElement

    The root HTML element.

  #### Returns HTMLElement

### `Static`truncateText

* truncateText(  
  Â Â Â Â text: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â maxLength?: number;  
  Â Â Â Â Â Â Â Â splitWords?: boolean;  
  Â Â Â Â Â Â Â Â suffix?: null | string;  
  Â Â Â Â },  
  ): string

  Truncate a fragment of text to a maximum number of characters.

  #### Parameters

  + text: string

    The original text fragment that should be truncated to a maximum length
  + `Optional`options: { maxLength?: number; splitWords?: boolean; suffix?: null | string } = {}

    Options which affect the behavior of text truncation

    - ##### `Optional`maxLength?: number

      The maximum allowed length of the truncated string.
    - ##### `Optional`splitWords?: boolean

      Whether to truncate by splitting on white space (if true) or breaking words.
    - ##### `Optional`suffix?: null | string

      A suffix string to append to denote that the text was truncated.

  #### Returns string

  The truncated text string

### `Protected` `Static`\_applyCustomEnrichers

* \_applyCustomEnrichers(  
  Â Â Â Â config: TextEditorEnricherConfig,  
  Â Â Â Â text: Text[],  
  Â Â Â Â options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html),  
  ): Promise<boolean>

  `Protected`

  Match any custom registered regex patterns and apply their replacements.

  #### Parameters

  + config: TextEditorEnricherConfig

    The custom enricher configuration.
  + text: Text[]

    The existing text content.
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html)

    Options provided to customize text enrichment

  #### Returns Promise<boolean>

  Whether any replacements were made, requiring the text nodes to be
  updated.

### `Protected` `Static`\_createContentLink

* \_createContentLink(  
  Â Â Â Â match: RegExpMatchArray,  
  Â Â Â Â options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html),  
  ): Promise<HTMLAnchorElement>

  `Protected`

  Create a dynamic document link from a regular expression match

  #### Parameters

  + match: RegExpMatchArray

    The regular expression match
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html) = {}

    Additional options to configure enrichment behaviour

    - ##### `Optional`custom?: boolean

      Apply custom enrichers?
    - ##### `Optional`documents?: boolean

      Replace dynamic document links?
    - ##### `Optional`embeds?: boolean

      Replace embedded content?
    - ##### `Optional`links?: boolean

      Replace hyperlink content?
    - ##### `Optional`relativeTo?: any

      A document to resolve relative UUIDs against.
    - ##### `Optional`rollData?: object | Function

      The data object providing context for inline rolls, or a function that
      produces it.
    - ##### `Optional`rolls?: boolean

      Replace inline dice rolls?
    - ##### `Optional`secrets?: boolean

      Include unrevealed secret tags in the final HTML? If false, unrevealed
      secret blocks will be removed.

  #### Returns Promise<HTMLAnchorElement>

  An HTML element for the document link.

### `Protected` `Static`\_createHyperlink

* \_createHyperlink(  
  Â Â Â Â match: RegExpMatchArray,  
  Â Â Â Â options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html),  
  ): Promise<HTMLAnchorElement>

  `Protected`

  Replace a hyperlink-like string with an actual HTML <a> tag

  #### Parameters

  + match: RegExpMatchArray

    The regular expression match
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html) = {}

    Options provided to customize text enrichment

  #### Returns Promise<HTMLAnchorElement>

  An HTML element for the document link

### `Protected` `Static`\_createInlineRoll

* \_createInlineRoll(  
  Â Â Â Â match: RegExpMatchArray,  
  Â Â Â Â rollData: object,  
  Â Â Â Â options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html),  
  ): Promise<null | HTMLAnchorElement>

  `Protected`

  Replace an inline roll formula with a rollable <a> element or an eagerly evaluated roll result

  #### Parameters

  + match: RegExpMatchArray

    The regular expression match array
  + rollData: object

    Provided roll data for use in roll evaluation
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html) = {}

    Options provided to customize text enrichment.

  #### Returns Promise<null | HTMLAnchorElement>

  The replaced match. Returns null if the contained command is not a
  valid roll expression.

### `Protected` `Static`\_createTinyMCE

* \_createTinyMCE(options?: object, content?: string): Promise<Editor>

  `Protected`

  Create a TinyMCE editor instance.

  #### Parameters

  + `Optional`options: object = {}

    Configuration options passed to the editor.
  + `Optional`content: string = ""

    Initial HTML or text content to populate the editor with.

  #### Returns Promise<Editor>

  The TinyMCE editor instance.

### `Protected` `Static`\_embedContent

* \_embedContent(  
  Â Â Â Â match: RegExpMatchArray,  
  Â Â Â Â options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html),  
  ): Promise<null | HTMLElement>

  `Protected`

  Embed content from another Document.

  #### Parameters

  + match: RegExpMatchArray

    The regular expression match.
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html) = {}

    Options provided to customize text enrichment.

  #### Returns Promise<null | HTMLElement>

  A representation of the Document as HTML content, or null if the Document
  could not be embedded.

### `Protected` `Static`\_enrichContentLinks

* \_enrichContentLinks(text: Text[], options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html)): Promise<boolean>

  `Protected`

  Convert text of the form @UUID[uuid]{name} to anchor elements.

  #### Parameters

  + text: Text[]

    The existing text content
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html) = {}

    Options provided to customize text enrichment

    - ##### `Optional`custom?: boolean

      Apply custom enrichers?
    - ##### `Optional`documents?: boolean

      Replace dynamic document links?
    - ##### `Optional`embeds?: boolean

      Replace embedded content?
    - ##### `Optional`links?: boolean

      Replace hyperlink content?
    - ##### `Optional`relativeTo?: any

      A document to resolve relative UUIDs against.
    - ##### `Optional`rollData?: object | Function

      The data object providing context for inline rolls, or a function that
      produces it.
    - ##### `Optional`rolls?: boolean

      Replace inline dice rolls?
    - ##### `Optional`secrets?: boolean

      Include unrevealed secret tags in the final HTML? If false, unrevealed
      secret blocks will be removed.

  #### Returns Promise<boolean>

  Whether any content links were replaced and the text nodes need to be
  updated.

### `Protected` `Static`\_enrichEmbeds

* \_enrichEmbeds(text: Text[], options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html)): Promise<boolean>

  `Protected`

  Handle embedding Document content with @Embed[uuid]{label} text.

  #### Parameters

  + text: Text[]

    The existing text content.
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html) = {}

    Options provided to customize text enrichment.

  #### Returns Promise<boolean>

  Whether any embeds were replaced and the text nodes need to be updated.

### `Protected` `Static`\_enrichHyperlinks

* \_enrichHyperlinks(text: Text[], options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html)): Promise<boolean>

  `Protected`

  Convert URLs into anchor elements.

  #### Parameters

  + text: Text[]

    The existing text content
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html) = {}

    Options provided to customize text enrichment

  #### Returns Promise<boolean>

  Whether any hyperlinks were replaced and the text nodes need to be updated

### `Protected` `Static`\_enrichInlineRolls

* \_enrichInlineRolls(  
  Â Â Â Â rollData: object | Function,  
  Â Â Â Â text: Text[],  
  Â Â Â Â options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html),  
  ): Promise<boolean>

  `Protected`

  Convert text of the form [[roll]] to anchor elements.

  #### Parameters

  + rollData: object | Function

    The data object providing context for inline rolls.
  + text: Text[]

    The existing text content.
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html) = {}

    Options provided to customize text enrichment.

  #### Returns Promise<boolean>

  Whether any inline rolls were replaced and the text nodes need to be updated.

### `Protected` `Static`\_finalizeEnrichedHTML

* \_finalizeEnrichedHTML(  
  Â Â Â Â html: HTMLDivElement,  
  Â Â Â Â options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html),  
  ): Promise<void>

  `Protected` `Internal`

  A method that can be extended by subclasses to perform final post-enrichment operations on an HTML fragment.
  Final changes should be made in-place, mutating the provided HTML element.
  Note: This API is experimental and may be removed in later versions without deprecation.

  #### Parameters

  + html: HTMLDivElement

    A div element containing the enriched HTML
  + options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html)

    Provided enrichment options

  #### Returns Promise<void>

  A promise which resolves once finalization has completed

### `Protected` `Static`\_onClickInlineRoll

* \_onClickInlineRoll(event: MouseEvent): Promise<any>

  `Protected`

  Handle left-mouse clicks on an inline roll, dispatching the formula or displaying the tooltip

  #### Parameters

  + event: MouseEvent

    The initiating click event

  #### Returns Promise<any>

### `Protected` `Static`\_parseEmbedConfig

* \_parseEmbedConfig(raw: string, options?: object): [DocumentHTMLEmbedConfig](../interfaces/foundry.DocumentHTMLEmbedConfig.html)

  `Protected`

  Parse the embed configuration to be passed to ClientDocument#toEmbed.
  The return value will be an object of any key=value pairs included with the configuration, as well as a separate
  values property that contains all the options supplied that were not in key=value format.
  If a uuid key is supplied it is used as the Document's UUID, otherwise the first supplied UUID is used.

  #### Parameters

  + raw: string

    The raw matched config string.
  + `Optional`options: object = {}

    Options forwarded to parseUuid.

  #### Returns [DocumentHTMLEmbedConfig](../interfaces/foundry.DocumentHTMLEmbedConfig.html)

  #### Example: Example configurations.

  ```
  TextEditor._parseEmbedConfig('uuid=Actor.xyz caption="Example Caption" cite=false');  
  // Returns: { uuid: "Actor.xyz", caption: "Example Caption", cite: false, values: [] }  
    
  TextEditor._parseEmbedConfig('Actor.xyz caption="Example Caption" inline');  
  // Returns: { uuid: "Actor.xyz", caption: "Example Caption", values: ["inline"] }
  Copy
  ```

### `Protected` `Static`\_primeCompendiums

* \_primeCompendiums(text: Text[], options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html)): Promise<void>

  `Protected`

  Scan for compendium UUIDs and retrieve Documents in batches so that they are in cache when enrichment proceeds.

  #### Parameters

  + text: Text[]

    The text nodes to scan.
  + `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.html) = {}

    Options provided to customize text enrichment

  #### Returns Promise<void>

### `Protected` `Static`\_replaceTextContent

* \_replaceTextContent(  
  Â Â Â Â text: Text[],  
  Â Â Â Â rgx: RegExp,  
  Â Â Â Â func: [TextContentReplacer](../types/foundry.TextContentReplacer.html),  
  Â Â Â Â options?: [TextReplacementOptions](../interfaces/foundry.TextReplacementOptions.html),  
  ): boolean

  `Protected`

  Facilitate the replacement of text node content using a matching regex rule and a provided replacement function.

  #### Parameters

  + text: Text[]

    The text nodes to match and replace.
  + rgx: RegExp

    The provided regular expression for matching and replacement
  + func: [TextContentReplacer](../types/foundry.TextContentReplacer.html)

    The replacement function
  + `Optional`options: [TextReplacementOptions](../interfaces/foundry.TextReplacementOptions.html) = {}

    Options to configure text replacement behavior.

  #### Returns boolean

  Whether a replacement was made.