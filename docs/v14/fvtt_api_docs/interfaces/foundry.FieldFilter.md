---
title: "FieldFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.FieldFilter.html"
category: "interfaces"
---

# Interface FieldFilter

interface FieldFilter {  
Â Â Â Â [field](#field): string;  
Â Â Â Â [negate](#negate): boolean;  
Â Â Â Â [operator](#operator)?: string;  
Â Â Â Â [value](#value): any;  
}

##### Index

### Properties

[field](#field)
[negate](#negate)
[operator?](#operator)
[value](#value)

## Properties

### field

field: string

The dot-delimited path to the field being filtered

### negate

negate: boolean

Negate the filter, returning results which do NOT match
the filter criteria

### `Optional`operator

operator?: string

The search operator, from CONST.OPERATORS

### value

value: any

The value against which to test