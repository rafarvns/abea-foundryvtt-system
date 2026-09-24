---
title: "threadLock | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.threadLock.html"
category: "functions"
---

# Function threadLock

* threadLock(ms: number, debug?: boolean): Promise<void>

  A debugging function to test latency or timeouts by forcibly locking the thread for an amount of time.

  #### Parameters

  + ms: number

    A number of milliseconds to lock
  + debug: boolean = false

    Log debugging information?

  #### Returns Promise<void>