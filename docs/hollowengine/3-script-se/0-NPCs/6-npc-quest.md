---
sidebar_position: 6
title: 📃 Задание
id: npc-quests
description: Новые задания
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

:::info Если нужно что-то сдать НИПу, чтобы сюжет пошёл дальше
```kts
<npcID>.requestItems {
    // Здесь пишем то, что нужно сдать НИПу
}
```
:::

## Принести предмет

:::note Принести определённый предмет
```kts
    +item("<itemID>", <count>) // Принести [itemID] в количестве [count]
```
> Обозначения:
> - `itemID` - Его можете получить, взяв нужный предмет в руки и прописав команду `/hollowengine hand` и после оно скопируется.
> - `count` - Кол-во предметов.
:::

---

## Примеры:
```kts
val npc by NPCEntity.creating{ // НИП с именем - Жорка
    name = "Жорка"
    ... // Другие параметры
}

npc.requestItems{
    +item("oak_planks", 15) // Нужно отдать 15 шт Дубовых досок
    +item("bedrock", 1) // Нужно отдать 1 шт Бедрока
}
```
