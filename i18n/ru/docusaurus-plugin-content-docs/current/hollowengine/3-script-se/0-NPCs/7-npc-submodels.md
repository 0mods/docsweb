---
sidebar_position: 7

title: 👓 Под-модели
id: npc-sub_models
description: Шапочка для плавания ии другие вещички
---

import ToBeta from '@site/src/components/NewDocs.js';

<ToBeta url='welcome' />

## Модель

:::note Под-модели
> Ты можешь накинуть на основную модель ещё пару моделей на разные конечности.
> Ты можешь установить модель как и при создании НИПа, так и после (через `configure{...}`).
```kts
    subModels["<bone>"] = subModel{ // На кость <bone>
        model = "<path/to/model>" // Установить модель <path/to/model>
    }
```

:::

---

## Анимации под-моделей

:::note
> Ты можешь воспроизвести любую анимацию у под-моделей.
> Анимация устанавливается в блоке `subModels[<bone>] = subModel(...)`
```kts
        layer += AnimationLayer(
            animation = "<animationName>" // Название анимации
        layerMode = LayerMode.<modeType> // Режим проигрывания. Есть:
        // - LayerMode.ADD - Умножить
        // - LayerMode.OVERWRITE - Перезаписать
        
        playType = PlayMode.<playType> // Как проигрывать анимацию. Есть:
        // - PlayMode.ONCE - 1 раз
        // - PlayMode.LOOPED - в цикле
        // - PlayMode.LAST_FRAME - Зависнуть на последнем кадре
        // - PlayMode.REVERSED - в цикле вперёд и обратно
        
        speed = <float> // Скорость анимации
        )
```
:::

---

## Примеры:
```kts
val men by NPCEntity.creating{ // НИП с именем Cocka-coll
    name = "Cocka-coll"
    ... // Другие параметры
    
    subModels["Head"] = subModel{ // На кость Head
        model = "models:access/coll_hat.gltf" // Добавить модель coll_hat.gltf
        layer += AnimationLayer(
            animation = "wheee"
            layerMode = LayerMode.ADD
            playType = PlayMode.LOOPED
        )
    }
}
```