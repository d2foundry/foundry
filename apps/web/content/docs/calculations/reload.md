---
title: Reload
description: Learn more about how we test and calculate weapon reload
---

## How we calculate reload speed

Reloading is a sequence of events that goes button (animation start) -> receive ammo -> able to fire. To get reload times only button press -> weapon firing is needed and therefore that is what we do. We use an automated script that fires, hits reload and holds down fire (with full auto on) until it shoots and then times that.

Reload formulas aren't actually quadratic as many think they are, they can be more appropriately and accurately represented by piecewise-linear functions. All that means is they can consist of one or more linear functions stitched together.

![Reload Formula Graph](https://raw.githubusercontent.com/oh-yes-0-fps/hot-metal/main/docs/faq/assets/reload_graph.png)
