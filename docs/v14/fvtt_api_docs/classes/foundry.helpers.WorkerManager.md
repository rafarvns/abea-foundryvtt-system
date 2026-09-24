---
title: "WorkerManager | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.WorkerManager.html"
category: "classes"
---

# Class WorkerManager

A client-side class responsible for managing a set of web workers.
This interface is accessed as a singleton instance via game.workers.

#### See

[foundry.Game#workers](foundry.Game.md#workers)

#### Hierarchy

* Map
  + WorkerManager

##### Index

### Properties

[WORKER\_TASK\_ACTIONS](#worker_task_actions)

### Methods

[createWorker](#createworker)
[retireWorker](#retireworker)

## Properties

### `Static`WORKER\_TASK\_ACTIONS

WORKER\_TASK\_ACTIONS: Readonly<  
Â Â Â Â { EXECUTE: "execute"; INIT: "init"; LOAD: "load" },  
> = ...

Supported worker task actions

## Methods

### createWorker

* createWorker(name: string, config?: object): Promise<[AsyncWorker](foundry.helpers.AsyncWorker.md)>

  Create a new named Worker.

  #### Parameters

  + name: string

    The named Worker to create
  + `Optional`config: object = {}

    Worker configuration parameters passed to the AsyncWorker constructor

  #### Returns Promise<[AsyncWorker](foundry.helpers.AsyncWorker.md)>

  The created AsyncWorker which is ready to accept tasks

### retireWorker

* retireWorker(name: string): void

  Retire a current Worker, terminating it immediately.

  #### Parameters

  + name: string

    The named worker to terminate

  #### Returns void

  #### See

  Worker#terminate