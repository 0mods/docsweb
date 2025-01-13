---
sidebar_position: 4
id: events
title: Универсальные События
description: Как в Forge, но для любых загрузчиков модов!
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

В игре постоянно проиходят всякие события, HollowCore позволяет ловить некоторые из них или даже отменять, если это возможно.

## Список всех событий

Все события так сразу и не найдёшь, некоторые из них могут предоставляться другими модами или быть созданы вами. Но основные из них вы можете найти в пакете `ru.hollowhorizon.hc.common.events`.

## Создание обработчика событий

Для начала создайте метод и в качестве первого аргумента укажите класс нужного вам события. После чего добавьте аннотацию `@SubscribeEvent`, при необходимости в её параметрах укажите приоритет. Чем он ниже, тем раньше будет вызван в сравнении с событиями других модов. (Это нужно чтобы вы могли отменить событие раньше других модов, если вам это очень важно)

:::info Пример
```kt
@SubscribeEvent
fun onPlayerJoin(event: PlayerEvent.Join) { // Метод запустится при входе игрока на сервер.

}
:::

## Создание своих событий

Если вам нужно создать своё события, то реализуйте интерфейс `ru.hollowhorizon.hc.common.events.Event` и при необходимости `ru.hollowhorizon.hc.common.events.Cancelable` (Если ваше событие можно будет отменить)

После чего для вызова события создайте новый экземпляр класса и вызовите метод `EventBus.post(event)`, где event - экземпляр вашего класса.
Если ваше событие кто-то отменил, то значение переменной `isCanceled` изменится на `true`.

:::info Пример
```kt
class UniverseCollapseEvent(val message: String): Event, Cancelable {
    override var isCanceled: Boolean = false // Начальное значение отменяемого события должно быть - false (иначе смысл его отменять, не так ли?)
}

// Пример запуска вашего события
fun somewhereInYourCode() {
    val event = UniverseCollapseEvent("Ой...") // Создаём событие

    EventBus.post(event) // Вызываем событие

    if(event.isCanceled) return // Если событие отменено, то завершаем метод

    Minecraft.crash(...) // Событие не завершено, делайте дальше, что хотите
}

// Пример использования вашего события
@SubscribeEvent
fun onUniverseCollapse(event: UniverseCollapseEvent) {
    event.isCanceled = true
}
:::