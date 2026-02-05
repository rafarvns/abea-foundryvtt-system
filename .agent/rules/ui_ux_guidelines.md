# UI/UX Guidelines for FoundryVTT V13

This guide covers Handlebars templates, CSS architecture, and ApplicationV2 rendering for the ABEA system.

## 1. Handlebars Templates

### Template File Structure

Templates are located in `templates/` directory:

```
templates/
├── actor/
│   ├── actor-sheet.hbs          # Main actor sheet
│   └── partials/
│       ├── actor-header.hbs     # Reusable header
│       └── actor-attributes.hbs # Attributes section
└── item/
    └── item-sheet.hbs           # Main item sheet
```

### Context Data Access

Access document data in templates:

```handlebars
{{!-- Document properties --}}
<h1>{{document.name}}</h1>
<img src="{{document.img}}" alt="{{document.name}}">

{{!-- System data --}}
<div class="health">
  <span>{{system.health.value}} / {{system.health.max}}</span>
</div>

{{!-- Flags --}}
<div>{{flags.abea.customFlag}}</div>
```

### Built-in Helpers

#### Localization

```handlebars
{{!-- Simple localization --}}
<label>{{localize "ABEA.Attribute.Strength"}}</label>

{{!-- With formatting --}}
<p>{{localize "ABEA.Message.DamageDealt" damage=10}}</p>
```

#### Rich Text Editor

```handlebars
{{!-- ProseMirror editor --}}
{{editor document.system.biography 
  target="system.biography" 
  button=true 
  owner=owner 
  editable=editable}}
```

#### Form Inputs

```handlebars
{{!-- Number input --}}
{{numberInput system.health.value 
  name="system.health.value" 
  min=0 
  max=system.health.max 
  step=1}}

{{!-- Select input --}}
{{selectInput system.attribute 
  name="system.attribute" 
  options=config.ABEA.attributes 
  value=system.attribute}}
```

### Custom Helper Registration

Register custom helpers in your system's init hook:

```javascript
Handlebars.registerHelper("ternary", function(condition, yes, no) {
  return condition ? yes : no;
});

Handlebars.registerHelper("times", function(n, block) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += block.fn(i);
  }
  return result;
});
```

Usage:
```handlebars
<div class="{{ternary isActive 'active' 'inactive'}}">

{{#times 5}}
  <span>★</span>
{{/times}}
```

### Partial Templates

Define reusable template sections:

```handlebars
{{!-- templates/actor/actor-sheet.hbs --}}
<form class="{{cssClass}}">
  {{> "systems/abea/templates/actor/partials/actor-header.hbs"}}
  
  <div class="sheet-body">
    {{> "systems/abea/templates/actor/partials/actor-attributes.hbs"}}
  </div>
</form>
```

### Form Structure for ApplicationV2

ApplicationV2 automatically handles form submission:

```handlebars
<form class="{{cssClass}}" autocomplete="off">
  {{!-- Name attribute maps to update path --}}
  <input type="text" 
    name="name" 
    value="{{document.name}}" 
    placeholder="{{localize 'ABEA.Actor.Name'}}">
  
  <input type="number" 
    name="system.health.value" 
    value="{{system.health.value}}" 
    min="0" 
    max="{{system.health.max}}">
  
  {{!-- Actions trigger methods in sheet class --}}
  <button type="button" 
    data-action="rollSkill" 
    data-skill-id="athletics">
    {{localize "ABEA.Action.Roll"}}
  </button>
</form>
```

---

## 2. CSS Architecture

### Scoping Styles

**Always scope to your system** to avoid conflicts:

```css
/* ❌ WRONG - Global pollution */
.sheet {
  background: white;
}

/* ✅ CORRECT - Scoped to system */
.abea.sheet {
  background: white;
}
```

### CSS Custom Properties (Variables)

Define theme variables for consistency:

```css
:root {
  --abea-primary-color: #4a4a4a;
  --abea-accent-color: #8b0000;
  --abea-background-color: #f4f1ea;
  --abea-border-color: #c0b283;
  --abea-text-color: #2c2c2c;
  
  --abea-spacing-sm: 4px;
  --abea-spacing-md: 8px;
  --abea-spacing-lg: 16px;
  
  --abea-font-size-sm: 12px;
  --abea-font-size-md: 14px;
  --abea-font-size-lg: 18px;
}

.abea.sheet {
  background: var(--abea-background-color);
  color: var(--abea-text-color);
  border: 1px solid var(--abea-border-color);
  padding: var(--abea-spacing-lg);
}
```

### Flexbox and Grid Layouts

Use modern CSS for responsive layouts:

```css
/* Flexbox for header */
.abea.sheet .sheet-header {
  display: flex;
  align-items: center;
  gap: var(--abea-spacing-md);
}

/* Grid for attributes */
.abea.sheet .attributes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--abea-spacing-md);
}
```

### Responsive Design

```css
/* Mobile-first approach */
.abea.sheet .attributes-grid {
  grid-template-columns: 1fr;
}

/* Tablet and up */
@media (min-width: 768px) {
  .abea.sheet .attributes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .abea.sheet .attributes-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Common Foundry CSS Classes

Leverage Foundry's built-in styles:

```css
/* Tabs */
.abea.sheet nav.sheet-tabs {
  /* Foundry provides base tab styles */
}

/* Form groups */
.abea.sheet .form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--abea-spacing-md);
}

