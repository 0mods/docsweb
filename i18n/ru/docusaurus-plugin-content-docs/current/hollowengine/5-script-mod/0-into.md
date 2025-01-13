---
sidebar_position: 0
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

# ↳ Модифицируем игру ⚒️

Итак, Вы хотите добавить новые блоки, предметы, мобов, измерения, интерфейсы или что-то ещё? - Тогда Вы попали в нужный раздел.

:::caution Примечание
> Скрипты этой категории пишутся в файлах типа `.mod.kts`!
:::

---

Прежде всего у этого вида скрипта есть 2 ключевых особенности.

## Метод инициализации мода | `init()`

Каждый скрипт этого формата должен иметь этот метод, хотя бы пустой.

```kts
fun init() {
    // Ваш код
}
```

В нём пишутся все действия, которые будут запущены вместе с самим движком, это могут быть:
- Добавление контента
- Создание конфигов
- Регистрация чего либо

Примечание: этот метод вызывается только 1 раз при запуске игры, **перезапустить его командами нельзя**!

---

## Методы-события

Вы можете добавить `методы-события`, которые будут запускаться при определённых событиях в игре, для этого метод должен содержать 1 параметр - само событие, а также аннотацию `@SubscribeEvent`, **без неё метод не будет запускаться сам**!
Кроме того, при изменении этих методов вы можете прописать `/reload` и изменения появятся в игре!

Пример:
```kts
import net.minecraftforge.client.event.ScreenEvent
import net.minecraftforge.eventbus.api.SubscribeEvent
import ru.hollowhorizon.hc.client.utils.mc
import ru.hollowhorizon.hollowengine.common.scripting.story.nodes.util.PostEffect

@SubscribeEvent
fun onScreenOpen(event: ScreenEvent.Opening) {
    mc.gameRenderer.loadEffect(PostEffect.BLUR)
}
```