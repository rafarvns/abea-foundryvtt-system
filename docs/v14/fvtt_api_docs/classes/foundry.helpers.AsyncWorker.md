---
title: "AsyncWorker | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.AsyncWorker.html"
category: "classes"
---

# Class AsyncWorker

An asynchronous web Worker which can load user-defined functions and await execution using Promises.

#### Param: name

The worker name to be initialized

#### Param: options

Worker initialization options

#### Param: options.debug

Should the worker run in debug mode?

#### Param: options.loadPrimitives

Should the worker automatically load the primitives library?

#### Param: options.scripts

Should the worker operates in script modes? Optional scripts.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.helpers.AsyncWorker))

* Worker
  + AsyncWorker
    - [TextureCompressor](foundry.canvas.workers.TextureCompressor.md)

##### Index

### Properties

[name](#name)
[WORKER\_HARNESS\_JS](#worker_harness_js)

### Accessors

[ready](#ready)

### Methods

[executeFunction](#executefunction)
[loadFunction](#loadfunction)
[terminate](#terminate)

## Properties

### name

name: string

The name of this worker.

### `Static`WORKER\_HARNESS\_JS

WORKER\_HARNESS\_JS: string = "scripts/worker.js"

A path reference to the JavaScript file which provides companion worker-side functionality.

## Accessors

### ready

* get ready(): Promise<any>

  A Promise which resolves once the Worker is ready to accept tasks

  #### Returns Promise<any>

## Methods

### executeFunction

* executeFunction(  
  Â Â Â Â functionName: string,  
  Â Â Â Â args?: any[],  
  Â Â Â Â transfer?: any[],  
  ): Promise<unknown>

  Execute a task on a specific Worker.

  #### Parameters

  + functionName: string

    The named function to execute on the worker. This function must first have been
    loaded.
  + `Optional`args: any[] = []

    An array of parameters with which to call the requested function
  + `Optional`transfer: any[] = []

    An array of transferable objects which are transferred to the worker thread.
    See <https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects>

  #### Returns Promise<unknown>

  A Promise which resolves with the returned result of the function once complete.

### loadFunction

* loadFunction(functionName: string, functionRef: Function): Promise<unknown>

  Load a function onto a given Worker.
  The function must be a pure function with no external dependencies or requirements on global scope.

  #### Parameters

  + functionName: string

    The name of the function to load
  + functionRef: Function

    A reference to the function that should be loaded

  #### Returns Promise<unknown>

  A Promise which resolves once the Worker has loaded the function.

### terminate

* terminate(): void

  #### Returns void

  #### Inherit Doc

  Overrides Worker.terminate