---
title: "ProseMirrorMenuResizeState | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.prosemirror.types.ProseMirrorMenuResizeState.html"
category: "interfaces"
---

# Interface ProseMirrorMenuResizeState

interface ProseMirrorMenuResizeState {  
Â Â Â Â [hiddenWidth](#hiddenwidth): number;  
Â Â Â Â [menus](#menus): Record<string, HTMLElement>;  
Â Â Â Â [observer](#observer): ResizeObserver;  
Â Â Â Â [sizes](#sizes): {  
Â Â Â Â Â Â Â Â elements: HTMLElement[];  
Â Â Â Â Â Â Â Â menu: string;  
Â Â Â Â Â Â Â Â weight: number;  
Â Â Â Â Â Â Â Â width: number;  
Â Â Â Â }[];  
}

##### Index

### Properties

[hiddenWidth](#hiddenwidth)
[menus](#menus)
[observer](#observer)
[sizes](#sizes)

## Properties

### hiddenWidth

hiddenWidth: number

The widths of menu items that are currently hidden.

### menus

menus: Record<string, HTMLElement>

Cached references to rendered drop-down menu entries.

### observer

observer: ResizeObserver

The resize observer.

### sizes

sizes: { elements: HTMLElement[]; menu: string; weight: number; width: number }[]

Cached references to
rendered menu items and their sizes, ordered by weight and grouped by
menu.