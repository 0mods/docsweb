---
sidebar_position: 1

title: 🎥 Камера
id: cutscene-camera
description: Запусти камеру в космос!
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

Прежде всего загляните во вкладку мода, там есть инструмент "Камера", он вам поможет проще создавать плавные пути по точкам.

## Создаём путь для камеры

> Нажав правой кнопкой мыши с камерой Вы добавите новую точку. (координаты + поворот)

> Для поворота по оси z Вы можете использовать клавиши `-` и `+` соответственно.

:::info Управление предметом
> - `ПКМ` - установить новую точку
> - `ЛКМ` - Удалить *ближайшую* к вам точку
> - `Shift + ПКМ` - Сохранить путь

После сохранения Вам будет предложено ввести название файла, рекомендуем использовать только английские буквы нижнего регистра, цифры и символ `_`.
Путь сохраняется в `<Game Folder>/hollowengine/camera/`.
:::

## Запуск камеры

Прежде всего вам нужно перейти в пространство настройки камеры:
```kts
camera {
    // Здесь будет весь ваш код с камерой
}
```

### Статичный режим

Статичный режим - это когда камера просто стоит на месте и смотрит в одну точку.
:::info Статичный режим камеры:
```kts
static(time, pos(x, y, z), pos(pitch, yaw, roll))
```
> Параметры:
> - `time` - время в тиках
> - `pos(x, y, z)` - координаты точки по x, y, z
> - `pos(pitch, yaw, roll)` - поворот камеры
> - ![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Yaw_Axis_Corrected.svg/1920px-Yaw_Axis_Corrected.svg.png)
:::

### Режим сплайна

Режим сплайна - это когда камера движется по некоторой кривой в пространстве.

:::info Режим сплайна камеры:
```kts
spline(time, path, interpolation, enableBoarders, boardersInterpolation)
```
> Параметры:
> - `time` - время в тиках
> - `path` - путь к файлу пути (то название, которое вы указывали при сохранении пути), не забудьте указать тип файла: `.nbt`.
> - (опционально) `interpolation` - Ускорение по мере движения (см. [Список интерполяций](../9-Tools/99-interpolations.mdx), по умолчанию: `Interpolation.LINEAR`)
> - (опционально) `enableBoarders` - Добавлять ли кинематографичные рамки по краям. (по умолчанию: `true`)
> - (опционально) `boardersInterpolation` - Ускорение при появлении и исчезании рамок. (см. [Список интерполяций](../9-Tools/99-interpolations.mdx), по умолчанию: `Interpolation.LINEAR`)
:::

### Режим сущности

Режим сущности - это когда камера следит за некоторым мобом или нпс.

:::info Режим наблюдения за сущностью:
```kts
entity(time, pos(x, y, z), mob)
```
> Параметры:
> - `time` - время в тиках
> - `pos(x, y, z)` - координаты точки, откуда будет идти наблюдение по x, y, z
> - `mob` - объект моба или ваша переменная НИПа.
:::
---

Примеры:
```kts
camera {
    static(10.sec, pos(0, 24, 4), pos(90f, 0f, 0f))
    spline(50.sec, "my_camera.nbt", Interpolation.SINE_OUT, true, Interpolation.SINE_IN_OUT)
    entity(5.sec, pos(0, 24, 4), npc)
}
```