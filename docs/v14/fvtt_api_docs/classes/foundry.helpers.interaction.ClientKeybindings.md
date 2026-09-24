---
title: "ClientKeybindings | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.interaction.ClientKeybindings.html"
category: "classes"
---

# Class ClientKeybindings

A class responsible for managing defined game keybinding.
Each keybinding is a string key/value pair belonging to a certain namespace and a certain store scope.

When Foundry Virtual Tabletop is initialized, a singleton instance of this class is constructed within the global
Game object as as game.keybindings.

#### See

* [foundry.Game#keybindings](foundry.Game.md#keybindings)
* [ControlsConfig](foundry.applications.sidebar.apps.ControlsConfig.md)

##### Index

### Properties

[actions](#actions)
[activeKeys](#activekeys)
[bindings](#bindings)

### Methods

[\_registerCoreKeybindings](#_registercorekeybindings)
[get](#get)
[initialize](#initialize)
[register](#register)
[resetDefaults](#resetdefaults)
[set](#set)
[\_compareActions](#_compareactions)

## Properties

### actions

actions: Map<string, [KeybindingActionConfig](../interfaces/foundry.types.KeybindingActionConfig.md)>

Registered Keybinding actions

### activeKeys

activeKeys: Map<string, [KeybindingAction](../interfaces/foundry.types.KeybindingAction.md)[]>

A mapping of a string key to possible Actions that might execute off it

### bindings

bindings: Map<string, [KeybindingActionBinding](../interfaces/foundry.types.KeybindingActionBinding.md)[]>

A stored cache of Keybind Actions Ids to Bindings

## Methods

### \_registerCoreKeybindings

* \_registerCoreKeybindings(view: string): void

  `Internal`

  Register core keybindings.

  #### Parameters

  + view: string

    The active game view

  #### Returns void

### get

* get(namespace: string, action: string): [KeybindingActionBinding](../interfaces/foundry.types.KeybindingActionBinding.md)[]

  Get the current Bindings of a given namespace's Keybinding Action

  #### Parameters

  + namespace: string

    The namespace under which the setting is registered
  + action: string

    The keybind action to retrieve

  #### Returns [KeybindingActionBinding](../interfaces/foundry.types.KeybindingActionBinding.md)[]

  #### Example: Retrieve the current Keybinding Action Bindings

  ```
  game.keybindings.get("myModule", "showNotification");
  Copy
  ```

### initialize

* initialize(): void

  Initializes the keybinding values for all registered actions

  #### Returns void

### register

* register(namespace: string, action: string, data: [KeybindingActionConfig](../interfaces/foundry.types.KeybindingActionConfig.md)): void

  Register a new keybinding

  #### Parameters

  + namespace: string

    The namespace the Keybinding Action belongs to
  + action: string

    A unique machine-readable id for the Keybinding Action
  + data: [KeybindingActionConfig](../interfaces/foundry.types.KeybindingActionConfig.md)

    Configuration for keybinding data

  #### Returns void

  #### Example: Define a keybinding which shows a notification

  ```
  game.keybindings.register("myModule", "showNotification", {  
    name: "My Settings Keybinding",  
    hint: "A description of what will occur when the Keybinding is executed.",  
    uneditable: [  
      {  
        key: "Digit1",  
        modifiers: ["Control"]  
      }  
    ],  
    editable: [  
      {  
        key: "F1"  
      }  
    ],  
    onDown: () => { ui.notifications.info("Pressed!") },  
    onUp: () => {},  
    restricted: true,             // Restrict this Keybinding to gamemaster only?  
    reservedModifiers: ["Alt"],  // On ALT, the notification is permanent instead of temporary  
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL  
  });
  Copy
  ```

### resetDefaults

* resetDefaults(): Promise<any>

  Reset all client keybindings back to their default configuration.

  #### Returns Promise<any>

### set

* set(  
  Â Â Â Â namespace: string,  
  Â Â Â Â action: string,  
  Â Â Â Â bindings: [KeybindingActionBinding](../interfaces/foundry.types.KeybindingActionBinding.md)[],  
  ): Promise<any>

  Set the editable Bindings of a Keybinding Action for a certain namespace and Action

  #### Parameters

  + namespace: string

    The namespace under which the Keybinding is registered
  + action: string

    The Keybinding action to set
  + bindings: [KeybindingActionBinding](../interfaces/foundry.types.KeybindingActionBinding.md)[]

    The Bindings to assign to the Keybinding

  #### Returns Promise<any>

  #### Example: Update the current value of a keybinding

  ```
  game.keybindings.set("myModule", "showNotification", [  
      {  
        key: "F2",  
        modifiers: [ "CONTROL" ]  
      }  
  ]);
  Copy
  ```

### `Static`\_compareActions

* \_compareActions(  
  Â Â Â Â a: Pick<[KeybindingAction](../interfaces/foundry.types.KeybindingAction.md), "order" | "precedence">,  
  Â Â Â Â b: Pick<[KeybindingAction](../interfaces/foundry.types.KeybindingAction.md), "order" | "precedence">,  
  ): number

  `Internal`

  Compares two Keybinding Actions based on their Order

  #### Parameters

  + a: Pick<[KeybindingAction](../interfaces/foundry.types.KeybindingAction.md), "order" | "precedence">

    The first Keybinding Action
  + b: Pick<[KeybindingAction](../interfaces/foundry.types.KeybindingAction.md), "order" | "precedence">

    the second Keybinding Action

  #### Returns number