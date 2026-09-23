---
title: "ApplicationConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.types.ApplicationConfiguration.html"
category: "interfaces"
---

# Interface ApplicationConfiguration

interface ApplicationConfiguration {  
Â Â Â Â [actions](#actions): Record<  
Â Â Â Â Â Â Â Â string,  
Â Â Â Â Â Â Â Â | [ApplicationClickAction](../types/foundry.applications.types.ApplicationClickAction.md)  
Â Â Â Â Â Â Â Â | { buttons: number[]; handler: [ApplicationClickAction](../types/foundry.applications.types.ApplicationClickAction.md) },  
Â Â Â Â >;  
Â Â Â Â [classes](#classes): string[];  
Â Â Â Â [form](#form)?: [ApplicationFormConfiguration](foundry.applications.types.ApplicationFormConfiguration.md);  
Â Â Â Â [id](#id): string;  
Â Â Â Â [position](#position): Partial<[ApplicationPosition](foundry.applications.types.ApplicationPosition.md)>;  
Â Â Â Â [tag](#tag): string;  
Â Â Â Â [uniqueId](#uniqueid): string;  
Â Â Â Â [window](#window): [ApplicationWindowConfiguration](foundry.applications.types.ApplicationWindowConfiguration.md);  
}

##### Index

### Properties

[actions](#actions)
[classes](#classes)
[form?](#form)
[id](#id)
[position](#position)
[tag](#tag)
[uniqueId](#uniqueid)
[window](#window)

## Properties

### actions

actions: Record<  
Â Â Â Â string,  
Â Â Â Â | [ApplicationClickAction](../types/foundry.applications.types.ApplicationClickAction.md)  
Â Â Â Â | { buttons: number[]; handler: [ApplicationClickAction](../types/foundry.applications.types.ApplicationClickAction.md) },  
>

Click actions supported by the Application and their event handler
functions. A handler function can be defined directly which only
responds to left-click events. Otherwise, an object can be declared
containing both a handler function and an array of buttons which are
matched against the PointerEvent#button property.

### classes

classes: string[]

An array of CSS classes to apply to the Application

### `Optional`form

form?: [ApplicationFormConfiguration](foundry.applications.types.ApplicationFormConfiguration.md)

Configuration used if the application top-level element is a form or
dialog

### id

id: string

An HTML element identifier used for this Application instance

### position

position: Partial<[ApplicationPosition](foundry.applications.types.ApplicationPosition.md)>

Default positioning data for the application

### tag

tag: string

The HTMLElement tag type used for the outer Application frame

### uniqueId

uniqueId: string

A string discriminator substituted for {id} in the default
HTML element identifier for the class

### window

window: [ApplicationWindowConfiguration](foundry.applications.types.ApplicationWindowConfiguration.md)

Configuration of the window behaviors for this Application