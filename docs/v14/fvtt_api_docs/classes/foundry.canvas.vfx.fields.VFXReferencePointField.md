---
title: "VFXReferencePointField | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.vfx.fields.VFXReferencePointField.html"
category: "classes"
---

# Class VFXReferencePointField

A specialized subclass of VFXReferenceObjectField that specifically deals with points.

#### Example: Resolve a relative point into an absolute coordinate.

```
const point = new VFXReferencePointField();  
const unresolvedValue = {reference: "target", deltas: {x: -50, y: 50}};  
const references = {target: tokenDocument}; // Suppose tokenDocument.x is 1000 and tokenDocument.y is 2000  
const resolvedObject = point.resolve(unresolvedValue, references); // {x: 950, y: 2050}
Copy
```

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.vfx.fields.VFXReferencePointField))

* [VFXReferenceObjectField](foundry.canvas.vfx.fields.VFXReferenceObjectField.md)
  + VFXReferencePointField

##### Index

### Properties

[hierarchical](#hierarchical)
[recursive](#recursive)
[referenceField](#referencefield)

### Accessors

[hasFormSupport](#hasformsupport)
[\_defaults](#_defaults)

### Methods

[resolve](#resolve)
[isReference](#isreference)

## Properties

### `Static`hierarchical

hierarchical: boolean = false

Whether this field defines part of a Document/Embedded Document hierarchy.

Inherited from [VFXReferenceObjectField](foundry.canvas.vfx.fields.VFXReferenceObjectField.md).[hierarchical](foundry.canvas.vfx.fields.VFXReferenceObjectField.md#hierarchical)

### `Static`recursive

recursive: boolean = false

Does this field type contain other fields in a recursive structure?
Examples of recursive fields are SchemaField, ArrayField, or TypeDataField
Examples of non-recursive fields are StringField, NumberField, or ObjectField

Inherited from [VFXReferenceObjectField](foundry.canvas.vfx.fields.VFXReferenceObjectField.md).[recursive](foundry.canvas.vfx.fields.VFXReferenceObjectField.md#recursive)

### `Static`referenceField

referenceField: [SchemaField](foundry.data.fields.SchemaField.md) = ...

Inherited from [VFXReferenceObjectField](foundry.canvas.vfx.fields.VFXReferenceObjectField.md).[referenceField](foundry.canvas.vfx.fields.VFXReferenceObjectField.md#referencefield)

## Accessors

### `Static`hasFormSupport

* get hasFormSupport(): boolean

  Does this form field class have defined form support?

  #### Returns boolean

  Inherited from VFXReferenceObjectField.hasFormSupport

### `Protected` `Static`\_defaults

* get \_defaults(): [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

  `Protected`

  Default parameters for this field type

  #### Returns [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

  Inherited from VFXReferenceObjectField.\_defaults

## Methods

### resolve

* resolve(value: any, references: any): any

  #### Parameters

  + value: any
  + references: any

  #### Returns any

  Inherited from [VFXReferenceObjectField](foundry.canvas.vfx.fields.VFXReferenceObjectField.md).[resolve](foundry.canvas.vfx.fields.VFXReferenceObjectField.md#resolve)

### `Static`isReference

* isReference(value: any): boolean

  Test whether a value is a reference.

  #### Parameters

  + value: any

  #### Returns boolean

  Inherited from [VFXReferenceObjectField](foundry.canvas.vfx.fields.VFXReferenceObjectField.md).[isReference](foundry.canvas.vfx.fields.VFXReferenceObjectField.md#isreference)