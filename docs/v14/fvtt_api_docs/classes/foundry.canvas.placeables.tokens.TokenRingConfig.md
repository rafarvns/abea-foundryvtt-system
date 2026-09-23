---
title: "TokenRingConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.tokens.TokenRingConfig.html"
category: "classes"
---

# Class TokenRingConfig

Token Ring configuration Singleton Class.

#### Example

```
Add a new custom ring configuration. Allow only ring pulse, ring gradient and background wave effects.  
const customConfig = new foundry.canvas.placeables.tokens.DynamicRingData({  
  id: "myCustomRingId",  
  label: "Custom Ring",  
  effects: {  
    RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",  
    RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",  
    BACKGROUND_WAVE: "TOKEN.RING.EFFECTS.BACKGROUND_WAVE"  
  },  
  spritesheet: "canvas/tokens/myCustomRings.json",  
  framework: {  
    shaderClass: MyCustomTokenRingSamplerShader,  
    ringClass: TokenRing  
  }  
});  
CONFIG.Token.ring.addConfig(customConfig.id, customConfig);
Copy
```

#### Example

```
Get a specific ring configuration  
const config = CONFIG.Token.ring.getConfig("myCustomRingId");  
console.log(config.spritesheet); // Output: canvas/tokens/myCustomRings.json
Copy
```

#### Example

```
Use a specific ring configuration  
const success = CONFIG.Token.ring.useConfig("myCustomRingId");  
console.log(success); // Output: true
Copy
```

#### Example

```
Get the labels of all configurations  
const configLabels = CONFIG.Token.ring.configLabels;  
console.log(configLabels);  
// Output:  
// {  
//   "coreSteel": "Foundry VTT Steel Ring",  
//   "coreBronze": "Foundry VTT Bronze Ring",  
//   "myCustomRingId" : "My Super Power Ring"  
// }
Copy
```

#### Example

```
Get the IDs of all configurations  
const configIDs = CONFIG.Token.ring.configIDs;  
console.log(configIDs); // Output: ["coreSteel", "coreBronze", "myCustomRingId"]
Copy
```

#### Example

```
Create a hook to add a custom token ring configuration. This ring configuration will appear in the settings.  
Hooks.on("initializeDynamicTokenRingConfig", ringConfig => {  
  const mySuperPowerRings = new foundry.canvas.placeables.tokens.DynamicRingData({  
    id: "myCustomRingId",  
    label: "My Super Power Rings",  
    effects: {  
      RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",  
      RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",  
      BACKGROUND_WAVE: "TOKEN.RING.EFFECTS.BACKGROUND_WAVE"  
    },  
    spritesheet: "canvas/tokens/mySuperPowerRings.json"  
  });  
  ringConfig.addConfig("mySuperPowerRings", mySuperPowerRings);  
});
Copy
```

#### Example

```
Activate color bands debugging visuals to ease configuration  
CONFIG.Token.ring.debugColorBands = true;
Copy
```

##### Index

### Properties

[debugColorBands](#debugcolorbands)
[subjectPaths](#subjectpaths)
[CORE\_TOKEN\_RINGS](#core_token_rings)
[CORE\_TOKEN\_RINGS\_FIT\_MODES](#core_token_rings_fit_modes)

### Accessors

[configIDs](#configids)
[configLabels](#configlabels)
[effects](#effects)
[id](#id)
[isGridFitMode](#isgridfitmode)
[label](#label)
[ringClass](#ringclass)
[shaderClass](#shaderclass)
[spritesheet](#spritesheet)

### Methods

[addConfig](#addconfig)
[getConfig](#getconfig)
[useConfig](#useconfig)
[initialize](#initialize)
[registerSettings](#registersettings)

## Properties

### debugColorBands

debugColorBands: boolean = false

All color bands visual debug flag.

### subjectPaths

subjectPaths: Record<string, string> = {}

A mapping of token subject paths where modules or systems have configured subject images.

### `Static`CORE\_TOKEN\_RINGS

CORE\_TOKEN\_RINGS: Readonly<Record<string, RingData>> = ...

Core token rings used in Foundry VTT.
Each key is a string identifier for a ring, and the value is an object containing the ring's data.
This object is frozen to prevent any modifications.

### `Static`CORE\_TOKEN\_RINGS\_FIT\_MODES

CORE\_TOKEN\_RINGS\_FIT\_MODES: object = ...

Core token rings fit modes used in Foundry VTT.

## Accessors

### configIDs

* get configIDs(): string[]

  Get the IDs of all configurations.

  #### Returns string[]

  The names of all configurations.

### configLabels

* get configLabels(): Record<string, string>

  Get the labels of all configurations.

  #### Returns Record<string, string>

  An object with configuration names as keys and localized labels as values.

### effects

* get effects(): Record<string, string>

  Get the current effects.

  #### Returns Record<string, string>

### id

* get id(): string

  Get the current id.

  #### Returns string

### isGridFitMode

* get isGridFitMode(): boolean

  Is a custom fit mode active?

  #### Returns boolean

### label

* get label(): string

  Get the current localized label.

  #### Returns string

### ringClass

* get ringClass(): any

  Get the current ring class.

  #### Returns any

### shaderClass

* get shaderClass(): any

  Get the current shader class.

  #### Returns any

### spritesheet

* get spritesheet(): string

  Get the current spritesheet.

  #### Returns string

## Methods

### addConfig

* addConfig(id: string, config: RingConfig): void

  Add a new ring configuration.

  #### Parameters

  + id: string

    The id of the ring configuration.
  + config: RingConfig

    The configuration object for the ring.

  #### Returns void

### getConfig

* getConfig(id: string): RingConfig

  Get a ring configuration.

  #### Parameters

  + id: string

    The id of the ring configuration.

  #### Returns RingConfig

  The ring configuration object.

### useConfig

* useConfig(id: string): boolean

  Use a ring configuration.

  #### Parameters

  + id: string

    The id of the ring configuration to use.

  #### Returns boolean

  True if the configuration was successfully set, false otherwise.

### `Static`initialize

* initialize(): void

  Register the token ring config and initialize it

  #### Returns void

### `Static`registerSettings

* registerSettings(): void

  Register game settings used by the Token Ring

  #### Returns void