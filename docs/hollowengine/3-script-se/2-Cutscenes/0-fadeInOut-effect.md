---
sidebar_position: 0

title: 🌑 Затемнения экрана
id: cutscene-black_screen
description: Устрой эпилепсию
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

:::info ...
```kts
fadeIn { // Вход
    text = "<text1>" // Большой текст
    subtitle = "<text2>" // Маленький текст под большим
    texture = "<path/to/texture>" // Текстура затемнения
    color = 0х<HEX> // Цвет текстуры
    time = <time> // Время перехода
}

// Здесь вы можете ставить всякие дейстия, к примеру - Заспавнить NPC...

fadeOut { // Выход
    text = "<text1>" // Большой текст
    subtitle = "<text2>" // Маленький текст под большим
    texture = "<path/to/texture>" // Текстура затемнения
    color = 0x<HEX> // Цвет текстуры
    time = <time> // Время перехода
}
```
> Обозначения:
> - `time` указывается в:
>  - `<num>` - Время в тиках.
>  - `<num>.sec` - Время в секундах.
>  - `<num>.min`, - Время в минутах.
>  - `<num>.hour`, - Время в часах.
>  - Так же вы можете совмещать их, используя `+`, пример: `1.hour + 15.min + 30.sec + 45`.
> - `0xHEX` - Простой цвет в кодировке HEX. Нужно в начале написать `0x` и после только 5 цифр.
:::

---

Примеры:
```kts
fadeIn{
    text = "Давным"
    subtitle = "давно..."
    texture = "hc:textures/gui/jecka_full.png"
    color = 0xffffff
    time = 1.sec
}

... // Что-то допустим тут есть

fadeOut{
    text = "А может быть"
    subtitle = "и не так давно..."
    textures = "hc:texture/entity/hilda_regular_atlas,png"
    color = 0xffffff
    time = 1.sec
}
```