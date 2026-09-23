---
title: "SearchFilter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ux.SearchFilter.html"
category: "classes"
---

# Class SearchFilter

A controller class for managing a text input widget that filters the contents of some other UI element.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_input](#_input)
[callback](#callback)
[query](#query)
[rgx](#rgx)
[OPERATORS](#operators)

### Methods

[bind](#bind)
[filter](#filter)
[unbind](#unbind)
[cleanQuery](#cleanquery)
[evaluateFilter](#evaluatefilter)
[testQuery](#testquery)

## Constructors

### constructor

* new SearchFilter(config?: [SearchFilterConfiguration](../interfaces/foundry.SearchFilterConfiguration.md)): SearchFilter

  #### Parameters

  + config: [SearchFilterConfiguration](../interfaces/foundry.SearchFilterConfiguration.md) = {}

    Configuration object for initializing the SearchFilter.

  #### Returns SearchFilter

## Properties

### `Internal`\_input

\_input: HTMLElement | null = null

A reference to the HTML navigation element the tab controller is bound to

### callback

callback: [SearchFilterCallback](../types/foundry.SearchFilterCallback.md) | null

A callback function to trigger when the tab is changed

### query

query: string

The value of the current query string

### rgx

rgx: RegExp

The regular expression corresponding to the query that should be matched against

### `Static`OPERATORS

OPERATORS: Readonly<  
Â Â Â Â {  
Â Â Â Â Â Â Â Â BETWEEN: "between";  
Â Â Â Â Â Â Â Â CONTAINS: "contains";  
Â Â Â Â Â Â Â Â ENDS\_WITH: "ends\_with";  
Â Â Â Â Â Â Â Â EQUALS: "equals";  
Â Â Â Â Â Â Â Â GREATER\_THAN: "gt";  
Â Â Â Â Â Â Â Â GREATER\_THAN\_EQUAL: "gte";  
Â Â Â Â Â Â Â Â IS\_EMPTY: "is\_empty";  
Â Â Â Â Â Â Â Â LESS\_THAN: "lt";  
Â Â Â Â Â Â Â Â LESS\_THAN\_EQUAL: "lte";  
Â Â Â Â Â Â Â Â STARTS\_WITH: "starts\_with";  
Â Â Â Â },  
> = ...

The allowed Filter Operators which can be used to define a search filter

## Methods

### bind

* bind(html: HTMLElement): void

  Bind the SearchFilter controller to an HTML application

  #### Parameters

  + html: HTMLElement

  #### Returns void

### filter

* filter(event: KeyboardEvent | null, query: string): void

  Perform a filtering of the content by invoking the callback function

  #### Parameters

  + event: KeyboardEvent | null

    The triggering keyboard event
  + query: string

    The input search string

  #### Returns void

### unbind

* unbind(): void

  Release all bound HTML elements and reset the query.

  #### Returns void

### `Static`cleanQuery

* cleanQuery(query: string): string

  Clean a query term to standardize it for matching.
  See <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize>

  #### Parameters

  + query: string

    An input string which may contain leading/trailing spaces or diacritics

  #### Returns string

  A cleaned string of ASCII characters for comparison

### `Static`evaluateFilter

* evaluateFilter(obj: object, filter: [FieldFilter](../interfaces/foundry.FieldFilter.md)): boolean

  Test whether a given object matches a provided filter

  #### Parameters

  + obj: object

    An object to test against
  + filter: [FieldFilter](../interfaces/foundry.FieldFilter.md)

    The filter to test

  #### Returns boolean

  Whether the object matches the filter

### `Static`testQuery

* testQuery(rgx: RegExp, value: string): boolean

  A helper method to test a value against a precomposed regex pattern.

  #### Parameters

  + rgx: RegExp

    The regular expression to test
  + value: string

    The value to test against

  #### Returns boolean

  Does the query match?