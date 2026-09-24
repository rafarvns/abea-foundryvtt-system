---
title: "CategoryBrowserConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.CategoryBrowserConfiguration.html"
category: "interfaces"
---

# Interface CategoryBrowserConfiguration

interface CategoryBrowserConfiguration {  
Â Â Â Â [initialCategory](#initialcategory): string | null;  
Â Â Â Â [packageList](#packagelist): boolean;  
Â Â Â Â [subtemplates](#subtemplates): {  
Â Â Â Â Â Â Â Â category: string;  
Â Â Â Â Â Â Â Â filters: string | null;  
Â Â Â Â Â Â Â Â sidebarFooter: string | null;  
Â Â Â Â };  
}

##### Index

### Properties

[initialCategory](#initialcategory)
[packageList](#packagelist)
[subtemplates](#subtemplates)

## Properties

### initialCategory

initialCategory: string | null

The initial category tab: a `null` value will result in an initial active tab
that corresponds with the first category by insertion order.

### packageList

packageList: boolean

Where this application displays is a list of tagged FVTT packages

### subtemplates

subtemplates: {  
Â Â Â Â category: string;  
Â Â Â Â filters: string | null;  
Â Â Â Â sidebarFooter: string | null;  
}

Additional Template partials for specific use with this class

#### Type Declaration

* ##### category: string

  The markup used for each category: required to be set by any subclass
* ##### filters: string | null

  Optional template for secondary filtering (aside from text search)
* ##### sidebarFooter: string | null

  Optional sidebar footer content