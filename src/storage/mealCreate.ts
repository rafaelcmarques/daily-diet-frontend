import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealDTO } from '../DTOs/MealDTO'
import { MealsDTO } from '../DTOs/MealsDTO'

import { MEALS_COLLECTION } from './storageConfig'
import { mealsGetAll } from './mealGetAll'

export async function mealCreate(newMeal: MealDTO) {
  const storedMeals = await mealsGetAll()
  const dateAlreadyExist = storedMeals.find(
    (meal) => meal.data[0].date === newMeal.date,
  )
  if (dateAlreadyExist) {
    dateAlreadyExist.data.push(newMeal)
  } else {
    storedMeals.push({
      title: newMeal.date,
      data: [newMeal],
    })
  }

  await AsyncStorage.removeItem(MEALS_COLLECTION)

  const storage = JSON.stringify(storedMeals)
  await AsyncStorage.setItem(MEALS_COLLECTION, storage)
}
