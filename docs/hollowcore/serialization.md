---
sidebar_position: 0
id: serialization
title: Serialization in NBT
description: No more hassle!
---

## Preparing the Class

So, first, create a class that can later be serialized to NBT.

### Example
```kt
@Serializable
class User(
    val name: String,
    val age: Int,
    val address: String,
    val friends: List<String>
)
```

## Serialize a simple class

Now we can easily convert this class to NBT:
```kt
import ru.hollowhorizon.hc.client.utils.nbt.NBTFormat
import ru.hollowhorizon.hc.client.utils.nbt.serialize

val user = User("Vitalik", 21, "Milky Way, Earth", arrayOf("Halva", "Algorithm", "Barmax"))

val nbt = NBTFormat.serialize(user) // As a result, you will get an object of the class net.minecraft.nbt.Tag

/* It will look something like this: 
{
    address: "Milky Way, Earth",
    age: 21,
    friends: [
        "Halva",
        "Algorithm",
        "Barmax"
    ]
}
*/
```

## Deserialize a simple class

Suppose we have some NBT tag, convert it back to an object of the User class:
```kotlin
import ru.hollowhorizon.hc.client.utils.nbt.NBTFormat
import ru.hollowhorizon.hc.client.utils.nbt.deserialize

val tag: Tag //This is our variable with NBT, you can get it from anywhere

val user = NBTFormat.deserialize(tag) // As a result, you will get an object of the User class
```

## Serialization with inheritance
Sometimes you may want to serialize a class or interface that may have children.
In this case, you need to add an annotation for each child `@Polymorphic(Parent::class)`, where `Parent` is your original
the class from which the inheritance originates.
Remember to import it: `import ru.hollowhorizon.hc.api.utils.Polymorphic`.

As an example, you can see how HollowCore implements [widgets](https://github.com/HollowHorizon/HollowCore/blob/1.19.2/src/main/java/ru/hollowhorizon/hc/common/ui/Widget.kt).