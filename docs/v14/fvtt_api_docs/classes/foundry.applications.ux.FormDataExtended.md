---
title: "FormDataExtended | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ux.FormDataExtended.html"
category: "classes"
---

# Class FormDataExtended

An extension of the native FormData implementation.

This class functions the same way that the default FormData does, but it is more opinionated about how
input fields of certain types should be evaluated and handled.

It also adds support for certain Foundry VTT specific concepts including:
Support for defined data types and type conversion
Support for ProseMirror editors
Support for editable HTML elements

#### Param: form

The form being processed

#### Param: options

Options which configure form processing

#### Param: options.editors

A record of ProseMirror editor metadata objects, indexed by
their update key

#### Param: options.dtypes

A mapping of data types for form fields

#### Param: options.disabled

Include disabled fields?

#### Param: options.readonly

Include readonly fields?

#### Hierarchy

* FormData
  + FormDataExtended

##### Index

### Properties

[dtypes](#dtypes)
[editors](#editors)

### Methods

[append](#append)
[process](#process)
[set](#set)

## Properties

### dtypes

dtypes: { string: any }

A mapping of data types requested for each form field.

### editors

editors: Record<string, object>

A record of editors which are linked to this form.

## Methods

### append

* append(name: string, value: any): void

  Append values to the form data, adding them to an array.

  #### Parameters

  + name: string

    The field name to append to the form
  + value: any

    The value to append to the form data

  #### Returns void

  Overrides FormData.append

### process

* process(form: HTMLFormElement, options: object): void

  Process the HTML form element to populate the FormData instance.

  #### Parameters

  + form: HTMLFormElement

    The HTML form being processed
  + options: object

    Options forwarded from the constructor

  #### Returns void

### set

* set(name: string, value: any): void

  Assign a value to the FormData instance which always contains JSON strings.
  Also assign the cast value in its preferred data type to the parsed object representation of the form data.

  #### Parameters

  + name: string

    The field name
  + value: any

    The raw extracted value from the field

  #### Returns void

  Overrides FormData.set