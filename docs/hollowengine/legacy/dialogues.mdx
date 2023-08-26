---
sidebar_position: 5
---

# 2.0 | Dialogues | Start

## Dialogue File

Before moving on to dialogue, I suggest you familiarize yourself with the [script engine](./introducing).

About Script Files, you can learn [here](./scriptfiles)

## Creating Character

### About HDCharacter

HDCharacter is a class for creating characters in dialogues.

Has two constructors:
- `HDCharacter(type)` 
- `HDCharacter(location, characterName, nbt)`

About constructors:

| Constructor |   Variable    |         Description         |   Default   | Example                                                                              |   Type   |
|:-----------:|:-------------:|:---------------------------:|:-----------:|:-------------------------------------------------------------------------------------|:--------:|
|    First    |     type      |        Sets Entity.         |             | MyLivingEntity(<br/>Minecraft.getInstance().level, <br/>MyEntityTypes.MyLiving<br/>) | Required |
|             |               |                             |             |                                                                                      |          |
|   Second    |   location    |     Sets Entity by id.      |             | "minecraft:villager"                                                                 | Required |
|   Second    | characterName | Sets Display Character Name | "%default%" | "Erik"                                                                               | Optional |
|   Second    |      nbt      |  Sets NBT Tags for Entity   |     ""      | "{VillagerData:{profession:farmer,level:2,type:savanna}}"                            | Optional |

### Making a Character
```kotlin
val vitalik = HDCharacter("minecraft:villager", "Vitalik", "{VillagerData:{profession:farmer,level:2,type:savanna}}")
```

### Character phrases
Now we can make the character speak, for example:
```kotlin
vitalik say "Hello, My name is Vitalik, I will take the world!"
```
Well, it's ready! You can write the dialogues for characters... But something is missing...

## Story Choice
There’s no choice, but it’s very easy:
```kotlin
choice(
    "No, Vitalik, I can protect this world" to {
        vitalik say "I will fight for my cringe phrases"
    },
    "No, Vitalik, I will first to take the world!" to {
        vitalik say "Gee :("
    }
)
```

## Player character and his phrases
Script already have `player` variable, so you can use it:
```kotlin
player say "I p-p-playe-e-er-r"
```

## Example
For example, you can copy-paste this code:
```kotlin
val vitalik = HDCharacter("minecraft:villager", "Vitalik", "{VillagerData:{profession:farmer,level:2,type:savanna}}")

vitalik say "Welcome to HollowEngine Dialogue!"
vitalik say "My name is Vitalik, BarMaxx is made me!"

choice(
    "What you are do?" to {
        vitalik say "I can count up to 100!"
        for (i in 1..100) vitalik say "$i"
        player say "Okay......"
    },
    "And I'm ${player.name.string}" to {
        "It's so cool, and what you are do?"
        
        choice(
            "I can write a dialogues" to {
                vitalik say "And I don't, teach me, pls, pls, pls, pls, pls, pls!"
                player say "Why don't you go to the hell? Go to learn a source code"
                vitalik say "Okay, thanks"
            }
        ) 
        
        player say "I have to say something, but I don’t know what..."
    }
)

say("", "And they lived long and long")
say("Player & Vitalik", "Who it's say?!")
```
Approximate result:

![example](../../../static/img/hollowengine/primer.jpg)

## Starting Dialogue

For start the dialogue, write next: `/hollowengine open-dialogue dialogueid.hsd.kts`. 
If you specify a player name or a type `@a` tag after the name, the dialog will start with a specific player/group.