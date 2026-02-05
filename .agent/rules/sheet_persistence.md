# FoundryVTT Sheet Development & Data Persistence Rules

These rules are CRITICAL for ensuring that data entered in character sheets and item sheets is correctly saved to the Foundry VTT database and that the sheets render without errors.

## 1. No Nested Forms in Templates

**NEVER** include a `<form>` tag in your Handlebars template when using `DocumentSheetV2` (or its derivatives like `ActorSheetV2` and `ItemSheetV2`).
Parent classes in Application V2/DocumentSheetV2 already wrap the entire rendered content in a `<form>` element. Adding another `<form>` inside your template creates invalid HTML (nested forms), which prevents browser `change` events from bubbling up to the main form handler, effectively breaking data persistence.

```handlebars
<!-- ❌ WRONG - Creates invalid nested forms -->
<form class="my-sheet">
  <input name="name" value="{{document.name}}">
</form>

<!-- ✅ CORRECT - Just the content, wrapped in a div -->
<div class="sheet-wrapper">
  <input name="name" value="{{document.name}}">
</div>
```

## 2. Single Root Element Requirement

The "shell" template (the main part of your sheet) **MUST** render exactly ONE top-level HTML element. If you have multiple top-level elements (e.g., a `<header>` and a `<section>` as siblings), Application V2 will fail to render with an error like: `Template part "shell" must render a single HTML element`.

```handlebars
<!-- ❌ WRONG - Multiple root elements -->
<header>...</header>
<section>...</section>

<!-- ✅ CORRECT - Wrapped in a single div -->
<div class="sheet-container">
  <header>...</header>
  <section>...</section>
</div>
```

## 3. Rely on Default Form Handling

**DO NOT** add custom form submission handlers (`handler` in `DEFAULT_OPTIONS.form`) unless strictly necessary for non-document data. `DocumentSheetV2` is designed to automatically handle data serialization and document updates.

Explicitly setting `submitOnChange: true` and `closeOnSubmit: false` is usually sufficient for a seamless editing experience.

```javascript
/** ✅ GOOD PRACTICE - Use system defaults **/
static DEFAULT_OPTIONS = {
    // ...
    form: {
        submitOnChange: true,
        closeOnSubmit: false
    }
};
```

## 4. Name Attributes for Fields

Ensure that every input field has a `name` attribute that correctly maps to the document data path (e.g., `name="system.details.age"` or `name="name"`). Without the `name` attribute, the automatic data collection will ignore the field.

## 5. Summary Checklist for New Sheets

- [ ] Template has exactly ONE root element (e.g., `<div class="{{cssClass}}">`).
- [ ] Template contains NO `<form>` tags.
- [ ] JS Class uses `DocumentSheetV2` (or derivative).
- [ ] JS Class does NOT implement a custom form `handler` unless for non-persistent UI state.
- [ ] Inputs have correct `name` attributes matching the DataModel schema.
