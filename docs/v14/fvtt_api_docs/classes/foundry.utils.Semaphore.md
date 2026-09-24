---
title: "Semaphore | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.utils.Semaphore.html"
category: "classes"
---

# Class Semaphore

A simple Semaphore implementation which provides a limited queue for ensuring proper concurrency.

#### Param: max

The maximum number of tasks which are allowed concurrently.

#### Example: Using a Semaphore

```
// Some async function that takes time to execute  
function fn(x) {  
  return new Promise(resolve => {  
    setTimeout(() => {  
      console.log(x);  
      resolve(x);  
    }, 1000);  
  });  
}  
  
// Create a Semaphore and add many concurrent tasks  
const semaphore = new Semaphore(1);  
for ( let i of Array.fromRange(100) ) {  
  semaphore.add(fn, i);  
}
Copy
```

##### Index

### Properties

[max](#max)

### Accessors

[active](#active)
[remaining](#remaining)

### Methods

[add](#add)
[clear](#clear)

## Properties

### max

max: number

The maximum number of tasks which can be simultaneously attempted.

## Accessors

### active

* get active(): number

  The number of actively executing tasks

  #### Returns number

### remaining

* get remaining(): number

  The number of pending tasks remaining in the queue

  #### Returns number

## Methods

### add

* add(fn: Function, ...args?: any[]): Promise<any>

  Add a new tasks to the managed queue

  #### Parameters

  + fn: Function

    A callable function
  + `Optional`...args: any[]

    Function arguments

  #### Returns Promise<any>

  A promise that resolves once the added function is executed

### clear

* clear(): void

  Abandon any tasks which have not yet concluded

  #### Returns void