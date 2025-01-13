---
sidebar_position: 10

title: 🔊 Звуки
id: sounds
description: Воспроизводи звуки через скрипты
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

:::note Звуки
```kts
// Воспроизвести звук
playSound{
    sound = "<path/to/sound>" // Звук
    volume = <float> // Громкость
    pitch = <float> // Тональность
    pos = pos(<x>, <y>, <z>) // Позиция звука в мире
}

// Остановить звук
stopSound{"<sound>"}
```
:::

---

Пример:
```kts
playSound{
    sound = "hollowengine:random/kurica-sir-ananas"
    volume = 0.16f
    pitch = 1f
}
wait{5.sec}

stopSound{"hollowengine:random/kurica-sir-ananas"}
```
> или
```kts
playsound{
    sound = "hollowengine:world/ambience"
    volume = 0.20f
    pitch = 1.05f
    pos = pos(153, 34, 64)
}
```
