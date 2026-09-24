---
title: "KeyboardManager | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.helpers.interaction.KeyboardManager.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [helpers](../modules/foundry.helpers.html)
* [interaction](../modules/foundry.helpers.interaction.html)
* [KeyboardManager](foundry.helpers.interaction.KeyboardManager.html)

# Class KeyboardManager

A set of helpers and management functions for dealing with user input from keyboard events.
<https://keycode.info/>

#### See

[foundry.Game#keyboard](foundry.Game.html#keyboard)

##### Index

### Properties

[downKeys](foundry.helpers.interaction.KeyboardManager.html#downkeys)
[moveKeys](foundry.helpers.interaction.KeyboardManager.html#movekeys)
[CONTROL\_KEY\_STRING](foundry.helpers.interaction.KeyboardManager.html#control_key_string)
[KEYCODE\_DISPLAY\_MAPPING](foundry.helpers.interaction.KeyboardManager.html#keycode_display_mapping)
[MODIFIER\_CODES](foundry.helpers.interaction.KeyboardManager.html#modifier_codes)
[MODIFIER\_KEYS](foundry.helpers.interaction.KeyboardManager.html#modifier_keys)
[PRINTABLE\_CHAR\_REGEX](foundry.helpers.interaction.KeyboardManager.html#printable_char_regex)
[PROTECTED\_KEYS](foundry.helpers.interaction.KeyboardManager.html#protected_keys)

### Accessors

[hasFocus](foundry.helpers.interaction.KeyboardManager.html#hasfocus)
[isUniversalMode](foundry.helpers.interaction.KeyboardManager.html#isuniversalmode)

### Methods

[\_activateListeners](foundry.helpers.interaction.KeyboardManager.html#_activatelisteners)
[isCoreActionKeyActive](foundry.helpers.interaction.KeyboardManager.html#iscoreactionkeyactive)
[isModifierActive](foundry.helpers.interaction.KeyboardManager.html#ismodifieractive)
[releaseKeys](foundry.helpers.interaction.KeyboardManager.html#releasekeys)
[\_onFocusIn](foundry.helpers.interaction.KeyboardManager.html#_onfocusin)
[\_processKeyboardContext](foundry.helpers.interaction.KeyboardManager.html#_processkeyboardcontext)
[\_getMatchingActions](foundry.helpers.interaction.KeyboardManager.html#_getmatchingactions)
[emulateKeypress](foundry.helpers.interaction.KeyboardManager.html#emulatekeypress)
[getKeyboardEventContext](foundry.helpers.interaction.KeyboardManager.html#getkeyboardeventcontext)
[getKeycodeDisplayString](foundry.helpers.interaction.KeyboardManager.html#getkeycodedisplaystring)
[translateKey](foundry.helpers.interaction.KeyboardManager.html#translatekey)

## Properties

### downKeys

downKeys: Set<string> = ...

The set of key codes which are currently depressed (down)

### moveKeys

moveKeys: Set<string> = ...

The set of movement keys which were recently pressed

### `Static`CONTROL\_KEY\_STRING

CONTROL\_KEY\_STRING: string = ...

The OS-specific string display for what their Command key is

### `Static`KEYCODE\_DISPLAY\_MAPPING

KEYCODE\_DISPLAY\_MAPPING: Record<string, string> = ...

A special mapping of how special KeyboardEvent#code values should map to displayed strings or symbols.
Values in this configuration object override any other display formatting rules which may be applied.

### `Static`MODIFIER\_CODES

MODIFIER\_CODES: { [key: string]: string[] } = ...

Track which KeyboardEvent#code presses associate with each modifier.

### `Static`MODIFIER\_KEYS

MODIFIER\_KEYS: { ALT: string; CONTROL: string; SHIFT: string } = ...

Allowed modifier keys.

### `Static`PRINTABLE\_CHAR\_REGEX

PRINTABLE\_CHAR\_REGEX: RegExp = ...

Matches any single graphic Unicode code-point (letters, digits, punctuation, symbols, including emoji).
Non-printable identifiers like *ArrowLeft*, *ShiftLeft*, *Dead* never match.

### `Static`PROTECTED\_KEYS

PROTECTED\_KEYS: string[] = ...

Key codes which are "protected" and should not be used because they are reserved for browser-level actions.

## Accessors

### hasFocus

* get hasFocus(): boolean

  Determines whether an `HTMLElement` currently has focus, which may influence keybinding actions.

  An element is considered to have focus if:

  1. It has a `dataset.keyboardFocus` attribute explicitly set to `"true"` or an empty string (`""`).
  2. It is an `<input>`, `<select>`, or `<textarea>` element, all of which inherently accept keyboard input.
  3. It has the `isContentEditable` property set to `true`, meaning it is an editable element.
  4. It is a `<button>` element inside a `<form>`, which suggests interactive use.

  An element is considered **not** focused if:

  1. There is no currently active element (`document.activeElement` is not an `HTMLElement`).
  2. It has a `dataset.keyboardFocus` attribute explicitly set to `"false"`.

  If none of these conditions are met, the element is assumed to be unfocused.

  #### Returns boolean

### `Static`isUniversalMode

* get isUniversalMode(): boolean

  Is logical keybindings active?

  #### Returns boolean

## Methods

### \_activateListeners

* \_activateListeners(): void

  `Internal`

  Begin listening to keyboard events.

  #### Returns void

### isCoreActionKeyActive

* isCoreActionKeyActive(action: string): boolean

  Report whether a core action key is currently actively depressed.

  #### Parameters

  + action: string

    The core action to verify (ex: "target")

  #### Returns boolean

  Is this core action key currently down (active)?

### isModifierActive

* isModifierActive(modifier: string): boolean

  Report whether a modifier in KeyboardManager.MODIFIER\_KEYS is currently actively depressed.

  #### Parameters

  + modifier: string

    A modifier in MODIFIER\_KEYS

  #### Returns boolean

  Is this modifier key currently down (active)?

### releaseKeys

* releaseKeys(options?: { force?: boolean }): void

  Emulate a key-up event for any currently down keys. When emulating, we go backwards such that combinations such as
  "CONTROL + S" emulate the "S" first in order to capture modifiers.

  #### Parameters

  + `Optional`options: { force?: boolean } = {}

    Options to configure behavior.

    - ##### `Optional`force?: boolean

      Force the keyup events to be handled.

  #### Returns void

### `Protected`\_onFocusIn

* \_onFocusIn(event: FocusEvent): void

  `Protected`

  Release any down keys when focusing a form element.

  #### Parameters

  + event: FocusEvent

    The focus event.

  #### Returns void

### `Protected`\_processKeyboardContext

* \_processKeyboardContext(  
  Â Â Â Â context: [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.html),  
  Â Â Â Â options?: { force?: boolean },  
  ): void

  `Protected`

  Processes a keyboard event context, checking it against registered keybinding actions

  #### Parameters

  + context: [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.html)

    The keyboard event context
  + `Optional`options: { force?: boolean } = {}

    Additional options to configure behavior.

    - ##### `Optional`force?: boolean

      Force the event to be handled.

  #### Returns void

### `Static`\_getMatchingActions

* \_getMatchingActions(context: [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.html)): [KeybindingAction](../interfaces/foundry.types.KeybindingAction.html)[]

  `Internal`

  Given a keyboard-event context, return every registered keybinding that matches it (may be empty).

  #### Parameters

  + context: [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.html)

  #### Returns [KeybindingAction](../interfaces/foundry.types.KeybindingAction.html)[]

### `Static`emulateKeypress

* emulateKeypress(  
  Â Â Â Â up: boolean,  
  Â Â Â Â code: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â altKey?: boolean;  
  Â Â Â Â Â Â Â Â ctrlKey?: boolean;  
  Â Â Â Â Â Â Â Â force?: boolean;  
  Â Â Â Â Â Â Â Â repeat?: boolean;  
  Â Â Â Â Â Â Â Â shiftKey?: boolean;  
  Â Â Â Â },  
  ): [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.html)

  Emulates a key being pressed, triggering the Keyboard event workflow.

  #### Parameters

  + up: boolean

    If True, emulates the `keyup` Event. Else, the `keydown` event
  + code: string

    The KeyboardEvent#code which is being pressed
  + `Optional`options: {  
    Â Â Â Â altKey?: boolean;  
    Â Â Â Â ctrlKey?: boolean;  
    Â Â Â Â force?: boolean;  
    Â Â Â Â repeat?: boolean;  
    Â Â Â Â shiftKey?: boolean;  
    } = {}

    Additional options to configure behavior.

    - ##### `Optional`altKey?: boolean

      Emulate the ALT modifier as pressed
    - ##### `Optional`ctrlKey?: boolean

      Emulate the CONTROL modifier as pressed
    - ##### `Optional`force?: boolean

      Force the event to be handled.
    - ##### `Optional`repeat?: boolean

      Emulate this as a repeat event
    - ##### `Optional`shiftKey?: boolean

      Emulate the SHIFT modifier as pressed

  #### Returns [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.html)

### `Static`getKeyboardEventContext

* getKeyboardEventContext(  
  Â Â Â Â event: KeyboardEvent,  
  Â Â Â Â up?: boolean,  
  ): [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.html)

  Get a standardized keyboard context for a given event.
  Every individual keypress is uniquely identified using the KeyboardEvent#code property.
  A list of possible key codes is documented here: <https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values>

  #### Parameters

  + event: KeyboardEvent

    The originating keypress event
  + up: boolean = false

    A flag for whether the key is down or up

  #### Returns [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.html)

  The standardized context of the event

### `Static`getKeycodeDisplayString

* getKeycodeDisplayString(code: string): string

  Format a KeyboardEvent#code into a displayed string.

  #### Parameters

  + code: string

    The input code

  #### Returns string

  The displayed string for this code

### `Static`translateKey

* translateKey(event: KeyboardEvent): string

  Canonical identifier for a key press.

  #### Parameters

  + event: KeyboardEvent

  #### Returns string