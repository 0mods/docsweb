---
sidebar_position: 1
id: registries
title: Universal Registration
description: Made thanks to Kotlin!
---

Those who have ever written mods for different loaders have probably noticed that each of them has its own unique tools
for registering game objects
(blocks, items, mobs, etc.)
HollowCore allows you
not to worry about registering objects for each loader by providing a convenient registration system.

## Creating a New Registrar

So, first, create an object class inherited from `HollowRegistry`, in which all registrations will take place.

### Example
```kt
object ModItems : HollowRegistry() {

}
```

## Registration of a game object

HollowCore allows you to register almost all game objects.
It determines the type of registrar automatically;
you need to create a delegate using the `register(location: ResourceLocation, () -> T): RegistryObject<T>` method,
where T is the class of your object.

### Example
```kt
object ModItems : HollowRegistry() {
    val MY_ITEM by register("modid:my_item".rl) { // .rl is short for ResourceLocation. 
        MyItem() // The object of your item
    }
}
```

All other game objects are registered in the same way, pass the desired object.

:::tip
If you don't want to keep specifying `modid:` for every object you register,
you can add your mod id to the HollowRegistry constructor:
```kt
object ModItems : HollowRegistry("modid") {
    val MY_ITEM by register("my_item") {
        MyItem() // The object of your item
    }
}
```
:::

## Using Game Objects

Now that the object is registered, you can retrieve it using the `<T>RegistryObject.get()` method.

### Example
```kt
fun getMyItem(): MyItem {
    return ModItems.MY_ITEM.get()
}
```