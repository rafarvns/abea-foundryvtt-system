---
title: "escapeHTML | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.escapeHTML.html"
category: "functions"
---

# Function escapeHTML

* escapeHTML(value: any): string

  Escape the given unescaped string.

  Escaped strings are safe to use inside inner HTML of most tags and in most quoted HTML attributes.
  They are not NOT safe to use in `<script>` tags, unquoted attributes, `href`, `onmouseover`, and similar.
  They must be unescaped first if they are used inside a context that would escape them.

  Handles only `&`, `<`, `>`, `"`, and `'`.

  #### Parameters

  + value: any

    An unescaped string

  #### Returns string

  The escaped string

  #### See

  [foundry.utils.unescapeHTML](foundry.utils.unescapeHTML.md)