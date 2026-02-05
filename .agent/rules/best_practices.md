# FoundryVTT Development Best Practices

This guide covers coding standards, performance optimization, and common patterns for ABEA system development.

## 1. Clean Code Principles

### English-Only Naming (PROJECT RULE)

**ABSOLUTELY EVERYTHING must be in English:**

```javascript
// ❌ WRONG - Portuguese names
const jogador = game.user;
function calcularDano(valor) { /* ... */ }
class PersonagemSheet extends ActorSheetV2 { /* ... */ }

// ✅ CORRECT - English names
const player = game.user;
function calculateDamage(value) { /* ... */ }
class CharacterSheet extends ActorSheetV2 { /* ... */ }
```

This applies to:
- Variable names
- Function names
- Class names
- Method names
- Comments
- Internal documentation
- Console logs

**Translation**: Use `lang/pt-br.json` for user-facing text.

### Single Responsibility Principle

Each class/function should have one clear purpose:

```javascript
// ❌ WRONG - Too many responsibilities
class ActorHelper {
  calculateDamage() { /* ... */ }
  renderSheet() { /* ... */ }
  saveToDatabase() { /* ... */ }
  playSound() { /* ... */ }
}

// ✅ CORRECT - Focused responsibilities
class DamageCalculator {
  calculate(actor, damage) { /* ... */ }
}

class ActorSheetRenderer {
  render(actor) { /* ... */ }
}
```

### DRY (Don't Repeat Yourself)

Extract common logic into reusable functions:

```javascript
// ❌ WRONG - Repeated code
function rollStrength(actor) {
  const bonus = actor.system.attributes.strength.value;
  return new Roll(`1d20 + ${bonus}`).roll();
}

function rollDexterity(actor) {
  const bonus = actor.system.attributes.dexterity.value;
  return new Roll(`1d20 + ${bonus}`).roll();
}

// ✅ CORRECT - Reusable function
function rollAttribute(actor, attributeName) {
  const bonus = actor.system.attributes[attributeName].value;
  return new Roll(`1d20 + ${bonus}`).roll();
}
```

### Meaningful Names

Use descriptive names that reveal intent:

```javascript
// ❌ WRONG - Unclear names
const d = actor.system.hp.v;
function calc(x, y) { return x + y; }

// ✅ CORRECT - Clear names
const currentHealth = actor.system.health.value;
function calculateTotalDamage(baseDamage, modifier) {
  return baseDamage + modifier;
}
```

---

## 2. Module Organization

### Directory Structure

Organize code by responsibility:

```
scripts/
├── abea.mjs                 # Main entry point
├── documents/               # Document classes
│   ├── actor.mjs
│   ├── item.mjs
│   └── data-models/
│       ├── character.mjs
│       ├── npc.mjs
│       └── weapon.mjs
├── sheets/                  # Sheet applications
│   ├── actor-sheet.mjs
│   └── item-sheet.mjs
├── helpers/                 # Helper utilities
│   ├── dice.mjs
│   ├── combat.mjs
│   └── effects.mjs
└── utils/                   # General utilities
    └── constants.mjs
```

### When to Use Helper Functions vs Document Methods

**Document Methods** - Logic specific to that document type:
```javascript
export class AbeaActor extends Actor {
  // Actor-specific logic
  async applyDamage(damage) {
    const newHealth = this.system.health.value - damage;
    await this.update({ "system.health.value": newHealth });
  }
}
```

**Helper Functions** - Reusable logic across multiple contexts:
```javascript
// helpers/dice.mjs
export function rollSkillCheck(skillValue, difficulty) {
  const roll = new Roll(`1d20 + ${skillValue}`);
  return roll.evaluate({ async: false });
}
```

---

## 3. Performance Optimization

### Data Preparation Efficiency

**DON'T** perform heavy calculations in `prepareData`:

