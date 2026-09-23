---
title: "partition | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Array.partition.html"
category: "functions"
---

# Function partition

* partition<[T](#partitiont)>(rule: (element: [T](#partitiont)) => boolean): [[T](#partitiont)[], [T](#partitiont)[]]

  Partition an original array into two children array based on a logical test
  Elements which test as false go into the first result while elements testing as true appear in the second

  #### Type Parameters

  + T

  #### Parameters

  + rule: (element: [T](#partitiont)) => boolean

  #### Returns [[T](#partitiont)[], [T](#partitiont)[]]

  An Array of length two whose elements are the partitioned pieces of the original