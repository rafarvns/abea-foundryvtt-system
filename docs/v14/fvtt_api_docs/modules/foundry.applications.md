---
title: "applications | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/modules/foundry.applications.html"
category: "modules"
---

# Namespace applications

A library for rendering and managing HTML user interface elements within the Foundry Virtual Tabletop game client.

## Application Basics

The ApplicationV2 class is a customizable representation of an HTML window inside Foundry VTT. It's the basis for pop up dialogs, document sheets, and permanent UI features. More so than other parts of Foundry, familiarity with core browser behavior will be helpful. MDN is a highly reliable website for details on HTML, JS, and CSS behavior. Furthermore, when extending any Application subclass, it can be helpful to review the exact core code, which can be found inside your local foundry install under `client/applications`.

Application V2?
The ApplicationV2 class is a replacement for the original Application class. ApplicationV2 was introduced in v12 and fully adopted by the core software in v13. The original Application class has had an extended deprecation period which will expire in v16. ApplicationV2 is exported both as Application as well as ApplicationV2 from the `foundry.applications.api` namespace.

This page is primarily focused on helping you write your own applications. If you are working with applications someone else wrote, either from the core software or from another package, you should use hooks. A complete list of application-related hooks can be found on the  [hookEvents](hookEvents.md) page.

### Default Options