```javascript
// ❌ WRONG - Heavy calculation every time
prepareDerivedData() {
  super.prepareDerivedData();
  
  // This runs on EVERY update!
  this.totalWeight = this.items.reduce((sum, item) => {
    return sum + (item.system.weight * item.system.quantity);
  }, 0);
}

// ✅ CORRECT - Only calculate when needed
prepareDerivedData() {
  super.prepareDerivedData();
  
  // Simple derived values only
  this.encumbered = this.system.totalWeight > this.system.carryCapacity;
}

// Calculate weight separately when items change
async _onUpdateEmbeddedDocuments(embeddedName, documents, result, options, userId) {
  super._onUpdateEmbeddedDocuments(embeddedName, documents, result, options, userId);
  
  if (embeddedName === "Item") {
    await this._calculateTotalWeight();
  }
}
```

### Canvas Rendering Considerations

Minimize canvas updates:

```javascript
// ❌ WRONG - Updates on every frame
Hooks.on("canvasReady", () => {
  setInterval(() => {
    canvas.tokens.placeables.forEach(token => {
      token.refresh();  // Expensive!
    });
  }, 100);
});

// ✅ CORRECT - Update only when needed
Hooks.on("updateToken", (token, changes) => {
  if ("x" in changes || "y" in changes) {
    token.refresh();
  }
});
```

### Lazy Loading for Large Compendiums

```javascript
// ❌ WRONG - Load everything upfront
const allItems = await game.packs.get("abea.items").getDocuments();

// ✅ CORRECT - Load on demand
async function getItemByName(name) {
  const pack = game.packs.get("abea.items");
  const index = await pack.getIndex();
  const entry = index.find(i => i.name === name);
  return entry ? await pack.getDocument(entry._id) : null;
}
```

---

## 4. Common Patterns

### Configuration Objects

Store system configuration in `CONFIG.ABEA`:

```javascript
// In abea.mjs init hook
CONFIG.ABEA = {
  attributes: ["strength", "dexterity", "constitution"],
  skills: {
    athletics: { attribute: "strength", label: "ABEA.Skill.Athletics" },
    stealth: { attribute: "dexterity", label: "ABEA.Skill.Stealth" }
  },
  damageTypes: ["physical", "magical", "fire", "cold"]
};
```

Access in templates:
```handlebars
{{#each config.ABEA.attributes as |attr|}}
  <div>{{attr}}</div>
{{/each}}
```

### Using Hooks Effectively

**Hooks.once** - Run only on first trigger:
```javascript
Hooks.once("init", function() {
  console.log("ABEA | Initializing");
  // Register DataModels, settings
});
```

**Hooks.on** - Run every time:
```javascript
Hooks.on("updateActor", function(actor, changes, options, userId) {
  if ("system.health.value" in changes) {
    console.log(`${actor.name} health changed`);
  }
});
```

### Async/Await Patterns

**All Foundry document operations are async:**

```javascript
// ❌ WRONG - Not awaiting
function damageActor(actor, damage) {
  actor.update({ "system.health.value": actor.system.health.value - damage });
  console.log("Damage applied");  // Runs before update completes!
}

// ✅ CORRECT - Proper async/await
async function damageActor(actor, damage) {
  await actor.update({ "system.health.value": actor.system.health.value - damage });
  console.log("Damage applied");  // Runs after update completes
}
```

### Error Handling and User Feedback

```javascript
async function rollSkill(actor, skillName) {
  try {
    const skill = actor.system.skills[skillName];
    if (!skill) {
      throw new Error(`Skill ${skillName} not found`);
    }
    
    const roll = await new Roll(`1d20 + ${skill.value}`).evaluate();
    await roll.toMessage();
    
    ui.notifications.info(`Rolled ${skillName}: ${roll.total}`);
  } catch (error) {
    console.error("ABEA | Skill roll error:", error);
    ui.notifications.error(`Failed to roll ${skillName}`);
  }
}
```

### Roll Formulas and Dice Evaluation

```javascript
// Simple roll
const roll = await new Roll("1d20 + 5").evaluate();

// Dynamic formula
const bonus = actor.system.strength.modifier;
const roll = await new Roll(`1d20 + @bonus`, { bonus }).evaluate();

// Display in chat
await roll.toMessage({
  speaker: ChatMessage.getSpeaker({ actor }),
  flavor: "Strength Check"
});
```

---

## 5. Anti-Patterns to Avoid

### ❌ Using Deprecated V1 Sheet Classes