/* Buttons */
.abea.sheet button {
  /* Foundry provides base button styles */
}
```

---

## 3. ApplicationV2 Rendering Pipeline

### Rendering Lifecycle

1. **_prepareContext(options)** - Prepare data for template
2. **_renderHTML(context, options)** - Generate HTML (automatic with Handlebars)
3. **_replaceHTML(result, content, options)** - Inject into DOM
4. **_attachFrameListeners()** - Attach event listeners

### _prepareContext() Method

Prepare all data needed by the template:

```javascript
async _prepareContext(options) {
  const context = await super._prepareContext(options);
  const actorData = this.document;

  // Document data
  context.system = actorData.system;
  context.flags = actorData.flags;
  
  // Configuration
  context.config = CONFIG.ABEA;
  
  // Derived data
  context.isOwner = actorData.isOwner;
  context.editable = this.isEditable;
  
  // Enriched HTML
  context.enrichedBiography = await TextEditor.enrichHTML(
    actorData.system.biography,
    { async: true }
  );
  
  // Items organized by type
  context.weapons = actorData.items.filter(i => i.type === "weapon");
  context.spells = actorData.items.filter(i => i.type === "spell");
  
  return context;
}
```

### Render Triggers

ApplicationV2 automatically re-renders when:
- Document is updated
- Embedded documents change
- `render()` is called manually

Manual render:
```javascript
this.render(false, { focus: true });
```

### Partial Re-renders

For complex sheets, use PARTS for partial updates:

```javascript
static PARTS = {
  header: {
    template: "systems/abea/templates/actor/parts/header.hbs"
  },
  attributes: {
    template: "systems/abea/templates/actor/parts/attributes.hbs"
  },
  items: {
    template: "systems/abea/templates/actor/parts/items.hbs"
  }
};

// Re-render only items section
this.render(false, { parts: ["items"] });
```

---

## 4. Form Handling

### Automatic Form Submission

ApplicationV2 automatically handles form submission:

```handlebars
<form class="{{cssClass}}">
  {{!-- Input name maps to document update path --}}
  <input type="text" name="name" value="{{document.name}}">
  <input type="number" name="system.health.value" value="{{system.health.value}}">
  
  {{!-- Changes are automatically saved on blur/change --}}
</form>
```

### Custom Form Validation

Override `_onSubmitForm` for custom validation:

```javascript
async _onSubmitForm(formConfig, event) {
  const formData = new FormDataExtended(event.target).object;
  
  // Custom validation
  if (formData.system.health.value < 0) {
    ui.notifications.error("Health cannot be negative");
    return;
  }
  
  // Call parent to handle update
  return super._onSubmitForm(formConfig, event);
}
```

### Input Types and Data Binding

```handlebars
{{!-- Text --}}
<input type="text" name="system.name" value="{{system.name}}">

{{!-- Number --}}
<input type="number" name="system.level" value="{{system.level}}" min="1" max="20">

{{!-- Checkbox --}}
<input type="checkbox" name="system.proficient" {{checked system.proficient}}>

{{!-- Select --}}
<select name="system.attribute">
  {{#each config.ABEA.attributes as |attr|}}
    <option value="{{attr}}" {{selected attr ../system.attribute}}>
      {{localize (concat "ABEA.Attribute." attr)}}
    </option>
  {{/each}}
</select>

{{!-- Textarea --}}
<textarea name="system.notes">{{system.notes}}</textarea>
```

### Editable vs Non-Editable States

```handlebars
{{#if editable}}
  <input type="text" name="name" value="{{document.name}}">
{{else}}
  <span>{{document.name}}</span>
{{/if}}
```

---

## 5. Accessibility

### Semantic HTML

Use appropriate HTML elements:

```handlebars
{{!-- ❌ WRONG --}}
<div onclick="rollSkill()">Roll</div>

{{!-- ✅ CORRECT --}}
<button type="button" data-action="rollSkill">
  {{localize "ABEA.Action.Roll"}}
</button>
```

### ARIA Labels

Add labels for screen readers:

```handlebars
<button type="button" 
  data-action="rollSkill" 
  data-skill-id="athletics"
  aria-label="{{localize 'ABEA.Action.RollAthletics'}}">
  <i class="fas fa-dice-d20"></i>
</button>

<input type="number" 
  name="system.health.value" 
  value="{{system.health.value}}"
  aria-label="{{localize 'ABEA.Attribute.Health'}}">
```

### Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

```css
/* Focus styles */
.abea.sheet button:focus,
.abea.sheet input:focus {
  outline: 2px solid var(--abea-accent-color);
  outline-offset: 2px;
}
```

### Color Contrast

Ensure sufficient contrast for readability:

```css
/* ❌ WRONG - Poor contrast */
.abea.sheet {
  background: #f0f0f0;
  color: #d0d0d0;
}

/* ✅ CORRECT - Good contrast */
.abea.sheet {
  background: #ffffff;
  color: #2c2c2c;
}
```

---

## Quick Reference

**Handlebars:**
- `{{localize "KEY"}}` - Translate text
- `{{editor content}}` - Rich text editor
- `{{numberInput value}}` - Number input
- `{{selectInput value}}` - Select dropdown

**CSS:**
- Scope all styles to `.abea`
- Use CSS variables for theming
- Flexbox/Grid for layouts
- Mobile-first responsive design

**ApplicationV2:**
- `_prepareContext()` - Prepare template data
- `render()` - Trigger re-render
- PARTS - Partial template updates
- Automatic form handling

**Forms:**
- `name` attribute maps to update path
- Automatic submission on blur/change
- Use `data-action` for custom actions
- Validate in `_onSubmitForm()`

**Accessibility:**
- Semantic HTML elements
- ARIA labels for screen readers
- Keyboard navigation support
- Sufficient color contrast
