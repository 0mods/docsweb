---
sidebar_position: 1

title: ⚒️ Создаем новый предмет
id: mod-new_item
description: Добавь новый предмет в игру
---

:::note Создаём новый предмет и задаём ему характеристики
```kts
//Всё что ниже - импорты классов самой игры, они обязательны!
import net.minecraft.item.Item
import net.minecraft.item.Food
import net.minecraftforge.registries.DeferredRegister
import net.minecraftforge.registries.ForgeRegistries
import ru.hollowhorizon.hollowengine.common.tabs.HOLLOWENGINE_TAB

fun init() {
    // Создаём регистратор для наших предметов
    val ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, <modid>)

    //Регистрируем новый предмет
    ITEMS.register("<registry_name>") {
        Item(
            // Настройки предмета, все они опциональные
            Item.Properties()
                // Если предмет можно съесть
                .food(
                    Food.Builder()
                        .meat() // Теперь это мясо.
                        .nutrition(<count>) // Int | Питательность
                        .saturationMod(<percent>) //Float |  Процент насыщения от питательности
                        .alwaysEat() // Можно съесть с полной полоской голода (как золотое яблоко)
                        .fast() // Съесть можно быстро)
                        .build() // Завершить настройку еды
                )
                .stacksTo(<count>) // Float, max: 64 |  Кол-во предметов в одной ячейке
                .durability(<count>) // Int | Прочность предмета
                .tab(<tab>) // Добавим предмет во вкладку мода
                .fireResistant() // Устойчивость к огню и лаве
                .setNoRepair() // Невозможно починить
        ) 
    }

    ITEMS.register(MOD_BUS) // Регистрируем наш регистратор
}
```

> Обозначения:
> - `<modid>` - Идентификатор мода. Строка, например: `"hollowengine"`.
> - `<registry_name>` - Регистрационное имя предмета. Оно указывается в крафтах, модели и команде `/give`.
> - `<tab>` - Творческая вкладка мода. Если вы не знаете названия вкладок, то рекомендую использовать `HOLLOWENGINE_TAB`.
:::

---
 