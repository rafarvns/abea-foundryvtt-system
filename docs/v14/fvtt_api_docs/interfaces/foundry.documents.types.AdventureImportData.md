---
title: "AdventureImportData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.AdventureImportData.html"
category: "interfaces"
---

# Interface AdventureImportData

The data that is planned to be imported for the adventure, categorized into new documents that will be created and
existing documents that will be updated.

interface AdventureImportData {  
Â Â Â Â [documentCount](#documentcount): number;  
Â Â Â Â [toCreate](#tocreate): Record<string, object[]>;  
Â Â Â Â [toUpdate](#toupdate): Record<string, object[]>;  
}

##### Index

### Properties

[documentCount](#documentcount)
[toCreate](#tocreate)
[toUpdate](#toupdate)

## Properties

### documentCount

documentCount: number

The total count of documents to import

### toCreate

toCreate: Record<string, object[]>

Arrays of document data to create, organized by document name

### toUpdate

toUpdate: Record<string, object[]>

Arrays of document data to update, organized by document name