---
title: "TooltipManager | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.interaction.TooltipManager.html"
category: "classes"
---

# Class TooltipManager

A singleton Tooltip Manager class responsible for rendering and positioning a dynamic tooltip element which is
accessible as `game.tooltip`.

#### See

[foundry.Game#tooltip](foundry.Game.md#tooltip)

#### Example: API Usage

```
game.tooltip.activate(htmlElement, {text: "Some tooltip text", direction: "UP"});  
game.tooltip.deactivate();
Copy
```

#### Example: HTML Usage

```
<span data-tooltip="Some Tooltip" data-tooltip-direction="LEFT">I have a tooltip</span>  
<ol data-tooltip-direction="RIGHT">  
  <li data-tooltip="The First One">One</li>  
  <li data-tooltip="The Second One">Two</li>  
  <li data-tooltip="The Third One">Three</li>  
</ol>
Copy
```

##### Index

### Properties

[element](#element)
[tooltip](#tooltip)
[LOCKED\_TOOLTIP\_BUFFER\_PX](#locked_tooltip_buffer_px)
[TOOLTIP\_ACTIVATION\_MS](#tooltip_activation_ms)
[TOOLTIP\_DIRECTIONS](#tooltip_directions)
[TOOLTIP\_MARGIN\_PX](#tooltip_margin_px)

### Accessors

[implementation](#implementation)

### Methods

[activate](#activate)
[activateListeners](#activatelisteners)
[clearPending](#clearpending)
[createLockedTooltip](#createlockedtooltip)
[deactivate](#deactivate)
[dismissLockedTooltip](#dismisslockedtooltip)
[dismissLockedTooltips](#dismisslockedtooltips)
[lockTooltip](#locktooltip)
[\_determineDirection](#_determinedirection)
[\_onLockedTooltipDismiss](#_onlockedtooltipdismiss)
[\_onLockTooltip](#_onlocktooltip)
[\_setAnchor](#_setanchor)
[\_setStyle](#_setstyle)

## Properties

### element

element: HTMLElement | null = null

A reference to the HTML element which is currently tool-tipped, if any.

### tooltip

tooltip: HTMLElement = ...

A cached reference to the global tooltip element

### `Static`LOCKED\_TOOLTIP\_BUFFER\_PX

LOCKED\_TOOLTIP\_BUFFER\_PX: number = 50

The number of pixels buffer around a locked tooltip zone before they should be dismissed.

### `Static`TOOLTIP\_ACTIVATION\_MS

TOOLTIP\_ACTIVATION\_MS: number = 500

The number of milliseconds delay which activates a tooltip on a "long hover".

### `Static`TOOLTIP\_DIRECTIONS

TOOLTIP\_DIRECTIONS: {  
Â Â Â Â CENTER: string;  
Â Â Â Â DOWN: string;  
Â Â Â Â LEFT: string;  
Â Â Â Â RIGHT: string;  
Â Â Â Â UP: string;  
} = ...

The directions in which a tooltip can extend, relative to its tool-tipped element.

### `Static`TOOLTIP\_MARGIN\_PX

TOOLTIP\_MARGIN\_PX: number = 5

An amount of margin which is used to offset tooltips from their anchored element.

## Accessors

### `Static`implementation

* get implementation(): typeof TooltipManager

  Retrieve the configured TooltipManager implementation.

  #### Returns typeof TooltipManager

## Methods

### activate

* activate(  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â cssClass?: string;  
  Â Â Â Â Â Â Â Â direction?: "CENTER" | "LEFT" | "RIGHT" | "UP" | "DOWN";  
  Â Â Â Â Â Â Â Â html?: string | HTMLElement;  
  Â Â Â Â Â Â Â Â locked?: boolean;  
  Â Â Â Â Â Â Â Â text?: string;  
  Â Â Â Â },  
  ): void

  Activate the tooltip for a hovered HTML element which defines a tooltip localization key.

  #### Parameters

  + element: HTMLElement

    The HTML element being hovered.
  + `Optional`options: {  
    Â Â Â Â cssClass?: string;  
    Â Â Â Â direction?: "CENTER" | "LEFT" | "RIGHT" | "UP" | "DOWN";  
    Â Â Â Â html?: string | HTMLElement;  
    Â Â Â Â locked?: boolean;  
    Â Â Â Â text?: string;  
    } = {}

    Additional options which can override tooltip behavior.

    - ##### `Optional`cssClass?: string

      An optional, space-separated list of CSS classes to apply to the activated
      tooltip. If this is not provided, the CSS classes are acquired from the
      `data-tooltip-class` attribute of the element or one of its parents.
    - ##### `Optional`direction?: "CENTER" | "LEFT" | "RIGHT" | "UP" | "DOWN"

      An explicit tooltip expansion direction. If this
      is not provided, the direction is acquired from the `data-tooltip-direction`
      attribute of the element or one of its parents.
    - ##### `Optional`html?: string | HTMLElement

      Explicit HTML to inject into the tooltip rather than using
      tooltip text. If passed as a string, the HTML string is cleaned with
      [foundry.utils.cleanHTML](../functions/foundry.utils.cleanHTML.md). An explicit HTML string may also
      be set with the `data-tooltip-html` attribute on the element.
    - ##### `Optional`locked?: boolean

      An optional boolean to lock the tooltip after creation. Defaults to false.
    - ##### `Optional`text?: string

      Explicit tooltip text to display. If this is not provided the tooltip text is
      acquired from the element's `data-tooltip-text` attribute if present and
      otherwise from its `data-tooltip` attribute. The `data-tooltip` text will be
      automatically localized. If `data-tooltip` is not a localization string, the
      text is rendered as HTML (cleaned). Both `options.text` and `data-tooltip-text`
      do not support HTML. It is not recommended to use `data-tooltip` for plain text
      and HTML as it could cause an unintentional localization. Instead use
      `data-tooltip-text` and `data-tooltip-html`, respectively.

  #### Returns void

### activateListeners

* activateListeners(  
  Â Â Â Â document: Document,  
  Â Â Â Â \_\_namedParameters?: { \_deprecated?: boolean },  
  ): void

  Activate interactivity in the given document by listening for hover events on HTML elements which have a
  data-tooltip defined.

  #### Parameters

  + document: Document

    The document to bind to.
  + \_\_namedParameters: { \_deprecated?: boolean } = {}

  #### Returns void

### clearPending

* clearPending(): void

  `Internal`

  Clear any pending activation workflow.

  #### Returns void

### createLockedTooltip

* createLockedTooltip(  
  Â Â Â Â position: { bottom: string; left: string; right: string; top: string },  
  Â Â Â Â text: string,  
  Â Â Â Â options?: { cssClass?: string },  
  ): HTMLElement

  Create a locked tooltip at the given position.

  #### Parameters

  + position: { bottom: string; left: string; right: string; top: string }

    A position object with coordinates for where the tooltip should be placed

    - ##### bottom: string

      Explicit bottom position for the tooltip
    - ##### left: string

      Explicit left position for the tooltip
    - ##### right: string

      Explicit right position for the tooltip
    - ##### top: string

      Explicit top position for the tooltip
  + text: string

    Explicit tooltip text or HTML to display.
  + `Optional`options: { cssClass?: string } = {}

    Additional options which can override tooltip behavior.

    - ##### `Optional`cssClass?: string

      An optional, space-separated list of CSS classes to apply to the activated
      tooltip.

  #### Returns HTMLElement

### deactivate

* deactivate(): void

  Deactivate the tooltip from a previously hovered HTML element.

  #### Returns void

### dismissLockedTooltip

* dismissLockedTooltip(element: HTMLElement): void

  Dismiss a given locked tooltip.

  #### Parameters

  + element: HTMLElement

    The locked tooltip to dismiss.

  #### Returns void

### dismissLockedTooltips

* dismissLockedTooltips(): void

  Dismiss the set of active locked tooltips.

  #### Returns void

### lockTooltip

* lockTooltip(): HTMLElement

  Lock the current tooltip.

  #### Returns HTMLElement

### `Protected`\_determineDirection

* \_determineDirection(): any

  `Protected`

  If an explicit tooltip expansion direction was not specified, figure out a valid direction based on the bounds
  of the target element and the screen.

  #### Returns any

### `Protected`\_onLockedTooltipDismiss

* \_onLockedTooltipDismiss(event: MouseEvent): void

  `Protected`

  Handle dismissing a locked tooltip.

  #### Parameters

  + event: MouseEvent

    The click event.

  #### Returns void

### `Protected`\_onLockTooltip

* \_onLockTooltip(event: MouseEvent): void

  `Protected`

  Handle a request to lock the current tooltip.

  #### Parameters

  + event: MouseEvent

    The click event.

  #### Returns void

### `Protected`\_setAnchor

* \_setAnchor(direction: "CENTER" | "LEFT" | "RIGHT" | "UP" | "DOWN"): void

  `Protected`

  Set tooltip position relative to an HTML element using an explicitly provided data-tooltip-direction.

  #### Parameters

  + direction: "CENTER" | "LEFT" | "RIGHT" | "UP" | "DOWN"

    The tooltip expansion direction specified by the element or a parent element.

  #### Returns void

### `Protected`\_setStyle

* \_setStyle(position?: object): void

  `Protected`

  Apply inline styling rules to the tooltip for positioning and text alignment.

  #### Parameters

  + `Optional`position: object = {}

    An object of positioning data, supporting top, right, bottom, left, and textAlign

  #### Returns void