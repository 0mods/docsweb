---
sidebar_position: 3

title: 🕴️ Менеджер ивентов
id: tools-e_manager
description: Нужно же куда-то записывать свои дела...
---

:::info Интерфейс открывается...
> Нажатием кнопку или `Ё`.
:::

---

Примечание: чтобы уметь указывать игроков, рекомендуем ознакомиться со вкладкой [Команды и Игроки](./../3-Player/0-players.mdx)

:::note Менеджер ивентов
```kts
// Добавить в список
team.progressManager.addMessage { "<text>" }

// Убрать из списка
team.progressManager.removeMessage { "<text>" }

// Очистить список
team.progressManager.clear()
```
:::

---

## Примеры
:::info -
```kts
val team by server.players

team.progressManager.addMessage{"В добрый путь, молодец!"} // Новый ивент в список

team.progressManager.removeMessage{"В добрый путь, молодец!"} // Удалить из списка ивентов по тексту

```
:::