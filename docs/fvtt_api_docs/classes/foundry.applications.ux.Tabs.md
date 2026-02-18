---
title: "Tabs | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.ux.Tabs.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [ux](../modules/foundry.applications.ux.html)
* [Tabs](foundry.applications.ux.Tabs.html)

# Class Tabs

A controller class for managing tabbed navigation within an Application instance.

#### See

[foundry.applications.api.ApplicationV2](foundry.applications.api.ApplicationV2.html)

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

[constructor](foundry.applications.ux.Tabs.html#constructor)

### Properties

[\_content](foundry.applications.ux.Tabs.html#_content)
[\_contentSelector](foundry.applications.ux.Tabs.html#_contentselector)
[\_nav](foundry.applications.ux.Tabs.html#_nav)
[\_navSelector](foundry.applications.ux.Tabs.html#_navselector)
[active](foundry.applications.ux.Tabs.html#active)
[callback](foundry.applications.ux.Tabs.html#callback)
[group](foundry.applications.ux.Tabs.html#group)

### Methods

[activate](foundry.applications.ux.Tabs.html#activate)
[bind](foundry.applications.ux.Tabs.html#bind)
[\_onClickNav](foundry.applications.ux.Tabs.html#_onclicknav)

## Constructors

### constructor

* new Tabs(config?: [TabsConfiguration](../interfaces/foundry.TabsConfiguration.html)): [Tabs](foundry.applications.ux.Tabs.html)

  #### Parameters

  + config: [TabsConfiguration](../interfaces/foundry.TabsConfiguration.html) = {}

    The Tabs Configuration to use for this tabbed container

  #### Returns [Tabs](foundry.applications.ux.Tabs.html)

## Properties

### `Internal`\_content

\_content: null | HTMLElement = null

A reference to the HTML container element of the tab content

### `Internal`\_contentSelector

\_contentSelector: string

The CSS selector used to target the tab content element

### `Internal`\_nav

\_nav: null | HTMLElement = null

A reference to the HTML navigation element the tab controller is bound to

### `Internal`\_navSelector

\_navSelector: string

The CSS selector used to target the tab navigation element

### active

active: string

The value of the active tab

### callback

callback: null | Function

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