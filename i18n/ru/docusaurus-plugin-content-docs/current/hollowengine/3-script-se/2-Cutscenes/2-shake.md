---
sidebar_position: 2

title: 📽️ Тряска камеры
id: cutscene-shake
description: Немного тряски - не помещает)
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

:::info Шаблон
```kts
shake {
    duration = <time> // Длительность тряски, в тиках
    intensity1 = <float> // Сила в начале
    intensity2 = <float> // Сила в середине
    intensity3 = <float> // Сила в конце
    intensityStart = Interpolation.<Type> // Интерполяция начало -> середина
    intensityEnd = Interpolation.<Type> // Интерполяция середина -> конец
    targets = listOf() // Что должно смещаться
}
```
:::

> `Interpolation.<Type>` - [Интерполяция](../9-Tools/interpolations)

:::note Что должно двигаться
```kts
targets = listOf(ShakeTarget.<type>)
// - ShakeTarget.POS // Изменение позиции
// - ShakeTarget.ROT // Изменение поворота
// - ShakeTarget.HAND // Изменение положение руки от первого лица
```
:::

---

Примеры:
```kts
shake{
    duration = 10.sec // Время эффекта
    intensity1 = 1f // Сила вначале
    intensity = 2f // Сила в середине
    intentisy = 0.25f // Сила в конце
    intensityStart = Interpolation.QUAD_IN // Интерполяция начало -> середина
    intensityEnd = Interpolation.QUAD_OUT // Интерполяция середина -> конец
    targets = listOf(ShakeTarget.POS, ShakeTarget.ROT, ShakeTarget.HAND) // На что влияет тряска
}
```