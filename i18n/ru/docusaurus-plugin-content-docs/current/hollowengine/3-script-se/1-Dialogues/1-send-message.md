---
sidebar_position: 1

title: 📨 Сообщение в чат
id: chat-text
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

## Для команды

:::info сообщение для всех игроков на сервере
```kts
next {
    server.playerList.player.forEach { it.sendSystemMessage("<text>".mcText) }
}
```
:::

---