The [`static DEFAULT_OPTIONS`](../classes/foundry.applications.api.ApplicationV2.md#default_options) property is the primary way to configure the behavior of an application window. Here, you can set the default size, link up event handlers, add CSS classes, and otherwise manage fundamental attributes of your application. You can see the full list of properties in the ApplicationConfiguration type definition.

`DEFAULT_OPTIONS` is automatically merged with all super classes when the application is instantiated to create the [`options`](../classes/foundry.applications.api.ApplicationV2.md#options) property, so you only need to specify what's different from your super classes. Unlike most merges in Foundry, array properties in `DEFAULT_OPTIONS` are concatenated rather than replaced.

**Actions:** One particularly important property is the `actions` object. This is a list of click listeners where the key is the value of a `data-action` attribute. Your click listeners should generally be private static functions on the class, but despite being static functions they are called by Foundry with `this` being the application instance. The below example demonstrates how to use JSDoc to annotate a click listener so it's aware of your instance context.

```
const { HandlebarsApplicationMixin, ApplicationV2 } = foundry.applications.api;  
  
class MyApplication extends HandlebarsApplicationMixin(ApplicationV2) {  
  static DEFAULT_OPTIONS = {  
    actions: {  
      foo: this.#doFoo  
    }  
  }  
  
  /**  
   * @this {MyApplication}  
   * @param {PointerEvent} event  The originating click event  
   * @param {HTMLElement} target  The capturing HTML element which defines the [data-action]  
   */  
  static async #doFoo(event, target) {  
    console.log(this, event, target);  
  }  
}
Copy
```

Then, inside your application handlebars template, you'd create a button with the following attributes. The `type="button"` is a necessary quirk of the HTML spec, which defaults buttons to `submit`.

```
<button type="button" data-action="foo">Button Text</button>
Copy
```

### HandlebarsApplicationMixin

In order to produce HTML, it's helpful to have a rendering engine that can simplify the process. ApplicationV2 separates the Handlebars rendering engine away into a mixin,  [`foundry.applications.api.HandlebarsApplicationMixin`](../functions/foundry.applications.api.HandlebarsApplicationMixin.md), which injects a `HandlebarsApplication` base class into the inheritance chain. [Handlebars](https://handlebarsjs.com/) is a popular templating library with its own [documentation](https://handlebarsjs.com/guide/) and conventions that are useful to learn.

What is a mixin?
For those familiar with [Object Oriented Programming](https://developer.mozilla.org/en-US/docs/Learn\_web\_development/Extensions/Advanced\_JavaScript\_objects/Object-oriented\_programming), a mixin in JavaScript is a way to implement multiple inheritance, injecting the HandlebarsApplication class into the inheritance tree regardless of whether you're starting from ApplicationV2, DocumentSheetV2, or ActorSheetV2.

#### Parts

The `static PARTS` property is where you specify the file paths for your handlebars files. Each part must have a single top level html element. The `templates` property for each part allows you to specify additional templates to load for use as partials inside the part.

#### Context Prep

The beating heart of assembling your final html is `_prepareContext` and `_preparePartContext`. For each part, foundry runs `_prepareContext` and feeds that into `_preparePartContext`, which is then the final context object provided to that part's hbs template. These methods are where you check properties, perform transformations and sorts, and otherwise do the heavy lifting of assembling the information you need. While it is possible to defer logic to the handlebars template, this should be done as little as possible.

#### Core Helpers

Foundry has implemented a number of handlebars helpers, which can be found under the [handlebars namespace](foundry.applications.handlebars.md).

## Tabs

The [`static TABS`](../classes/foundry.applications.api.ApplicationV2.md#tabs) property allows you to specify the tabs available in your sheet. The below example is a snippet from the SceneConfig application, which leverages `labelPrefix` to automatically construct the i18n key used for the actual display label. You can instead pass in the `label` property directly to each tab object, which will still be run through Foundry's localization.

```
static TABS = {  
  sheet: {  
    tabs: [  
      {id: "basics", icon: "fa-solid fa-image"},  
      {id: "grid", icon: "fa-solid fa-grid"},  
      {id: "levels", icon: "fa-solid fa-layer-group"},  
      {id: "visibility", icon: "fa-solid fa-eye"},  
      {id: "environment", icon: "fa-solid fa-sun-cloud"},  
      {id: "misc", icon: "fa-solid fa-shapes"}  
    ],  
    initial: "basics",  
    labelPrefix: "SCENE.TABS.SHEET"  
  }  
};
Copy
```

If you only provide a single tab group, then the default implementation of ApplicationV2#\_prepareContext will set up the appropriate info in the `tabs` property of the returned context object. It does this by calling [`ApplicationV2#_prepareTabs`](../classes/foundry.applications.api.ApplicationV2.md#_preparetabs), which constructs a standardized array of information which feeds into the core tabs template `templates/generic/tab-navigation.hbs`. Depending on your styling goals you may choose to eschew this template and implement your own handlebars structure and/or override the `_prepareTabs` method. You can also just directly call `_prepareTabs` yourself with whichever groups you need.

```
async _prepareContext(options) {  
  const context = await super._prepareContext(options);  
  console.log(context.tabs); // Prepared tabs configuration  
  return context;  
}
Copy
```

For your actual tabs, assuming each tab of your application gets its own part, the outer element needs to look something like the following. Note that the `data-group` and `data-tab` values, as well as the middle key of the `class` part, should be adjusted to match the actual values you used in the `static TABS` property; this case assumes an outer key of `sheet` for the tab group and an inner key of `details` for the specific tab here.

```
<section class="tab {{tabs.details.cssClass}}" data-group="sheet" data-tab="details">  
</section>
Copy
```

While it is entirely possible to skip over using `static TABS` and fully implement tab handling some other way, one key advantage to this standardized approach is alongside `static PARTS` it allows modules to inject their own tabs into your applications, improving the extensibility of your package within the Foundry ecosystem.

## Important AppV2 Subclasses

Some application subclasses have their own needs which are explained on a separate page.

[DialogV2](../classes/foundry.applications.api.DialogV2.md)
:   Dialogs are a convenient way to create a simple application that does not re-render. The factory methods like `prompt` and `input` are strongly recommended as they return a single promise that resolves when the dialog is closed, either by the user canceling out of the dialog or by clicking one of its buttons.

[DocumentSheetV2](../classes/foundry.applications.api.DocumentSheetV2.md)
:   All system developers and some module developers must contend with creating document sheets, especially for actors and items. Information on them can be found under  [foundry.applications.sheets](foundry.applications.sheets.md).

## Making Your Own Applications

Sometimes it's necessary to define your own application subclass that isn't a Document Sheet or a Dialog. In these cases, directly extending `HandlebarsApplicationMixin(ApplicationV2)` may be appropriate.

### Form Handling

The key to defining a form in ApplicationV2 is through DEFAULT\_OPTIONS, first with `tag: "form"` at the top level and then by filling in the `form` property. For document sheets, these options are already filled in, but when defining your own form you must do it yourself. The most important of the form properties is the `handler` callback, which like other parts of AppV2, should be a private static async function which will be called within the context of the app instance.

```
const { HandlebarsApplicationMixin, ApplicationV2 } = foundry.applications.api;  
  
class MyApplication extends HandlebarsApplicationMixin(ApplicationV2) {  
  static DEFAULT_OPTIONS = {  
    tag: "form",  
    form: {  
      handler: this.#handleSubmit  
    }  
  }  
  
  /**  
   * Process form submission for this application.  
   * @this {MyApplication}  
   * @param {SubmitEvent|Event} event     The originating form submission or input change event  
   * @param {HTMLFormElement} form        The form element that was submitted  
   * @param {FormDataExtended} formData   Processed data for the submitted form  
   * @param {object} [submitOptions]      Arbitrary options which are supported by and provided to the configured form  
   *                                      submission handler.  
   */  
  static async #handleSubmit(event, form, formData, submitOptions={}) {  
    console.log(this, event, form, formData, submitOptions);  
  }  
}
Copy
```

The fourth `submitOptions` argument is only populated when a form is submitted programmatically via [`ApplicationV2#submit`](../classes/foundry.applications.api.ApplicationV2.md#submit); a user-driven submit or input event invokes the handler with only `event`, `form`, and `formData`.

### Constructing an Application

Once you've defined your application class, you can construct it with `new MyApplication(options)`. The `options` parameter is optional, but will be merged with and override the collective options from `DEFAULT_OPTIONS`. This can be very useful when the application needs outside context; the data will be available under `this.options`. It can also conditionally override anything normally handled by DEFAULT\_OPTIONS, such as `window` properties like `title`, `position`, and `width`.

### Rendering

There are two ways to render an application; both require constructing your application via the `new` keyword. The `render` method takes the `force: true` option when you want to open the window fresh on screen; by default `render` is only used to refresh the contents of an application that is already displayed. Alternatively, [`ApplicationV2#renderChild`](../classes/foundry.applications.api.ApplicationV2.md#renderchild) registers the new application as a managed child of an existing one: the child renders in the parent's window, follows the parent when it is popped out to a separate window or re-attached, and is closed automatically when the parent closes.

```
// General purpose solution  
new MyApplication().render({ force: true })  
  
// Assumes that `this` is an existing application, such as inside of a click action.  
this.renderChild(new MyApplication())
Copy
```

## Namespaces

[api](foundry.applications.api.md)

[apps](foundry.applications.apps.md)

[dice](foundry.applications.dice.md)

[elements](foundry.applications.elements.md)

[fields](foundry.applications.fields.md)

[handlebars](foundry.applications.handlebars.md)

[hud](foundry.applications.hud.md)

[settings](foundry.applications.settings.md)

[sheets](foundry.applications.sheets.md)

[sidebar](foundry.applications.sidebar.md)

[types](foundry.applications.types.md)

[ui](foundry.applications.ui.md)

[ux](foundry.applications.ux.md)

## Variables

[instances](../variables/foundry.applications.instances.md)

## Functions

[parseHTML](../functions/foundry.applications.parseHTML.md)