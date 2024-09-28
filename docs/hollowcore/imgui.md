---
sidebar_position: 5
id: imgui
title: Интерфейсы ImGui
description: Я есть Гуи!
---

# Открытие окна

Прежде всего вам нужно открыть окно с поддержкой ImGui, для этого вы можете использовать:
```kotlin
Minecraft.getInstance().setScreen(ImGuiScreen(gui))
```

# Контекст ImGui

Переменная `gui` - интерфейс [Renderable](https://github.com/HollowHorizon/HollowCore/blob/stonecutter/src/main/java/ru/hollowhorizon/hc/client/imgui/Renderable.kt). Например:
```kotlin
val gui: Renderable = {
    // Тут вы можете вызывать любые методы из ImGui
}
```

# Возможности ImGui

Все методы вы можете найти в классе [Graphics](https://github.com/HollowHorizon/HollowCore/blob/stonecutter/src/main/java/ru/hollowhorizon/hc/client/imgui/Graphics.kt) и [ImGui](https://github.com/SpaiR/imgui-java/blob/main/imgui-binding/src/main/java/imgui/ImGui.java).
Тут есть не более 10% от всех виджетов, поскольку их **очень** много. Когда-нибудь у меня дойдут руки рассказать обо всех них и принципе работы с курсором...

## Виджеты

### Следущий элемент на той же строке

Функция: sameline()
Описание: Указывает что следующий виджет будет распологаться на той же строке.

### Переход на новую строку

Функция: newLine()
Описание: Указывает что следующий виджет будет распологаться на следующей строке.

### Центрированное окно

Функция: centredWindow(name: String, args: Int, codeBlock: Graphics.() -> {})
Описание: Создаёт новое окно по центру экрана.
Параметры:
- name: String - Название окна.
- args: Int - Параметры окна. (см. [ImGuiWindowFlags](https://github.com/SpaiR/imgui-java/blob/main/imgui-binding/src/main/java/imgui/flag/ImGuiWindowFlags.java))
- codeBlock: Graphics.() -> Unit - функция с контекстом Graphics, содержимое окна.
Пример:
```kotlin
centredWindow("Окно 1", 0) {
    // Тут содержимое окна
}
```

### Окно

Функция: window(name: String, args: Int, codeBlock: Graphics.() -> {})
Описание: Создаёт новое окно.
Параметры:
- name: String - Название окна.
- args: Int - Параметры окна. (см. [ImGuiWindowFlags](https://github.com/SpaiR/imgui-java/blob/main/imgui-binding/src/main/java/imgui/flag/ImGuiWindowFlags.java))
- codeBlock: Graphics.() -> Unit - функция с контекстом Graphics, содержимое окна.
  Пример:
```kotlin
window("Окно 1", 0) {
    // Тут содержимое окна
}
```

### Центрирование окна

Функция: centerWindow()
Описание: Располагает открытое окно по центру экрана.

### Дочерний элемент

Функция: child(name: String, width: Float, height: Float, codeBlock: Graphics.() -> Unit)
Описание: Создаёт новый дочерний элемент. (Грубо говоря окно внутри окна)
Параметры:
- name: String - Название элемента.
- width: Float - Ширина окна.
- height: Float - Высота окна.
- codeBlock: Graphics.() -> Unit - функция с контекстом Graphics, содержимое элемента.
Пример:
```kotlin
child("Окно 1", 100, 100) {
    // Тут содержимое дочернего элемента
}
```

### Маркированный текст

Функция: bulletText(text: String)
Описание: Создаёт маркированный текст. (С точкой слева)
Параметры: Сам текст в качестве строки.

### Кнопка

Функции: 
- `button(name: String, codeBlock: Graphics.() -> Unit) // Автоматические размеры`
- `button(name: String, width: Float, height: Float, codeBlock: Graphics.() -> Unit) // С размерами`
Описание: обычная кнопка, выполняет код при нажатии.
Пример:
```kotlin
button("Привет") {
    // Тут действие при нажатии
}
```

### Картинка

Функция: image(texture: ResourceLocation, width: Float, height: Float)
Описание: Добавляет указанную картинку с заданными размерами.
Параметры:
- texture: ResourceLocation - сама текстура, например: `"minecraft:textures/block/dirt.png".rl`
- width: Float - Ширина картинки.
- height: Float - Высота картинки.

### Кнопка с картинкой

Функция: imageButton(texture: ResourceLocation, width: Float, height: Float, codeBlock: Graphics.() -> Unit)
Описание: Добавляет кнопку с указанной текстурой с заданными размерами.
Параметры:
- texture: ResourceLocation - сама текстура, например: `"minecraft:textures/block/dirt.png".rl`
- width: Float - Ширина картинки.
- height: Float - Высота картинки.
- codeBlock: Graphics.() -> Unit - функция с контекстом Graphics, действие при нажатии.

### Переключатель

Функция: checkBox(name: String, isActive: Boolean, codeBlock: Graphics.() -> Unit)
Описание: Простой переключатель из состояний вкл/выкл.
Пример:
```kotlin
var status = false // Все переменные должны быть за пределами контекста ImGui

val gui: Renderable = {
    checkBox("Включить что-то?", status) {
        status = !status // Изменяем переменную
    }
}
```

### Виджет "Загрузка"

Функция: progressBar(progress: Float)
Описание: Показывает прогресс загрузки по переданному параметру (от `0f` до `1f`)

### Контекст OpenGL

Функция: glCanvas(
    width: Float,
    height: Float,
    border: Boolean = false,
    red: Float = 1f,
    green: Float = 1f,
    blue: Float = 1f,
    alpha: Float = 1f,
    alwaysOnTop: Boolean,
    enableScissor: Boolean = true,
    isNodeEditor: Boolean = false,
    renderable: (cursor: ImVec2, isHovered: Boolean) -> Unit,
): Boolean
Описание: С её помощью вы можете зарендерить что-то используя OpenGL (обычно это что-то из самой игры, вроде блоков, предметов и т.п.)

### Моб

Функция: entity(
    entity: LivingEntity, // Сущность
    width: Float, // Ширина
    height: Float, // Высота
    offsetX: Float = 0f, // Смещение моба по x
    offsetY: Float = 0f, // Смещение моба по y
    scale: Float = 1f, // Размер моба
    border: Boolean = false, // Включить ли рамку у виджета
    rotation: Boolean = true, // Должен ли моб поворачиваться вслед за курсором
    red: Float = 1f, // Дополнительный цвет виджета
    green: Float = 1f, // Дополнительный цвет виджета
    blue: Float = 1f, // Дополнительный цвет виджета
    alpha: Float = 1f, // Дополнительный цвет виджета
)
Описание: Рендерит моба в контексте ImGui

### Предмет

Функция: item(
    item: ItemStack, // Предмет
    width: Float, // Ширина виджета
    height: Float, // Высота виджета
)
Описание: Рендерит предмет в контексте ImGui

### Текст

Функции:
- `text(text: String, alpha: Float = 1f, shadow: Boolean = true) // Для обычного текста`
- `text(text: Component, alpha: Float = 1f, shadow: Boolean = true) // Для текстовых компонентов игры`
Описание: Рендерит текст с поддержкой всех возможностей текстовых компонентов (переводимый текст, цвета, подчёркивание и перечёркивание текста, скрытый текст, действия при клике или наведении курсора на предмет, всё из обычных компонентах)
Параметры:
- text - Текст, который будет показан
- alpha - Прозрачность текста от 0 до 1
- shadow - Рисовать ли тень от текста