---
sidebar_position: 2

title: 👪 Действия для команды
id: player-team_actions
description: Командуй собой же (или над своими...)
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

## Телепортировать команду

:::note телепортировать команду
```kts
team.tpTo{
    pos = pos(<x>, <y>, <z>) // Координаты
    vec = vec(<pitch>, <yaw>) // Поворот взгляда
    world = "<dimensionID>" // Измерение
    // Если указанное вами измерение относится к Ванилле, то не нужно указывать modID
}
```
:::

---

## Собрать предметы

:::note Собрать предметы
```kts
collectItems {
    +item("modid:item", 13, "{nbt}") // Предмет, можно получить код для предмета в руке командой `/hollowengine hand`.
}
```
:::

---

## Модифицировать команду

:::note Все модификации пишутся...
```kts
team.modify{
    // Здесь
}
```

> Параметры:
```kts
    // здоровье
    setHealth(<float>) // Установить здоровье(HP)
    setMaxHealth(<float>) // Установить Макс здоровье(HP)
    addHealth(<float>) // Добавить здоровья(HP)
    
    // Броня
    equipHelmet( item(<itemID>) ) // Экипировать шлем
    equipChestplate( item(<itemID>) ) // Экипировать нагрудник
    equipLeggings( item(<itemID>) ) // Экипировать поножи
    equipBoots( item(<itemID>) ) // Экипировать ботинки
    // Если же нужно снять броню, укажите на месте <itemID> - minecraft:air
    
```
:::

---

Примеры:
```kts
team.tpTo{
    pos = pos(0.5, -64, 0.5)
    vec = vec(0f, 0f)
    dim = dim("end")
}

team.modify{
    setHealt(10f) // Уровень здоровья теперь = 10 ед
    setMaxHealt(30f) // Макс уровень здоровья теперь = 30 ед
    addHealt(4f) // Добавить 5 ед жизни
    
    equipHelmet( item("iron_helmet") ) // Одеть на команду "Железный шлем"
    equipChestplate( item("diamond_chestplate") ) // Одеть на команду "Алмазный нагрудник"
    equipLeggings( item("netherite_leggings") ) // Одеть на команду "Незеритовые поножи"
    equipBoots( item("leather_boots") ) // Одеть на команду "Кожаные ботинки"
}
```
