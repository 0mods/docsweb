---
sidebar_position: 2
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

# ↳ Создаем новый блок ⚒️

:::caution Напоминаю
> Скрипты этой категории `Script - MOD` - пишутся в `.mod.kts`!
:::

---

:::note Создаём новый предмет и задаём ему характеристики
```kts
//Это импорты
import net.minecraft.item.Item
import net.minecraft.item.Food
import net.minecraftforge.registries.DeferredRegister
import net.minecraftforge.registries.ForgeRegistries
import ru.hollowhorizon.hollowengine.common.tabs.HOLLOWENGINE_TAB
// Всё что выше, это импорты нужных библиотек. Они обязательны!

// Данная функция будет инициализировать код ниже.
// В нем сделует создавать предметы, блоки и тд.
// Инициалазацию оно делает только 1 раз. Если вы что-то изменили, вам нужно перезапустить игру
fun init() {
    val ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, "<modID>") //можно добавить предмет в любой мод, например "hollowengine"
    
    
    ITEMS.register("<new_itemID>") { // Создаём новый предмет
        Item(
            Item.Properties() // Тут настройки, они все не обязательые
            .food( // Предмет можно сьесть. Теперь это мясо
                Food.Builder() 
                    .meat() // МЯСО!
                    .nutrition(<count>) // Питательность
                    .saturationMod(<float>) // Процент насыщения от питательности
                    .alwaysEat() // Можно сьесть с полной полоской голода
                    .fast() // Сьесть можно быстро)
                    .build() // Завершить настройку еды
            ) 
            .stacksTo(<count>) // Кол-во предметов в стаке
            .durability(<count>) // Прочность предмета
            .tab(<ModID_TAB>) // Добавим предмет во вкладку мода
            .fireResistant() // Не будет гореть в лаве
            .setNoRepair() // Невозможно починить
        ) 
    }

    ITEMS.register(MOD_BUS) // Регестритуем наш предмет
}

@SubscribeEvent // Этот метод запускается автоматически при событии, когда есть аннотация
// Все вопросы к HollowHorizon
```
> Обозначения:
> - `modID` - `ID` мода. В этом случае рекомендую использовать существующий `modID`, т.к. неизвестно как оно будет работать с новым `modID`.
> - `new_itemID` - Новый `ID` предмета.
> - `ModID_TAB` - Творческая вкладка мода. Если вы не знаете названия вкладок, то рекомендую использовать `HOLLOWENGINE_TAB`.
:::

---
 