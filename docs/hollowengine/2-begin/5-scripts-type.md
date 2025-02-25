---
sidebar_position: 5
id: script-type
title: 🧾 Script types
description: The very foundation of fashion
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

At the moment, there are several types of scripts responsible for different parts of the game. Some control NPCs and players, others add crafts, others add new items and blocks to the game or handle events within the game.

# 📓 Story Event | `.se.kts`

:::info Script `Story Event`

This type of script is responsible for interacting with the player, the world and the team. This script is used to build your main plot.
- Note: __**In order for this type of script to be detected by the mod, you need to install FTBTeams and all its additional libraries**__.

:::
> 
---

# ⚒️ Content | `.content.kts`

:::info `Content` script

> This type of script will help you in:  
> - Creating your own crafting recipes for workbench and mechanisms of different mods.
> - Change the name of the item.

:::

---

# 🪄 Mod | `.mod.kts`

:::info Script `Modification`

This type of script will help you modify the game. It allows you to do the same things as full-fledged mods:
- Adding items, blocks, mobs, dimensions, inventories, etc.
- Processing and creating events.
- Interaction with other mods.
:::

---

# 📖 Library | `.kts`

:::info `Library` script.

This type of script allows you to use it to facilitate working with other scripts, for example you can create some set of standard methods and variables and use them in other scripts.
:::

---