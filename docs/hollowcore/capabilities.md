---
sidebar_position: 3
id: capabilities
title: Universal Capabilities
description: Saves and syncs any of your data!
---

Have you decided to add a `mana bar` to the player or add a new `money` parameter or some other data to all mobs?
To do this, HollowCore provides a Capability system with automatic data storage and synchronization. 

## Creating a Capability

First, inherit from the `CapabilityInstance` class and add some serializable parameter. (with @Serializable annotation or inherited from `ru.hollowhorizon.hc.client.utils.nbt.INBTSerializable`)

Next, add the `@HollowCapabilityV2` annotation with the parameters of the object to which the Capability will be bound to all objects inherited from the specified one.
The available options are `Entity`, `BlockEntity`, `Level`.
Alternatively, you can create an interface and specify it as a target, so that all objects that implement that interface will have this Capability. 

#### Example
```kt
@HollowCapabilityV2(Entity::class)
class MoneyCapability : CapabilityInstance() {
    var money: Int by syncable(0) // Synchronizable parameter of type Int, all primitive types are also serializable
}
```

### Synchronized Lists

Create a delegate with `syncableList<T>()` then when the contents of the list are changed,
it will automatically be changed by the clients.

#### Example
```kt
@HollowCapabilityV2(Entity::class)
class DataCapability : CapabilityInstance() {
    var dataList by syncableList<String>()
}
```
:::tip
The constructor should be empty to avoid errors
:::

### Synchronized Maps

Create a delegate with `syncableMap<K, V>()`, where K is the key and V is the value, then when the contents of the Map are changed, it will automatically change for the clients.

#### Example
```kt
@HollowCapabilityV2(Entity::class)
class DataCapability : CapabilityInstance() {
    var dataList by syncableMap<Int, String>()
}
```

:::tip
The K parameter is recommended to be used only as a primitive type, if possible. In addition, it is recommended to make all objects of the same type, i.e. to use `syncableMap<Number, Tag>()` - it is not worth it, this can lead to bugs and crashes.
:::

## Using Capability

You can now get an instance of your Capability. When the data changes, it will be automatically updated on the client, as well as saved when exiting the game / stopping the server.

### Example
```kt
fun example(entity: Entity) {
    val capability = entity[MoneyCapability::class]

    val money: Int = capability.money // Get value

    capability.money = -100 // Change in value
}
```

## How do I change the server value while on the client?

To avoid vulnerabilities by default, this cannot be done, because then attackers could change the value of the notional money on the client side to `99999999` and it would be updated on the client as well.

But you can add a method for checking for a player (e.g. only for server moderators), for this you can override the method `canAcceptFromClient(player: Player): Boolean` inside the Capability. The check will be called only on the server.
Or make your own packages with additional data validation. 