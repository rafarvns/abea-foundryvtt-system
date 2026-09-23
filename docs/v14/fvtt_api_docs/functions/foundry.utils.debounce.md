---
title: "debounce | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.debounce.html"
category: "functions"
---

# Function debounce

* debounce(callback: Function, delay: number): Function

  Wrap a callback in a debounced timeout and expose a cancel method.
  Delay execution of the callback function until the function has not been called for delay milliseconds.

  #### Parameters

  + callback: Function

    A function to execute once the debounced threshold has been passed
  + delay: number

    An amount of time in milliseconds to delay

  #### Returns Function

  A wrapped function which can be called to debounce execution with a cancel method

  #### Example

  ```
  Classic usage  
  const updateSearch = debounce(query => this.#runSearch(query), 250);  
  updateSearch("goblin");  
  updateSearch("goblin king");
  Copy
  ```

  #### Example

  ```
  Cancel a pending call  
  const savePosition = debounce(() => this.#save(), 1500);  
  savePosition();  
    
  // Later, if you need to cancel a pending call before the debounced callback fires  
  savePosition.cancel();
  Copy
  ```