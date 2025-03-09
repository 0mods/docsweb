---
sidebar_position: 2
id: packets
title: Universal Packets
description: Everything is automated here!
---

HollowCore provides you with a convenient packet system,
you need to create a serializable class with data and inherit the method to process the data on the other side.

## Creating a Class

So, first, create a class that will be serializable and implement the `HollowPacket` interface in it,
where the generic parameter is your class.
Then add the annotation `@HollowPacketHandler` and optionally specify the side to which the packet can be sent.
(If you don`t specify it, the packet can be sent from the client to the server, or vice versa.)

:::warning
In versions prior to **2.2.8a** (including 2.2.8), HollowPacketHandler is called HollowPacketV2,
and HollowPacket is called HollowPacketV3
:::

### Example
```kt
@HollowPacketHandler(HollowPacketHandler.Direction.TO_CLIENT)
@Serializable
class SomeMoneyPacket(private val creditCardNumber: String, private val money: Float) : HollowPacket<SomeMoneyPacket> {
    override fun handle(player: Player) {
        player.sendSystemMessage("Player ${player.name.string} has ${creditCardNumber} money on his card: ${money}".literal)
    }
}
```

## Sending a packet

To send a packet, create an object in your packet and call one of the following methods:
- `send()` - send the packet to the server.
- `send(player1: Player, player2: Player, ...)` - send a packet from the server to specific players.
- `sendTrackingEntity(entity: Entity)` - send the packet to everyone who can see a particular mob.
- `sendAllInDimension(level: Level)` - send the packet to all players in the specified dimension.

### Example
```kt
val packet = SomeMoneyPacket("2200########", -120000) // Create a package (see previous example)

packet.send(player) // Send the package to a specific player
```

## Batch Processing

To process a packet, you only need to implement the `handle(player: Player)` method in your class with the packet, writing what will happen when the packet arrives at the client. Here, player is the player variable.
If the packet came from the server to the client, then the player is of type LocalPlayer and indicates the player to whom the packet arrived.
If the packet came from the client to the server, then the player is of type ServerPlayer and indicates the player who sent the packet.

Example

```kt
// Inside your class that implements the interface: HollowPacket. 
override fun handle(player: Player) {
    player.sendSystemMessage("Player has ${player.name.string} on the card $creditCardNumber money: $money".literal)
}
```

## Request Packet and Coroutines

Sometimes you may need to make one or more requests to the server and get some data from it. HollowCore has a separate sub-type of package specialized just for such tasks.

### Creating a Request Package

First, create a class with the parameters you want to get from the server and inherit the abstract `RequestPacket<T>` class, where T is your packet. 
After that, inherit the `retrieveValue(player: ServerPlayer)` function, in which you need to get the parameters you need and write them to the class parameters.

#### Example
```kt
@HollowPacketHandler
@Serializable
class GiveMyMoneyPacket(private var money: Float = 0f) : RequestPacket<SomeMoneyPacket> {
    override fun retrieveValue(player: ServerPlayer) {
        money = MySuperCoolDatabase[player].playerMoney
    }
}
```

### Sending and receiving data via coroutines

Now you can create a packet on the client with template data (it will not be used on the server) and call the suspend `request()` method to send a request and wait for a response, respectively.

#### Example
```kt
//Better use your own coroutine handler
GlobalScope.launch {
    val packet = GiveMyMoneyPacket() // Create a packet (see previous example)

    val result = packet.request() // Call the suspend method to send the request and get a response. The coroutine will be suspended until you receive a response, and as a result, you will receive a packet from the server with already filled data

    val money = result.money // Then do what you want with this data.
}
```
