---
title: "SettingConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.SettingConfig.html"
category: "interfaces"
---

# Interface SettingConfig

A Client Setting

interface SettingConfig {  
Â Â Â Â [choices](#choices)?: Object;  
Â Â Â Â [config](#config): boolean;  
Â Â Â Â [default](#default)?: any;  
Â Â Â Â [hint](#hint): string;  
Â Â Â Â [id](#id)?: string;  
Â Â Â Â [input](#input)?: [CustomFormInput](../types/foundry.applications.fields.CustomFormInput.md);  
Â Â Â Â [key](#key): string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [namespace](#namespace): string;  
Â Â Â Â [onChange](#onchange)?: Function;  
Â Â Â Â [range](#range)?: Object;  
Â Â Â Â [scope](#scope): "client" | "world" | "user";  
Â Â Â Â [type](#type): [BuiltinType](../types/foundry.types.BuiltinType.md) | typeof [DataModel](../classes/foundry.abstract.DataModel.md) | [DataField](../classes/foundry.data.fields.DataField.md);  
}

##### Index

### Properties

[choices?](#choices)
[config](#config)
[default?](#default)
[hint](#hint)
[id?](#id)
[input?](#input)
[key](#key)
[name](#name)
[namespace](#namespace)
[onChange?](#onchange)
[range?](#range)
[scope](#scope)
[type](#type)

## Properties

### `Optional`choices

choices?: Object

For string Types, defines the allowable values

### config

config: boolean

Indicates if this Setting should render in the Config application

### `Optional`default

default?: any

The default value

### hint

hint: string

An additional human-readable hint

### `Optional`id

id?: string

The combination of `{namespace}.{key}`

### `Optional`input

input?: [CustomFormInput](../types/foundry.applications.fields.CustomFormInput.md)

A custom form field input used in conjunction with a DataField type

### key

key: string

A unique machine-readable id for the setting

### name

name: string

The human-readable name

### namespace

namespace: string

The namespace the setting belongs to

### `Optional`onChange

onChange?: Function

Executes when the value of this Setting changes

### `Optional`range

range?: Object

For numeric Types, defines the allowable range

### scope

scope: "client" | "world" | "user"

The scope the Setting is stored in, either World, Client, or User.

### type

type: [BuiltinType](../types/foundry.types.BuiltinType.md) | typeof [DataModel](../classes/foundry.abstract.DataModel.md) | [DataField](../classes/foundry.data.fields.DataField.md)

The type of data stored by this Setting