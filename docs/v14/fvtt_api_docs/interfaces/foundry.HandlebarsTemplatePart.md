---
title: "HandlebarsTemplatePart | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.HandlebarsTemplatePart.html"
category: "interfaces"
---

# Interface HandlebarsTemplatePart

interface HandlebarsTemplatePart {  
Â Â Â Â [classes](#classes)?: string[];  
Â Â Â Â [forms](#forms)?: Record<string, [ApplicationFormConfiguration](foundry.applications.types.ApplicationFormConfiguration.md)>;  
Â Â Â Â [id](#id)?: string;  
Â Â Â Â [root](#root)?: boolean;  
Â Â Â Â [scrollable](#scrollable)?: string[];  
Â Â Â Â [template](#template): string;  
Â Â Â Â [templates](#templates)?: string[];  
}

##### Index

### Properties

[classes?](#classes)
[forms?](#forms)
[id?](#id)
[root?](#root)
[scrollable?](#scrollable)
[template](#template)
[templates?](#templates)

## Properties

### `Optional`classes

classes?: string[]

An array of CSS classes to apply to the top-level element of the
rendered part.

### `Optional`forms

forms?: Record<string, [ApplicationFormConfiguration](foundry.applications.types.ApplicationFormConfiguration.md)>

A registry of forms selectors and submission
handlers.

### `Optional`id

id?: string

A CSS id to assign to the top-level element of the rendered part.
This id string is automatically prefixed by the application id.

### `Optional`root

root?: boolean

Does this rendered contents of this template part replace the
children of the root element?

### `Optional`scrollable

scrollable?: string[]

An array of selectors within this part whose scroll positions should
be persisted during a re-render operation. A blank string is used
to denote that the root level of the part is scrollable.

### template

template: string

The template entry-point for the part

### `Optional`templates

templates?: string[]

An array of additional templates that are required to render the
part. If omitted, only the entry-point is inferred as required.