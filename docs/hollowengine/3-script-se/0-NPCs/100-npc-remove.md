---
sidebar_position: 100

title: 🗑️ Удаление НИПа
id: npc-delete
description: Свои неудачные идеи - выкидывай правильно!
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

:::info 🗑️ Убрать НИПа с мира 🗑️
```kts
<npcID>.despawn()
```
:::

---

Примеры:
```kts
// Ну типо лол. Не так и сложно-то...

val npc by NPCEntity.creating{ // НИП с именем Джордан
    name = "Джордан"
    ... // Другие параметры
}
...

npc.despawn() // Удалить НИПа "Джордан" из мира
```
