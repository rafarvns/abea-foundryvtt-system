---
title: "VFXReferenceObjectField | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.vfx.fields.VFXReferenceObjectField.html"
category: "classes"
---

# Class VFXReferenceObjectField<ValueType>

A subclass of VFXReferenceField which is used to target an entire object.
This allows applying deltas to multiple properties of that object.

#### Template: ValueType

#### Example

```
const dimensions = new VFXReferenceObjectField(new SchemaField({  
  width: new NumberField(),  
  height: new NumberField()  
}));  
const unresolvedValue = {reference: "target", deltas: {width: 1, height: -1}};  
const references = {target: tokenDocument}; // Suppose tokenDocument width=4 and tokenDocument height=4  
const resolvedObject = dimensions.resolve(unresolvedValue, references); // {width: 5, height: 3}
Copy
```

#### Type Parameters

* ValueType extends object = any

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.vfx.fields.VFXReferenceObjectField))

* [VFXReferenceField](foundry.canvas.vfx.fields.VFXReferenceField.md)
  + VFXReferenceObjectField
    - [VFXReferencePointField](foundry.canvas.vfx.fields.VFXReferencePointField.md)

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

Inherited from [VFXReferenceField](foundry.canvas.vfx.fields.VFXReferenceField.md).[hierarchical](foundry.canvas.vfx.fields.VFXReferenceField.md#hierarchical)

### `Static`recursive

recursive: boolean = false

Does this field type contain other fields in a recursive structure?
Examples of recursive fields are SchemaField, ArrayField, or TypeDataField
Examples of non-recursive fields are StringField, NumberField, or ObjectField

Inherited from [VFXReferenceField](foundry.canvas.vfx.fields.VFXReferenceField.md).[recursive](foundry.canvas.vfx.fields.VFXReferenceField.md#recursive)

### `Static`referenceField

referenceField: [SchemaField](foundry.data.fields.SchemaField.md) = ...

Overrides [VFXReferenceField](foundry.canvas.vfx.fields.VFXReferenceField.md).[referenceField](foundry.canvas.vfx.fields.VFXReferenceField.md#referencefield)

## Accessors

### `Static`hasFormSupport

* get hasFormSupport(): boolean

  Does this form field class have defined form support?

  #### Returns boolean

  Inherited from VFXReferenceField.hasFormSupport

### `Protected` `Static`\_defaults

* get \_defaults(): [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

  `Protected`

  Default parameters for this field type

  #### Returns [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

  Inherited from VFXReferenceField.\_defaults

## Methods

### resolve

* resolve(value: any, references: any): any

  #### Parameters

  + value: any
  + references: any

  #### Returns any

  Inherited from [VFXReferenceField](foundry.canvas.vfx.fields.VFXReferenceField.md).[resolve](foundry.canvas.vfx.fields.VFXReferenceField.md#resolve)

### `Static`isReference

* isReference(value: any): boolean

  Test whether a value is a reference.

  #### Parameters

  + value: any

  #### Returns boolean

  Inherited from [VFXReferenceField](foundry.canvas.vfx.fields.VFXReferenceField.md).[isReference](foundry.canvas.vfx.fields.VFXReferenceField.md#isreference)