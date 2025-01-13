---
sidebar_position: 5

title: 👪 Группы и действия
id: npc-groups
description: Контролировать целый посёлок всего одной командой
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

## Создать группу

:::note Чтобы добавить НИПов (2 и более) в 1 группу
```kts
val <groupID> = arrayOf(<npcID1>, <npcID2>, <npcID3>, ...)
```
:::

## Действия для группы

:::note Чтобы дать действие для группы
```kts
<groupID>.forEach{it <action>}>
// action - это те же действия что и для одного НИПа. Но т.к. это группа, мы даёт это действие каждому НИПу, кто находится в этой группе
```
> `action` - Те же действия, что и [для НИПов](2-npc-actions), по без `<npcID>` в начале.

Группа из НИПов идёт](../../.resourses/group-npcs-moveToPos.gif)

:::

---

## Примеры:
```kts
val h0 by NPCEntity.creating{ // НИП с именем 0
    name = "0"
    ... // Другие параметры
}
val h1 by NPCEntity.creating{ // НИП с именем 1
    name = "1"
    ... // Другие параметры
}

val humans = arrayOf(h0, h1) // Группа humans, которая состоит из НИПа с ID - h0 и h1

humans.forEach{ it moveTo team }
```
