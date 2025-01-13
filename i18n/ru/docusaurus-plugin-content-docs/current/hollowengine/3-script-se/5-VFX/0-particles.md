---
sidebar_position: 0

title: ✨ Партиклы
id: vfx-he_particles
description: Красива как бум сделала...
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

:::info Партиклы
```kts
particle {
    // Тут настройи партоклов...
}
```
:::

:::note Шаблон
```kts
particles {
  world = "<dimenstionID>" // Измерение, где нужно заспавинить
  particle = "<type>" // Тип парикла
  settings { // Расширенные настройки
    randomMotion() // Рандомное направление
    randomOffset() // Рандомное смещение
    spin() // Поворот частицы
    color() // Цвет частицы
    transparency() // Прозрачность
    gravity = <float> // Гравитация
    noClip = <boolean> // Колизия
    spritePicker = SpritePicker.<Type> // Режим смены спрайтов
    lifetime = <Int> // Время жизни частицы, в тиках
    
    spawn() // Спавн частиц
  }
}
```
:::

---

## Создание партиклов

:::note Простые настройки
```kts
world = "<dimenstionID>" // Измерение, в котором нужно заспавнить партиклы
```
```kts
particle = "<type>" // Тип партиклов:
// - hc:star
// - hc: circle
```
:::

---

## Расширенные настройки

:::note Расширенные настройки

```kts
  settings{
    // Здесь расширенные настройки...
  }
```

### Рандомное направление (Движение в случайном направлении)
```kts
    // По осям X, Y, Z (детальная)
    randomMotion( <x>, <y>, <z> ) // Double
    
    // или
    
    // По Горизонтали и Вертикали
    randomMotion( <horizontal>, <vertical> ) // Double
    
    // или
    
    // По всем осям XYZ (общая)
    randomMotion( <all> ) // only Double
```
---
### Рандомное смещение (Появление частиц в случае радиусе от центра спавна частиц)
```kts
    // По осям X, Y, Z (детальная)
    randomOffset( <x>, <y>, <z> ) // Double
    
    // или
    
    // По Горизонтали и Вертикали
    randomOfset( <horizontal>, <vertical> ) // Double
    
    // или
    
    // По всем осям XYZ (общая)
    randomOffset( <all> ) // Double
```
---
### Поворот (С какой скоростью будет поворачиваться частица)
```kts
    // Крутить частицы от -> до
    spin( <start>, <end> ) // Float
    // - start - Стартовое значение
    // - end - Конечное значение
    
    // или
    
    // Крутить частицу от -> среднее -> до
    spin( <start>, <middle>, <end> ) // Float
    // - start - Стартовое значение
    // - middle - Среднее зачение
    // - end - Конечное значение
    
    // Дополнительные параметры
    spin(..., <здесь>
        // Интерполяция от -> среднее
        startToMiddleEasing = Interpolation.<InterpolationType>
        
        // Интерполяция среднее -> до
        middleToEndEasing = Interlopation.<InterpolationType>
    )
```

> `Interpolation.<Type>` - [Интерполяция](../9-Tools/99-interpolations)
---
### Цвет
```kts
    // Изменения цвета от startR/G/B -> до endR/G/B
    // Значения измеряются в процентах. 1f = 100%, 0.5f = 50%, 0f = 0%.
    color( <startR>, <startG>, <startB>, <endR>, <endG>, <endB> ) // Float
    
    // Дополнительные параметры
    color(..., <здесь>
        // Интерполяция от -> среднее
        colorCurveEasing = Interpolation.<Type>
    )
```

> `Interpolation.<Type>` - [Интерполяция](../9-Tools/99-interpolations)
---
### Прозрачность
```kts
    // Изменения прозрачности от startValue -> до endValue
    // Значения измеряются в процентах. 1f = 100%, 0.5f = 50%, 0f = 0%.
    transparency( <start>, <end> ) // Float
    
    // или
    
    // // Изменения прозрачности от startValue -> middleValue -> до endValue
    transparency( <start>, <middle>, <end> ) // Float
    
    // Дополнительные параметры
    transperency(..., <здесь>
        // Интерполяция от -> среднее
        startToMiddleEasing = Interpolation.<InterpolationType>
        
        // Интерполяция среднее -> до
        middleToEndEasing = Interlopation.<InterpolationType>
    )
```
---
### Гравитация
```kts
    // Сила гравитации
    gravity = <f> // Float
```
---
### Коллизия
```kts
    // Колизия с блоками
    noClip = <false/true> // Boolean
```
---
### Режим смены кадров(спрайтов)
```kts
    // В каком режиме будут меняться кадры
    spritesPicker = SpritesPicker.<Type>
    // - SpritesPicker.FIRST_INDEX - Первый кадр
    // - SpritesPicker.LAST_INDEX - Последний кадр
    // - SpritesPicker.WHIT_AGE - Менять в зависимости от время жизни частицы
    // - SpritesPicker.RANDOM_SPRITE - Рандомный(Случайный) кадр
```
---
### Спавн партоклов
```kts
    // Заспавнить 1 частицу на координатах XYZ
    spawn( <x>, <y>, <z> ) // Double
    
    // или
    
    // Заставить count кол-во частиц на координатах XYZ
    repeat( <x>, <y>, <z>, <count> ) // Double, Double, Double, Int
```
:::

---

Примеры:
```kts
particle{
    world = "overworld"
    particle = "hc:star"
    settings{
        randomMotion(16.53, -1.42, 0.324)
        randomOffset(10.5, 0.5, -10.5)
        spin(0f, 90f, 360f, startToMiddleEasing = Interpolation.QUAD_IN, middleToEndEasing = Interpolation.QUAD_OUT)
        color(0f, 0f, 0f, 1f, 0.23f, 0.93f, colorCurveEasing = Interpolation.QUAD_IN_OUT)
        transparency(1f, 0.8f, 0f, startToMiddleEasing = Interpolation.QUAD_IN, middleToEndEasing = Interpolation.QIAD_OUT)
        gravity = 0.1f
        noClip = false
        spritesPicker = SpritesPicker.WHIT_AGE
        repeat(0.5, 0.5, 0.5, 10000)
    }
}
```
