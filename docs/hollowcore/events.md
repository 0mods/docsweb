---
sidebar_position: 4
id: events
title: Universal Events
description: Like in Forge, but for any mod loaders!
---

All sorts of events are constantly happening in the game, HollowCore allows you to catch some of them or even cancel them if possible.

## List of all events

You can't find all the events right away, some of them may be provided by other mods or created by you. But you can find the main ones in the 'ru.hollowhorizon.hc.common.events' package.

## Creating an Event Handler

First, create a method and specify the class of the event you want as the first argument. After that, add the '@SubscribeEvent' annotation, if necessary, specify the priority in its parameters. The lower it is, the earlier it will be summoned compared to the events of other mods. (This is so that you can cancel the event before other mods if it is very important to you)

### Example
```kt
@SubscribeEvent
fun onPlayerJoin(event: PlayerEvent.Join) { // The method will run when a player logs in to the server.

}
```

## Creating Your Own Events

If you need to create your own events, implement the interface 'ru.hollowhorizon.hc.common.events.Event' and, if necessary, 'ru.hollowhorizon.hc.common.events.Cancelable' (If your event can be canceled)

Then, to raise the event, create a new instance of the class and call the 'EventBus.post(event)' method, where the event is an instance of your class.
If someone cancels your event, the value of the 'isCanceled' variable will change to 'true'.

### Example
```kt
class UniverseCollapseEvent(val message: String): Event, Cancelable {
    override var isCanceled: Boolean = false // The initial value of the canceled event must be - false (otherwise it makes sense to cancel it, right?)
}

// Example of running your event
fun somewhereInYourCode() {
    val event = UniverseCollapseEvent("Oops...") // Create an event

    EventBus.post(event) // Calling the event

    if(event.isCanceled) return // If the event is canceled, then complete the

    Minecraft.crash(...) // The event is not over, do what you want
}

Example of using your event
@SubscribeEvent
fun onUniverseCollapse(event: UniverseCollapseEvent) {
    event.isCanceled = true
}
```