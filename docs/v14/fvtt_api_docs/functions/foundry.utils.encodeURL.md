---
title: "encodeURL | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.encodeURL.html"
category: "functions"
---

# Function encodeURL

* encodeURL(path: string): string

  Encode an url-like string by replacing any characters which need encoding.
  To reverse this encoding, the native decodeURIComponent can be used on the whole encoded string, without adjustment.

  #### Parameters

  + path: string

    A fully-qualified URL or url component (like a relative path)

  #### Returns string

  An encoded URL string