---
sidebar_position: 0
id: serialization
title: Сериализация в NBT
description: Больше никакой мороки!
---

## Подготовка класса

Итак, прежде всего создайте класс, который в последствии можно будет сериализовать в NBT.

### Пример
```kt
@Serializable
class User(
    val name: String,
    val age: Int,
    val address: String,
    val friends: List<String>
)
```

## Сериализовать простой класс

Теперь мы можем запросто преобразовать этот класс в NBT:
```kt
import ru.hollowhorizon.hc.client.utils.nbt.NBTFormat
import ru.hollowhorizon.hc.client.utils.nbt.serialize

val user = User("Виталик", 21, "Млечный Путь, Земля", arrayOf("Халва", "Алгоритм", "Бармакс"))

val nbt = NBTFormat.serialize(user) // В результате вы получите объект класса net.minecraft.nbt.Tag

/* Выглядеть оно будет примерно так: 
{
    address: "Млечный Путь, Земля",
    age: 21,
    friends: [
        "Халва",
        "Алгоритм",
        "Бармакс"
        ]
    }
 */
```

## Десериализовать простой класс

Предположим у нас есть некоторый NBT тэг, преобразуем его обратно в объект класса User:
```kotlin
import ru.hollowhorizon.hc.client.utils.nbt.NBTFormat
import ru.hollowhorizon.hc.client.utils.nbt.deserialize

val tag: Tag //Это наша переменная с NBT, получить её вы можете откуда хотите

val user = NBTFormat.deserialize(tag) // В результате вы получите объект класса User
```

## Сериализация с наследованием
Иногда может потребоваться сериализовать класс или интерфейс, у которого могут быть потомки.
В этом случае вам нужно добавить для каждого потомка аннотацию `@Polymorphic(Parent::class)`, где Parent - ваш исходный
класс от которого происходит наследование.
Не забудьте её импортировать: `import ru.hollowhorizon.hc.api.utils.Polymorphic`.

В качестве примера можете посмотреть как в HollowCore реализованы [виджеты](https://github.com/HollowHorizon/HollowCore/blob/1.19.2/src/main/java/ru/hollowhorizon/hc/common/ui/Widget.kt).
