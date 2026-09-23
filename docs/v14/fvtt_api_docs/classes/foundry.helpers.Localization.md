---
title: "Localization | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.Localization.html"
category: "classes"
---

# Class Localization

A helper class which assists with localization and string translation

#### Param: serverLanguage

The default language configuration setting for the server

##### Index

### Properties

[\_fallback](#_fallback)
[defaultModule](#defaultmodule)
[lang](#lang)
[translations](#translations)

### Accessors

[pluralRules](#pluralrules)

### Methods

[getListFormatter](#getlistformatter)
[has](#has)
[initialize](#initialize)
[localize](#localize)
[setLanguage](#setlanguage)
[sortObjects](#sortobjects)
[localizeDataModel](#localizedatamodel)
[localizeSchema](#localizeschema)

## Properties

### `Internal`\_fallback

\_fallback: Object

Fallback translations if the target keys are not found

### defaultModule

defaultModule: string

The package authorized to provide default language configurations

### lang

lang: string

The target language for localization

### translations

translations: Object

The translation dictionary for the target language

## Accessors

### pluralRules

* get pluralRules(): PluralRules

  A reusable PluralRules instance

  #### Returns PluralRules

## Methods

### getListFormatter

* getListFormatter(  
  Â Â Â Â options?: { style?: ListFormatStyle; type?: ListFormatType },  
  ): ListFormat

  Retrieve list formatter configured to the world's language setting.

  #### Parameters

  + `Optional`options: { style?: ListFormatStyle; type?: ListFormatType } = {}
    - ##### `Optional`style?: ListFormatStyle

      The list formatter style, either "long", "short", or "narrow".
    - ##### `Optional`type?: ListFormatType

      The list formatter type, either "conjunction",
      "disjunction", or "unit".

  #### Returns ListFormat

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat>

### has

* has(stringId: string, fallback?: boolean): boolean

  Return whether a certain string has a known translation defined.

  #### Parameters

  + stringId: string

    The string key being translated
  + `Optional`fallback: boolean = true

    Allow fallback translations to count?

  #### Returns boolean

### initialize

* initialize(): Promise<void>

  Initialize the Localization module
  Discover available language translations and apply the current language setting

  #### Returns Promise<void>

  A Promise which resolves once languages are initialized

### localize

* localize(stringId: string, data?: Record<string, unknown>): string

  Localize a string by drawing a translation from the available translations dictionary, if available. Variables can
  be included in the template enclosed in curly braces and will be substituted using those named keys.

  #### Parameters

  + stringId: string

    The string ID to translate
  + `Optional`data: Record<string, unknown>

    Data for variable formating: values can be anything meaningfully
    stringifiable.

  #### Returns string

  The translated string, if a translation was found, or else the inputted
  stringId

  #### Example: Localizing a simple string in JavaScript

  ```
  {  
    "MYMODULE.MYSTRING": "Hello, this is my module!"  
  }  
  _loc("MYMODULE.MYSTRING"); // Hello, this is my module!
  Copy
  ```

  #### Example: Localizing a formatted string in JavaScript

  ```
  {  
    "MYMODULE.GREETING": "Hello {name}, this is my module!"  
  }  
  _loc("MYMODULE.GREETING" {name: "Andrew"}); // Hello Andrew, this is my module!
  Copy
  ```

  #### Example: Localizing a simple string in Handlebars

  ```
  {{localize "MYMODULE.MYSTRING"}} <!-- Hello, this is my module! -->  

  Copy
  ```

  #### Example: Localizing a formatted string in Handlebars

  ```
  {{localize "MYMODULE.GREETING" name="Andrew"}} 
  Copy
  ```

### setLanguage

* setLanguage(lang: string): Promise<void>

  Set a language as the active translation source for the session

  #### Parameters

  + lang: string

    A language string in CONFIG.supportedLanguages

  #### Returns Promise<void>

  A Promise which resolves once the translations for the requested language are ready

### sortObjects

* sortObjects(objects: object[], key: string): object[]

  Sort an array of objects by a given key in a localization-aware manner.

  #### Parameters

  + objects: object[]

    The objects to sort, this array will be mutated.
  + key: string

    The key to sort the objects by. This can be provided in dot-notation.

  #### Returns object[]

### `Static`localizeDataModel

* localizeDataModel(  
  Â Â Â Â model: typeof [DataModel](foundry.abstract.DataModel.md),  
  Â Â Â Â options?: { prefixes?: string[]; prefixPath?: string },  
  ): void

  Perform one-time localization of the fields in a DataModel schema, translating their label and hint properties.

  #### Parameters

  + model: typeof [DataModel](foundry.abstract.DataModel.md)

    The DataModel class to localize
  + options: { prefixes?: string[]; prefixPath?: string } = {}

    Options which configure how localization is performed

    - ##### `Optional`prefixes?: string[]

      An array of localization key prefixes to use. If not specified, prefixes
      are learned from the DataModel.LOCALIZATION\_PREFIXES static property.
    - ##### `Optional`prefixPath?: string

      A localization path prefix used to prefix all field names within this
      model. This is generally not required.

  #### Returns void

  #### See

  [DataModel.LOCALIZATION\_PREFIXES](foundry.abstract.DataModel.md#localization_prefixes) for an example of the class definition and
  localization file structure.

### `Static`localizeSchema

* localizeSchema(  
  Â Â Â Â schema: SchemaField,  
  Â Â Â Â prefixes?: string[],  
  Â Â Â Â options?: { prefixPath?: string; seenFields?: Set<[DataField](foundry.data.fields.DataField.md)> },  
  ): void

  Localize the "label" and "hint" properties for all fields in a data schema.

  #### Parameters

  + schema: SchemaField
  + prefixes: string[] = []
  + `Optional`options: { prefixPath?: string; seenFields?: Set<[DataField](foundry.data.fields.DataField.md)> } = {}

  #### Returns void