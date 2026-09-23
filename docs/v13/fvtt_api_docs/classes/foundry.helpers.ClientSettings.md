---
title: "ClientSettings | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.helpers.ClientSettings.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [helpers](../modules/foundry.helpers.html)
* [ClientSettings](foundry.helpers.ClientSettings.html)

# Class ClientSettings

A class responsible for managing defined game settings or settings menus.
Each setting is a string key/value pair belonging to a certain namespace and a certain store scope.

When Foundry Virtual Tabletop is initialized, a singleton instance of this class is constructed within the global
Game object as game.settings.

#### See

* [foundry.Game#settings](foundry.Game.html#settings)
* [foundry.applications.sidebar.tabs.Settings](foundry.applications.sidebar.tabs.Settings.html)
* [foundry.applications.settings.SettingsConfig](foundry.applications.settings.SettingsConfig.html)

##### Index

### Properties

[menus](foundry.helpers.ClientSettings.html#menus)
[settings](foundry.helpers.ClientSettings.html#settings)
[storage](foundry.helpers.ClientSettings.html#storage)

### Accessors

[sheet](foundry.helpers.ClientSettings.html#sheet)

### Methods

[get](foundry.helpers.ClientSettings.html#get)
[register](foundry.helpers.ClientSettings.html#register)
[registerMenu](foundry.helpers.ClientSettings.html#registermenu)
[set](foundry.helpers.ClientSettings.html#set)

## Properties

### menus

menus: Map<  
Â Â Â Â string,  
Â Â Â Â | [Application](foundry.appv1.api.Application.html)  
Â Â Â Â | [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>,  
>

Registered settings menus which trigger secondary applications

### settings

settings: Map<string, [SettingConfig](../interfaces/foundry.types.SettingConfig.html)>

A object of registered game settings for this scope

### storage

storage: Map<"world" | "client", Storage>

The storage interfaces used for persisting settings
Each storage interface shares the same API as window.localStorage

## Accessors

### sheet

* get sheet(): [SettingsConfig](foundry.applications.settings.SettingsConfig.html)

  Return a singleton instance of the Game Settings Configuration app

  #### Returns [SettingsConfig](foundry.applications.settings.SettingsConfig.html)

## Methods

### get

* get(namespace: string, key: string, options?: { document?: boolean }): any

  Get the value of a game setting for a certain namespace and setting key

  #### Parameters

  + namespace: string

    The namespace under which the setting is registered
  + key: string

    The setting key to retrieve
  + options: { document?: boolean } = {}

    Additional options for setting retrieval

    - ##### `Optional`document?: boolean

      Retrieve the full Setting document instance instead of just its value

  #### Returns any

  The current value or the Setting document instance

  #### Example: Retrieve the current setting value

  ```
  game.settings.get("myModule", "myClientSetting");
  Copy
  ```

### register

* register(namespace: string, key: string, data: [SettingConfig](../interfaces/foundry.types.SettingConfig.html)): void

  Register a new namespaced game setting. The setting's scope determines where the setting is saved.
  World - World settings are applied to everyone in the World. Use this for settings like system rule variants that
  everyone must abide by.
  User - User settings are applied to an individual user. Use this for settings that are a player's personal
  preference, like 3D dice skins.
  Client - Client settings are applied to the browser or client used to access the World. Use this for settings that
  are affected by the client itself, such as screen dimensions, resolution, or performance.

  #### Parameters

  + namespace: string

    The namespace under which the setting is registered
  + key: string

    The key name for the setting under the namespace
  + data: [SettingConfig](../interfaces/foundry.types.SettingConfig.html)

    Configuration for setting data

  #### Returns void

  #### Example: Register a client setting

  ```
  game.settings.register("myModule", "myClientSetting", {  
    name: "Register a Module Setting with Choices",  
    hint: "A description of the registered setting and its behavior.",  
    scope: "client",     // This specifies a client-stored setting  
    config: true,        // This specifies that the setting appears in the configuration view  
    requiresReload: true // This will prompt the user to reload the application for the setting to take effect.  
    type: String,  
    choices: {           // If choices are defined, the resulting setting will be a select menu  
      "a": "Option A",  
      "b": "Option B"  
    },  
    default: "a",        // The default value for the setting  
    onChange: value => { // A callback function which triggers when the setting is changed  
      console.log(value)  
    }  
  });
  Copy
  ```

  #### Example: Register a world setting

  ```
  game.settings.register("myModule", "myWorldSetting", {  
    name: "Register a Module Setting with a Range slider",  
    hint: "A description of the registered setting and its behavior.",  
    scope: "world",      // This specifies a world-level setting  
    config: true,        // This specifies that the setting appears in the configuration view  
    requiresReload: true // This will prompt the GM to have all clients reload the application for the setting to  
                         // take effect.  
    type: new foundry.fields.NumberField({nullable: false, min: 0, max: 100, step: 10}),  
    default: 50,         // The default value for the setting  
    onChange: value => { // A callback function which triggers when the setting is changed  
      console.log(value)  
    }  
  });
  Copy
  ```

  #### Example: Register a user setting

  ```
  game.settings.register("myModule", "myUserSetting", {  
    name: "Register a Module Setting with a checkbox",  
    hint: "A description of the registered setting and its behavior.",  
    scope: "user",       // This specifies a user-level setting  
    config: true,        // This specifies that the setting appears in the configuration view  
    type: new foundry.fields.BooleanField(),  
    default: false  
  });
  Copy
  ```

### registerMenu

* registerMenu(namespace: string, key: string, data: [SettingSubmenuConfig](../interfaces/foundry.types.SettingSubmenuConfig.html)): void

  Register a new sub-settings menu

  #### Parameters

  + namespace: string

    The namespace under which the menu is registered
  + key: string

    The key name for the setting under the namespace
  + data: [SettingSubmenuConfig](../interfaces/foundry.types.SettingSubmenuConfig.html)

    Configuration for setting data

  #### Returns void

  #### Example: Define a settings submenu which handles advanced configuration needs

  ```
  game.settings.registerMenu("myModule", "mySettingsMenu", {  
    name: "My Settings Submenu",  
    label: "Settings Menu Label",      // The text label used in the button  
    hint: "A description of what will occur in the submenu dialog.",  
    icon: "fa-solid fa-bars",               // A Font Awesome icon used in the submenu button  
    type: MySubmenuApplicationClass,   // A FormApplication subclass which should be created  
    restricted: true                   // Restrict this submenu to gamemaster only?  
  });
  Copy
  ```

### set

* set(  
  Â Â Â Â namespace: string,  
  Â Â Â Â key: string,  
  Â Â Â Â value: any,  
  Â Â Â Â options?: { document?: boolean },  
  ): Promise<any>

  Set the value of a game setting for a certain namespace and setting key

  #### Parameters

  + namespace: string

    The namespace under which the setting is registered
  + key: string

    The setting key to retrieve
  + value: any

    The data to assign to the setting key
  + `Optional`options: { document?: boolean } = {}

    Additional options passed to the server when updating world-scope settings

    - ##### `Optional`document?: boolean

      Return the updated Setting document instead of just its value

  #### Returns Promise<any>

  The assigned setting value or the Setting document instance

  #### Example: Update the current value of a setting

  ```
  game.settings.set("myModule", "myClientSetting", "b");
  Copy
  ```