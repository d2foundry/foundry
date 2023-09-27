---
title: Search
description: Learn how to use our search feature
---

## Navigating Search

You can find our Search menu at the top of the screen, within the navigation bar. It can be opened by clicking into it, or opened by pressing <kbd>↓</kbd> while it is closed but the text cursor is active. You can close Search by pressing <kbd>Esc</kbd>, clicking out of it, or pressing the "Cancel" button in the top right on mobile.

Additionally, Search can be toggled open/closed at any time by pressing <kbd>Ctrl</kbd><kbd>K</kbd> or <kbd>⌘</kbd><kbd>K</kbd> depending on your OS.

You can select options using either your mouse or touch-enabled device, or by navigating through the search menu using the <kbd>↑</kbd> and <kbd>↓</kbd> keys to highlight an item, and using <kbd>Enter</kbd> or <kbd>Return</kbd> to confirm your selection.

## Basic Search

The base behavior of our search is to query for a weapon's name. As you type the weapon's name, results will be sorted by closest match.

We use a "fuzzy search" algorithm, which means you can input text that's relatively close to the weapon's actual name and it'll still match, which allows some tolerance for typos or misspellings.

In addition, this works across the weapon's entire name, so you can type in something like `adept` and get results of all the weapons with "Adept" in their names (although we also have a search filter for finding Adept weapons that includes Master-level variants such as Timelost, etc.)

## Filters

At the top of the Search menu, you will find a number of filters you can use to query for specific weapons.

Select a filter keyword, and you will see the available options for it. These are filtered by any other active filters, so only options that meet the conditions will show. Upon selecting one of these options, results shown at the bottom of the menu under the "Results" heading.

If you want to remove a filter after having added it, you can press <kbd>Backspace</kbd> to clear them out one by one from right-to-left, or by using the <kbd>←</kbd> and <kbd>→</kbd> keys to select a specific one and then pressing <kbd>Backspace</kbd>. Clearing the search through the "x" button off to the right will also clear all of your current filters.

### Combining Filters

As hinted at previously, you can select multiple filters to further narrow your search. Only weapons (and by extension, filters and their options) that match **all** of the filter conditions will be shown. This acts as as a logical **AND**.

This works with filters of different types (so you can combine filters for `frame` and `weapon`), and with multiple `trait` selections. If you want to find weapons that can roll both Demolitionist and Adrenaline Junkie, selecting a `trait` filter and finding each will work, however they may not be in different columns. If you would like to query for traits in _different_ columns, use the `trait_1` and `trait_2` filter.

It's also worth noting that since these work as a logical **AND**, choosing multiple filters of the same type won't be able to match anything (aside from traits, as we previously went over). This is because a weapon can't be both a Sidearm **AND** a Hand Cannon.

## Advanced Text Queries

Additionally, we support an advanced search syntax.

Entering text in the form of a `keyword:value` pair will work the same as selecting from the base filter/autocomplete flow. Same keywords, same values (and we'll still show you the available options). Any text you enter that's not paired in this syntax is treated as a search for the weapon's name.

If your query requires text with spaces in it, you can either escape it with double quotes, `weapon:"auto rifle"`, or you leave out the spaces, `weapon:autorifle`, which will work the same. In fact, since we use the same fuzzy search in our queries as we do with weapon names, you can leave it at `weapon:auto`, or some slightly misspelled version.

### Logical Operators

White space works as a logical **AND** operator for multiple key/value pairs, in the same way as selecting multiple filters does. However you can also use a comma-separated list of values. For example, `trait:demolitionist,adrenalinejunkie` or `trait:demo,junkie`.

A single pipe `|` works as a logical **OR** operator. Examples include:

- `rpm:390|450 weapon:pulserifle` to get Pulse Rifles across both of those subfamilies
- `energy:strand|stasis frame:lightweight` to get Lightweight Frame weapons that are one of the Darkness elements.

> **Note:** If you are querying for multiple values that contain spaces using an operator, you must wrap the entire list in quotation marks. `weapon:"sniper rifle|glaive"`

If you need to negate some part of a query, we have a **NOT** operator in the form of `!`. So to get all Shotguns that aren't Kinetic, you could do `weapon:shotgun energy:!kinetic`.

You can also combine these operators to create more powerful queries. Let us know what you find!

## Recent Searches

We show your last 3 recent searches near the top of the menu when you initially open it and there's no active search query. You can clear items from it by pressing the X button within the result item, which will then fill in its spot with an earlier previous search.
