---
title: "parseS3URL | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.parseS3URL.html"
category: "functions"
---

# Function parseS3URL

* parseS3URL(key: string): { bucket: string | null; keyPrefix: string }

  Parse an S3 key to learn the bucket and the key prefix used for the request.

  #### Parameters

  + key: string

    A fully qualified key name or prefix path.

  #### Returns { bucket: string | null; keyPrefix: string }