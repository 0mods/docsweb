---
sidebar_position: 5
id: audio
title: Поддержка Аудио
description: Я есть Гуи!
---

HollowCore позволяет использовать не только `.ogg` аудио, но и также `.mp3` и `.wav`. К тому же без необходимости регистрации звуков.

# Чтение аудио файлов

## OGG

Пример:
```kotlin
val audio = OggFormat.read(stream) // stream - всё как в Java: InputStream, поток ввода данных. 
```

## MP3

Пример:
```kotlin
val audio = Mp3Format.read(stream) // stream - всё как в Java: InputStream, поток ввода данных. 
```

## WAV

Пример:
```kotlin
val audio = WavFormat.read(stream) // stream - всё как в Java: InputStream, поток ввода данных. 
```

# Проигрывание звука

## Создаём проигрыватель

Пример:
```kotlin
val buffer = AudioBuffer(audio) // Создаём буфер для вашего звука
val player = AudioPlayer(buffer) // Создаём проигрыватель звука
```

## Функции для плеера

Запуск: `player.play()`

Пауза: `player.pause()`

Остановка: `player.stop()`

Громкость: `player.setVolume(volume: Float)`

Высота звука: `player.setPitch(pitch: Float)`

Зациклить звук: `player.setLooping(loop: Boolean)`

Координаты: `player.setPosition(x: Float, y: Float, z: Float)`

Звук относительно игрока: `player.setRelative(relative: Boolean)` - При `true` будут использованы координаты не относительно мира, а относительно игрока. 

## Переменные для плеера

`player.isPlaying` - Проигрывается ли сейчас этот звук.

`player.isPaused` - На паузе ли сейчас этот звук.

`player.isStoped` - Остановлен ли сейчас этот звук.

`player.playbackPosition` - "Текущая секунда звука".
