---
title: "ApplicationV1Options | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.ApplicationV1Options.html"
category: "interfaces"
---

# Interface ApplicationV1Options

Configuration options which control how the application is rendered. Application subclasses may add additional
supported options, but these base configurations are supported for all Applications. The values passed to the
constructor are combined with the defaultOptions defined at the class level.

interface ApplicationV1Options {  
Â Â Â Â [baseApplication](#baseapplication)?: string | null;  
Â Â Â Â [classes](#classes)?: string[];  
Â Â Â Â [dragDrop](#dragdrop): [DragDropConfiguration](foundry.DragDropConfiguration.md)[];  
Â Â Â Â [filters](#filters): [SearchFilterConfiguration](foundry.SearchFilterConfiguration.md)[];  
Â Â Â Â [height](#height)?: string | number | null;  
Â Â Â Â [id](#id)?: string;  
Â Â Â Â [left](#left)?: number | null;  
Â Â Â Â [minimizable](#minimizable)?: boolean;  
Â Â Â Â [popOut](#popout)?: boolean;  
Â Â Â Â [resizable](#resizable)?: boolean;  
Â Â Â Â [scale](#scale)?: number | null;  
Â Â Â Â [scrollY](#scrolly)?: string[];  
Â Â Â Â [tabs](#tabs)?: [TabsConfiguration](foundry.TabsConfiguration.md)[];  
Â Â Â Â [template](#template)?: string | null;  
Â Â Â Â [title](#title)?: string;  
Â Â Â Â [top](#top)?: number | null;  
Â Â Â Â [width](#width)?: number | null;  
}

##### Index

### Properties

[baseApplication?](#baseapplication)
[classes?](#classes)
[dragDrop](#dragdrop)
[filters](#filters)
[height?](#height)
[id?](#id)
[left?](#left)
[minimizable?](#minimizable)
[popOut?](#popout)
[resizable?](#resizable)
[scale?](#scale)
[scrollY?](#scrolly)
[tabs?](#tabs)
[template?](#template)
[title?](#title)
[top?](#top)
[width?](#width)

## Properties

### `Optional`baseApplication

baseApplication?: string | null

A named "base application" which generates an additional hook

### `Optional`classes

classes?: string[]

An array of CSS string classes to apply to the rendered HTML

### dragDrop

dragDrop: [DragDropConfiguration](foundry.DragDropConfiguration.md)[]

An array of CSS selectors for configuring the application's
[foundry.applications.ux.DragDrop](../classes/foundry.applications.ux.DragDrop.md) behaviour.

### filters

filters: [SearchFilterConfiguration](foundry.SearchFilterConfiguration.md)[]

An array of
[foundry.applications.ux.SearchFilter](../classes/foundry.applications.ux.SearchFilter.md) configuration objects.

### `Optional`height

height?: string | number | null

The default pixel height for the rendered HTML

### `Optional`id

id?: string

The default CSS id to assign to the rendered HTML

### `Optional`left

left?: number | null

The default offset-left position for the rendered HTML

### `Optional`minimizable

minimizable?: boolean

Whether the rendered application can be minimized (popOut only)

### `Optional`popOut

popOut?: boolean

Whether to display the application as a pop-out container

### `Optional`resizable

resizable?: boolean

Whether the rendered application can be drag-resized (popOut only)

### `Optional`scale

scale?: number | null

A transformation scale for the rendered HTML

### `Optional`scrollY

scrollY?: string[]

A list of unique CSS selectors which target containers that should have their
vertical scroll positions preserved during a re-render.

### `Optional`tabs

tabs?: [TabsConfiguration](foundry.TabsConfiguration.md)[]

An array of tabbed container configurations which should be enabled for the
application.

### `Optional`template

template?: string | null

The default HTML template path to render for this Application

### `Optional`title

title?: string

A default window title string (popOut only)

### `Optional`top

top?: number | null

The default offset-top position for the rendered HTML

### `Optional`width

width?: number | null

The default pixel width for the rendered HTML