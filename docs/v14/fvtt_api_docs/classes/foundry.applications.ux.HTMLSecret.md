---
title: "HTMLSecret | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ux.HTMLSecret.html"
category: "classes"
---

# Class HTMLSecret

A composable class for managing functionality for secret blocks within DocumentSheets.

#### See

[foundry.applications.api.DocumentSheet](foundry.applications.api.DocumentSheetV2.md)

#### Example: Activate secret revealing functionality within a certain block of content.

```
const secrets = new HTMLSecret({  
  selector: "section.secret[id]",  
  callbacks: {  
    content: this._getSecretContent.bind(this),  
    update: this._updateSecret.bind(this)  
  }  
});  
secrets.bind(html);
Copy
```

##### Index

### Constructors

[constructor](#constructor)

### Methods

[bind](#bind)
[\_onToggleSecret](#_ontogglesecret)

## Constructors

### constructor

* new HTMLSecret(config?: [HTMLSecretConfiguration](../interfaces/foundry.HTMLSecretConfiguration.md)): HTMLSecret

  #### Parameters

  + config: [HTMLSecretConfiguration](../interfaces/foundry.HTMLSecretConfiguration.md) = {}

    Configuration options.

  #### Returns HTMLSecret

## Methods

### bind

* bind(html: HTMLElement): void

  Add event listeners to the targeted secret blocks.

  #### Parameters

  + html: HTMLElement

    The HTML content to select secret blocks from.

  #### Returns void

### `Protected`\_onToggleSecret

* \_onToggleSecret(event: MouseEvent): void | Promise<ClientDocument>

  `Protected`

  Handle toggling a secret's revealed state.

  #### Parameters

  + event: MouseEvent

    The triggering click event.

  #### Returns void | Promise<ClientDocument>

  The Document whose content was modified.