```javascript
// ❌ WRONG
export class MyActorSheet extends ActorSheet {
  getData() { /* ... */ }
}

// ✅ CORRECT
const { ActorSheetV2, HandlebarsApplicationMixin } = foundry.applications.sheets;
export class MyActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  async _prepareContext(options) { /* ... */ }
}
```

### ❌ Direct DOM Manipulation

```javascript
// ❌ WRONG - Direct DOM manipulation
activateListeners(html) {
  html.find(".health-value").text(this.actor.system.health.value);
}

// ✅ CORRECT - Data-driven templates
async _prepareContext(options) {
  const context = await super._prepareContext(options);
  context.healthValue = this.document.system.health.value;
  return context;
}
```

Template:
```handlebars
<div class="health-value">{{healthValue}}</div>
```

### ❌ Synchronous Assumptions

```javascript
// ❌ WRONG - Assuming synchronous
function createActor(name) {
  const actor = Actor.create({ name, type: "character" });
  console.log(actor.id);  // undefined! Not created yet
}

// ✅ CORRECT - Async/await
async function createActor(name) {
  const actor = await Actor.create({ name, type: "character" });
  console.log(actor.id);  // Works!
}
```

### ❌ Hard-Coded Strings

```javascript
// ❌ WRONG - Hard-coded text
ui.notifications.info("Dano aplicado com sucesso");

// ✅ CORRECT - Localized
ui.notifications.info(game.i18n.localize("ABEA.Notification.DamageApplied"));
```

In `lang/pt-br.json`:
```json
{
  "ABEA.Notification.DamageApplied": "Dano aplicado com sucesso"
}
```

### ❌ Global Namespace Pollution

```javascript
// ❌ WRONG - Polluting global scope
window.myHelper = function() { /* ... */ };

// ✅ CORRECT - Use CONFIG or module scope
CONFIG.ABEA.helpers = {
  myHelper: function() { /* ... */ }
};
```

### ❌ Ignoring Data Model Validation

```javascript
// ❌ WRONG - No validation
await actor.update({ "system.health.value": -100 });  // Invalid!

// ✅ CORRECT - Validate in prepareDerivedData
prepareDerivedData() {
  super.prepareDerivedData();
  const { health } = this.system;
  health.value = Math.clamp(health.value, 0, health.max);
}
```

---

## 6. Testing Strategy

### Manual Testing in FoundryVTT

**Project Policy**: No unit tests required. Verify through manual testing.

**Testing Checklist:**

1. **System Installation**
   - System appears in list
   - Metadata is correct
   - No console errors on load

2. **World Creation**
   - World launches successfully
   - Init hooks fire correctly
   - No deprecation warnings

3. **Actor/Item Creation**
   - Sheets open without errors
   - Data saves correctly
   - Derived data calculates properly

4. **Functionality Testing**
   - Rolls work as expected
   - Updates persist correctly
   - Hooks trigger appropriately

### Console Debugging

```javascript
// Add debug logging
console.log("ABEA | Actor data:", actor.system);
console.log("ABEA | Roll result:", roll.total);

// Use debugger
function complexCalculation(data) {
  debugger;  // Pauses execution in DevTools
  return data.value * 2;
}
```

### Browser DevTools

- **Console**: View logs and errors
- **Sources**: Set breakpoints in code
- **Network**: Monitor API calls
- **Application**: Inspect localStorage/IndexedDB

---

## Quick Reference

**Key Principles:**
- ✅ English-only code
- ✅ Single responsibility
- ✅ DRY (Don't Repeat Yourself)
- ✅ Meaningful names
- ✅ Async/await for all document operations

**Performance:**
- ✅ Light calculations in `prepareData`
- ✅ Lazy loading for large datasets
- ✅ Minimize canvas updates

**Patterns:**
- ✅ Use CONFIG for system configuration
- ✅ Use Hooks for events
- ✅ Use localization for all user-facing text
- ✅ Proper error handling with try/catch

**Anti-Patterns:**
- ❌ V1 deprecated patterns
- ❌ Direct DOM manipulation
- ❌ Synchronous assumptions
- ❌ Hard-coded strings
- ❌ Global namespace pollution

