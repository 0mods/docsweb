---
sidebar_position: 6
id: audio
title: Ingredients
description: So.. yes, NBT...
---

Starting with version 2.2.8a, [AlgorithmLX](https://github.com/AlgorithmLX) added an ingredient system similar to the one found in [Fabric API](https://github.com/FabricMC/fabric/tree/1.21.4/fabric-recipe-api-v1/src)

## NBTIngredient

NBT Ingredients allow you to set specific NBT tags that must be present in an item in order to be used in recipes.
This is especially useful when you need to take into account additional characteristics of items, such as enchantments, personalized names,
metadata or other properties recorded in NBT.

For example, you can create a recipe that only allows you to use a stick with the "Mining III" enchantment to craft a diamond, 
or restrict the use of items with specific owners, durability levels, or unique markers.

Thus, NBT ingredients allow you to create more complex and flexible crafting mechanics,
considering the properties of items, not just their base type.

Example of use:
```json 
{
  // Your code above
  "ingredients": [
    {
      // Ingredient Type
      "hollowcore:type": "hollowcore:nbt",
      // Original Ingredient
      "base": {
        "item": "minecraft:stick"
      },
      // There is an alternative: "nbt":"\"Enchantments\":[{\"id\":\"efficiency\",\"lvl\":3}]"
      // But I don't think it's too convenient.
      "nbt": {
        "Enchantments": [
          {
            "id": "efficiency",
            "lvl": 3
          }
        ]
      },

      // Lets the serializer know if it is worth checking the correspondence between the NBT of the item and the NBT in the recipe
      // true - will return a positive value if the item's NBT and the NBT specified in the recipe match
      // false - will return a positive value if there is any NBT on the item
      "strict": false
    }
  ]
}
```
## ArrayIngredient 
Ingredients related to arrays. These include AllIngredient and AnyIngredient

### AllIngredient
AllIngredient is a compound ingredient that is tested, 
only if the item meets all of the specified ingredients at the same time. 
When retrieving a list of possible items, it leaves only those that are present in all input ingredients. 
This allows you to create recipes with more stringent conditions, such as 
if the item must have several properties at once.

Example of use:

```json
{
  // Your code above
  "ingredients": [
    {
      // Ingredient Type
      "hollowcore:type": "hollowcore:all",
      "ingredients": [
        // First Ingredient
        {
          "item": "minecraft:apple"
        },
        // Second Ingredient
        {
          "item": "minecraft:gold_apple"
        },
        // Third Ingredient
        {
          "item": "minecraft:diamond"
        }
      ]
    }
  ]
}
```

### AnyIngredient
AnyIngredient is a compound ingredient that is tested, 
if the item matches at least one of the specified ingredients. 
It combines all possible options into one list, allowing you to flexibly define crafting recipes. 
For example, if the composition contains "stone" and "iron", then you can use any of these materials for crafting.

Example of use:

```json
{
  // Your code above
  "ingredients": [
    {
      // Ingredient Type
      "hollowcore:type": "hollowcore:any",
      "ingredients": [
        // First Ingredient
        {
          "item": "minecraft:apple"
        },
        // Second Ingredient
        {
          "item": "minecraft:gold_apple"
        },
        // Third Ingredient
        {
          "item": "minecraft:diamond"
        }
      ]
    }
  ]
}
```

## DifferenceIngredient
An excluded ingredient is a special type of ingredient that allows the creation of composite recipes with exclusion 
certain elements. It accepts two ingredients: base and subtracted. 
In the test process, it checks whether the item matches the base ingredient and does not belong to the excluded ingredient.

This mechanism allows you to flexibly customize recipes, removing unwanted components.
For example, if the base ingredient is all types of wood, and the excluded ingredient is oak, 
then in the recipe you can use any wooden blocks, except oak.

```json
{
  // Your code above
  "ingredients": [
    {
      // Ingredient Type
      "hollowcore:type": "hollowcore:difference",
      // Any Ingredient
      "base": {
        "tag": "minecraft:items/planks"
      },
      // Any ingredient is exclusive
      "subtracted": {
        "hollowcore:type": "any",
        "ingredients": [
          // Exclude Oak planks and Acacia planks
          {
            "item": "minecraft:oak_planks"
          },
          {
            "item": "minecraft:acacia_planks"
          }
        ]
      }
    }
  ]
}
```