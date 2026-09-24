---
title: "SearchFilterConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.SearchFilterConfiguration.html"
category: "interfaces"
---

# Interface SearchFilterConfiguration

Options which customize the behavior of the filter

interface SearchFilterConfiguration {  
Â Â Â Â [callback](#callback): [SearchFilterCallback](../types/foundry.SearchFilterCallback.md);  
Â Â Â Â [contentSelector](#contentselector): string;  
Â Â Â Â [delay](#delay)?: number;  
Â Â Â Â [initial](#initial)?: string;  
Â Â Â Â [inputSelector](#inputselector): string;  
}

##### Index

### Properties

[callback](#callback)
[contentSelector](#contentselector)
[delay?](#delay)
[initial?](#initial)
[inputSelector](#inputselector)

## Properties

### callback

callback: [SearchFilterCallback](../types/foundry.SearchFilterCallback.md)

A callback function which executes when the filter changes.

### contentSelector

contentSelector: string

The CSS selector used to target the content container for these tabs.

### `Optional`delay

delay?: number

The number of milliseconds to wait for text input before processing.
Default: `200`.

### `Optional`initial

initial?: string

The initial value of the search query.

### inputSelector

inputSelector: string

The CSS selector used to target the text input element.