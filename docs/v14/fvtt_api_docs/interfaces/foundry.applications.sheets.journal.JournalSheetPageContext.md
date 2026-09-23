---
title: "JournalSheetPageContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.sheets.journal.JournalSheetPageContext.html"
category: "interfaces"
---

# Interface JournalSheetPageContext

interface JournalSheetPageContext {  
Â Â Â Â [category](#category)?: string;  
Â Â Â Â [editable](#editable): boolean;  
Â Â Â Â [hidden](#hidden): boolean;  
Â Â Â Â [icon](#icon): string;  
Â Â Â Â [id](#id): string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [number](#number): number;  
Â Â Â Â [ownershipClass](#ownershipclass): string;  
Â Â Â Â [sort](#sort): number;  
Â Â Â Â [tocClass](#tocclass): string;  
Â Â Â Â [uncategorized](#uncategorized)?: boolean;  
Â Â Â Â [viewClass](#viewclass): string;  
}

##### Index

### Properties

[category?](#category)
[editable](#editable)
[hidden](#hidden)
[icon](#icon)
[id](#id)
[name](#name)
[number](#number)
[ownershipClass](#ownershipclass)
[sort](#sort)
[tocClass](#tocclass)
[uncategorized?](#uncategorized)
[viewClass](#viewclass)

## Properties

### `Optional`category

category?: string

The ID of the category this page belongs to, if any.

### editable

editable: boolean

Whether the current user is allowed to edit the page.

### hidden

hidden: boolean

Whether the page is currently hidden due to a search filter.

### icon

icon: string

The ownership icon for the page entry in the table of contents.

### id

id: string

The page ID.

### name

name: string

The page title.

### number

number: number

The page number in the table of contents.

### ownershipClass

ownershipClass: string

The class name for the page's ownership level in the table of contents.

### sort

sort: number

The numeric sort value which orders this page relative to other pages in its
category.

### tocClass

tocClass: string

The class name for the page entry in the table of contents.

### `Optional`uncategorized

uncategorized?: boolean

Whether the page has not been assigned a category.

### viewClass

viewClass: string

The class name for the page entry in the pages view.