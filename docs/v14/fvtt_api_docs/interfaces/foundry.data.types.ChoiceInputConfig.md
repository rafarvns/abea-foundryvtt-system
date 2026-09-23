---
title: "ChoiceInputConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types.ChoiceInputConfig.html"
category: "interfaces"
---

# Interface ChoiceInputConfig

interface ChoiceInputConfig {  
Â Â Â Â [choices](#choices):  
Â Â Â Â Â Â Â Â | any[]  
Â Â Â Â Â Â Â Â | Record<string | number, any>  
Â Â Â Â Â Â Â Â | (() => any[] | Record<string | number, any>);  
Â Â Â Â [labelAttr](#labelattr)?: string;  
Â Â Â Â [options](#options): FormSelectOption[];  
Â Â Â Â [valueAttr](#valueattr)?: string;  
}

##### Index

### Properties

[choices](#choices)
[labelAttr?](#labelattr)
[options](#options)
[valueAttr?](#valueattr)

## Properties

### choices

choices:  
Â Â Â Â | any[]  
Â Â Â Â | Record<string | number, any>  
Â Â Â Â | (() => any[] | Record<string | number, any>)

### `Optional`labelAttr

labelAttr?: string

### options

options: FormSelectOption[]

### `Optional`valueAttr

valueAttr?: string