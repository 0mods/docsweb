---
sidebar_position: 1
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

# ↳ Обычная печь 🧺

:::note Рецепты крафтов для Печи
Вы можете создавать и изменять рецепты крафта для Печи
:::
---

:::caution Внимание
Всё что указывается в `[]` скобках, это тоже что и `<>`, то с условием что это - обязательное значение!
:::
---

## Удалить рецепт

:::info Удалить существующий рецепт предмета | Шаблон

```kts
Furnace.removeRecipe(
	item("[<itemID>]") // Предмет на выходе (результат крафта)
)
```

:::

## Добавить рецепт

:::info "Добавить новый рецепт предмета | Шаблон"

```kts
Furnace.addRecipe(
	item("[<itemID_Output>]"), // Предмет на выходе (результат крафта)
	item("[<itemID_Input>]"), // Предмет входа (ингридиент)
	"<group>", // хз
	<xp>, // Кол-во получаемого опыта. Float
	[<time>]) // Время готовки в тиках. Int
```

Пример скрипта крафта:

```kts
Furnace.addRecipe(
	item("minecraft:clay_ball"),
	item("minecraft:gravel"),
	"",
	10f,
	100
)
```

![Рецепт в Печи](@site/static/img/doc/furnace_recipe.png)

:::

---
