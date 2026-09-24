---
title: "benchmark | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.benchmark.html"
category: "functions"
---

# Function benchmark

* benchmark(func: Function, iterations: number, ...args: any[]): Promise<void>

  Benchmark the performance of a function, calling it a requested number of iterations.

  #### Parameters

  + func: Function

    The function to benchmark
  + iterations: number

    The number of iterations to test
  + ...args: any[]

    Additional arguments passed to the benchmarked function

  #### Returns Promise<void>