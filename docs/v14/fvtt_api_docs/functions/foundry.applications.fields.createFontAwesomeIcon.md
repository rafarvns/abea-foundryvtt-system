---
title: "createFontAwesomeIcon | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.fields.createFontAwesomeIcon.html"
category: "functions"
---

# Function createFontAwesomeIcon

* createFontAwesomeIcon(  
  Â Â Â Â glyph: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â classes?: string[];  
  Â Â Â Â Â Â Â Â fixedWidth?: boolean;  
  Â Â Â Â Â Â Â Â style?: "solid" | "regular" | "duotone";  
  Â Â Â Â },  
  ): HTMLElement

  Create an HTML element for a FontAwesome icon

  #### Parameters

  + glyph: string

    A FontAwesome glyph name, such as "file" or "user"
  + `Optional`options: {  
    Â Â Â Â classes?: string[];  
    Â Â Â Â fixedWidth?: boolean;  
    Â Â Â Â style?: "solid" | "regular" | "duotone";  
    } = {}

    Additional options to configure the icon

    - ##### `Optional`classes?: string[]

      Additional classes to append to the class list
    - ##### `Optional`fixedWidth?: boolean

      Should icon be fixed-width?
    - ##### `Optional`style?: "solid" | "regular" | "duotone"

      The style name for the icon

  #### Returns HTMLElement

  The configured FontAwesome icon element

  #### See

  <https://fontawesome.com/search>