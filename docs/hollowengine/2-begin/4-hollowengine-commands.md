---
sidebar_position: 4
id: commands
title: 📄 Commands in Hollow Engine
description: Not to be confused with Team!
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

At the moment, there are a few commands to simplify scripting in the mod.

| Command                       | Params                                                 | Description                                                                                                                                                          |
|-------------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/hollowengine pos`           | -                                                      | Copies code to indicate the position of the block you are looking at.                                                                                                |
| `/hollowengine hand`          | -                                                      | Copies code to indicate the item in your hand. As well as its quantity and NBT tags                                                                                  |
| `/hollowengine start-script`  | \<The player, or rather his team\>, \<Path to script\> | Runs a script for the specified player's team. Specify the full path to the file starting from the `scripts` folder, for example: `scripts/my_script.se.kts`.        |
| `/hollowengine model`         | \<ResourceLocation\>                                   | Shows what animations and textures the specified model contains.                                                                                                     |
| `/hollowengine active-events` | -                                                      | Outputs a list of running events **for the player who invoked the command**.                                                                                         |
| `/hollowengine compile-all`   | -                                                      | Compiles all your scripts so they run instantly.                                                                                                                     |
| `/hollowengine stop-script`   | \<The player, or rather his team\>, \<Path to script\> | Принудительно завершает скрипт для команды указанного игрока. Указывать следует полный путь к файлу начиная с папки `scripts`, например: `scripts/my_script.se.kts`. |