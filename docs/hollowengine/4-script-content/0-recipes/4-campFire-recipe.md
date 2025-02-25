---
sidebar_position: 4
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

# ↳ Костёр 🧺

:::note Рецепты крафтов для Костра
Вы можете создавать и изменять рецепты крафта для Костра
:::

---

:::warning Внимание
Всё что указывается в `[]` скобках, это тоже что и `<>`, то с условием что это - обязательное значение!
:::

---

## Удалить рецепт

:::info Удалить существующий рецепт предмета | Шаблон

```kts
Campfire.removeRecipe(
	item("[<itemID>]") // Предмет на выходе (результат крафта)
)
```

:::

## Добавить рецепт

:::info Добавить новый рецепт предмета | Шаблон

```kts
Campfire.addRecipe(
	item("[<itemID_Output>]"), // Предмет на выходе (результат крафта)
	item("[<itemID_Input>]"), // Предмет входа (ингридиент)
	"<group>", // хз
	<xp>, // Кол-во получаемого опыта. Float
	[<time>]) // Время готовки в тиках. Int
```

Пример скрипта крафта:

```kts
Campfire.addRecipe(
	item("minecraft:torch"),
	item("minecraft:stick"),
	"",
	0f,
	10
)
```

![Рецепт на Костре](@site/static/img/doc/campfire_recipe.png)

:::

---
