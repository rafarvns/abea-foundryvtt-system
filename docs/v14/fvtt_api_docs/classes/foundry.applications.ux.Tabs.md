---
title: "Tabs | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ux.Tabs.html"
category: "classes"
---

# Class Tabs

A controller class for managing tabbed navigation within an Application instance.

#### See

[foundry.applications.api.ApplicationV2](foundry.applications.api.ApplicationV2.md)

#### Example: Configure tab-control for a set of HTML elements

```
<!-- Example HTML -->  
<nav class="tabs" data-group="primary-tabs">  
  <a class="item" data-tab="tab1" data-group="primary-tabs">Tab 1</li>  
  <a class="item" data-tab="tab2" data-group="primary-tabs">Tab 2</li>  
</nav>  
  
<section class="content">  
  <div class="tab" data-tab="tab1" data-group="primary-tabs">Content 1</div>  
  <div class="tab" data-tab="tab2" data-group="primary-tabs">Content 2</div>  
</section>
Copy
```

Activate tab control in JavaScript

```
const tabs = new foundry.applications.ux.Tabs({navSelector: ".tabs", contentSelector: ".content", initial: "tab1"});  
tabs.bind(html);
Copy
```

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_content](#_content)
[\_contentSelector](#_contentselector)
[\_nav](#_nav)
[\_navSelector](#_navselector)
[active](#active)
[callback](#callback)
[group](#group)

### Methods

[activate](#activate)
[bind](#bind)
[\_onClickNav](#_onclicknav)

## Constructors

### constructor

* new Tabs(config?: [TabsConfiguration](../interfaces/foundry.TabsConfiguration.md)): Tabs

  #### Parameters

  + config: [TabsConfiguration](../interfaces/foundry.TabsConfiguration.md) = {}

    The Tabs Configuration to use for this tabbed container

  #### Returns Tabs

## Properties

### `Internal`\_content

\_content: HTMLElement | null = null

A reference to the HTML container element of the tab content

### `Internal`\_contentSelector

\_contentSelector: string

The CSS selector used to target the tab content element

### `Internal`\_nav

\_nav: HTMLElement | null = null

A reference to the HTML navigation element the tab controller is bound to

### `Internal`\_navSelector

\_navSelector: string

The CSS selector used to target the tab navigation element

### active

active: string

The value of the active tab

### callback

callback: Function | null

A callback function to trigger when the tab is changed

### group

group: string

The name of the tabs group

## Methods

### activate

* activate(tabName: string, triggerCallback?: boolean): void

  Activate a new tab by name

  #### Parameters

  + tabName: string
  + triggerCallback: boolean = {}

  #### Returns void

### bind

* bind(html: HTMLElement): void

  Bind the Tabs controller to an HTML application

  #### Parameters

  + html: HTMLElement

  #### Returns void

### `Protected`\_onClickNav

* \_onClickNav(event: PointerEvent): void

  `Protected`

  Handle click events on the tab navigation entries

  #### Parameters

  + event: PointerEvent

    A left click event

  #### Returns void