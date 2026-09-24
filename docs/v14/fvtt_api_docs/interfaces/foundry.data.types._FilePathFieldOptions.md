---
title: "_FilePathFieldOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types._FilePathFieldOptions.html"
category: "interfaces"
---

# Interface \_FilePathFieldOptions

interface \_FilePathFieldOptions {  
Â Â Â Â [base64](#base64)?: boolean;  
Â Â Â Â [categories](#categories)?: string[];  
Â Â Â Â [initial](#initial)?: object;  
Â Â Â Â [virtual](#virtual)?: boolean;  
Â Â Â Â [wildcard](#wildcard)?: boolean;  
}

##### Index

### Properties

[base64?](#base64)
[categories?](#categories)
[initial?](#initial)
[virtual?](#virtual)
[wildcard?](#wildcard)

## Properties

### `Optional`base64

base64?: boolean

Is embedded base64 data supported in lieu of a file path?

### `Optional`categories

categories?: string[]

A set of categories in [CONST.FILE\_CATEGORIES](../variables/CONST.FILE_CATEGORIES.md) which this field supports

### `Optional`initial

initial?: object

The initial values of the fields

### `Optional`virtual

virtual?: boolean

Does the file path field allow specifying a virtual file path which must begin
with the "#" character?

### `Optional`wildcard

wildcard?: boolean

Does this file path field allow wildcard characters?