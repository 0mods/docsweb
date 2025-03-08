---
sidebar_position: 2
id: packets
title: Универсальные пакеты
description: Тут всё автоматизировано!
---

HollowCore предоставляет вам удобную систему пакетов, вам необходимо лишь создать сериализуемый класс с данными и наследовать метод для обработки данных на другой стороне.

## Создание класса

Итак, прежде всего создайте класс, который будет сериализуем и реализуйте в нём интерфейс `HollowPacket`, где generic-параметр - ваш класс.
После чего добавьте аннотацию `@HollowPacketHandler` и по желанию укажите сторону, на которую пакет сможет быть отправлен.
(Если её не указывать, то пакет сможет быть отправлен как с клиента на сервер, так и наоборот.)

:::warning
В версиях до **2.2.8a** (в том числе 2.2.8), HollowPacketHandler называется HollowPacketV2, а HollowPacket - HollowPacketV3
:::

### Пример
```kt
@HollowPacketHandler(HollowPacketHandler.Direction.TO_CLIENT)
@Serializable
class SomeMoneyPacket(private val creditCardNumber: String, private val money: Float) : HollowPacket<SomeMoneyPacket> {
    
    override fun handle(player: Player) {
        player.sendSystemMessage("У игрока ${player.name.string} на карте ${creditCardNumber} денег: ${money}".literal)
    }
}
```

## Отправка пакета

Для отправки пакета создайте объект вашего пакета и вызовете один из следующих методов:
- send() - отправить пакет на сервер.
- send(player1: Player, player2: Player, ...) - отправить пакет с сервера определённым игрокам.
- sendTrackingEntity(entity: Entity) - отправить пакет всем, кто может видеть определённого моба.
- sendAllInDimension(level: Level) - отправить пакет всем игрокам в указанном измерении.

### Пример
```kt
val packet = SomeMoneyPacket("2200########", -120000) // Создаём пакет (см. прошлый пример)

packet.send(player) // Отправляем пакет определённому игроку
```

## Обработка пакета

Для обработки пакета вам необходимо лишь реализовать метод `handle(player: Player)` в вашем классе с пакетом, написав что будет происходить, когда пакет пришёл на клиент. Здесь, player - переменная игрока.
Если пакет пришёл с сервера на клиент, то player имеет тип LocalPlayer и обозначает игрока, которому пришёл пакет.
Если пакет пришёл с клиента на сервер, то player имеет тип ServerPlayer и обозначает игрока, который отправил пакет.

Пример

```kt
// Внутри вашего класса, реализующего интерфейс: HollowPacket. 
override fun handle(player: Player) {
    player.sendSystemMessage("У игрока ${player.name.string} на карте $creditCardNumber денег: $money".literal)
}
```

## Пакет-запрос и корутины

Иногда вам может потребоваться сделать один или несколько запросов на сервер и получить с него какие-либо данные. HollowCore имеет в себе отдельный под-тип пакета специализированный как раз под такие задачи.

### Создание пакета-запроса

Для начала создайте класс с параметрами, которые хотите получить от сервера и наследуйте абстрактный класс `RequestPacket<T>`, где T - ваш пакет. 
После чего наследуйте функцию `retrieveValue(player: ServerPlayer)`, в ней вам нужно получить нужные вам параметры и записать их в параметры класса.

#### Пример
```kt
@HollowPacketHandler
@Serializable
class GiveMyMoneyPacket(private var money: Float = 0f) : RequestPacket<SomeMoneyPacket> {
    override fun retrieveValue(player: ServerPlayer) {
        money = MySuperCoolDatabase[player].playerMoney
    }
}
```

### Отправка и получение данных через корутины

Теперь вы можете создать пакет на клиенте с шаблонными данными (они не будут использованы на сервере) и вызвать suspend метод `request()` для отправки запроса и ожидания ответа соответственно.

#### Пример
```kt
// Лучше используйте ваш собственный обработчик корутин
GlobalScope.launch {
    val packet = GiveMyMoneyPacket() // Создаём пакет (см. прошлый пример)

    val result = packet.request() // Вызываем suspend метод для отпраки запроса и получения ответа. Корутина будет приостановлена до получения ответа, а в результате вы получите пакет с сервера с уже заполненными данными

    val money = result.money // Дальше делайте с этими данными, что хотите.
}
```
