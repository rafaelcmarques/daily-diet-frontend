import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

import { MealDTO } from '../DTOs/MealDTO'

import { MEALS_COLLECTION } from './storageConfig'
import { mealsGetAll } from './mealGetAll'

export async function mealCreate(newMeal: MealDTO) {
  try {
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
    Toast.show({
      type: 'success',
      text1: 'Refeição adicionada com sucesso!',
    })
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Não foi possivel adicionar a refeição.',
    })
  }
}
