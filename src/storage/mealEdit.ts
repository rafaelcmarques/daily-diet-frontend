import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLLECTION } from './storageConfig'
import { MealDTO } from '../DTOs/MealDTO'
import { mealsGetAll } from './mealGetAll'
import Toast from 'react-native-toast-message'

export async function mealEdit(mealToEdit: MealDTO, editedMeal: MealDTO) {
  try {
    const storagedMeals = await mealsGetAll()

    // Encontre o índice da refeição a ser alterada
    const mealIndex = storagedMeals.findIndex((meal) => {
      return meal.data.some((item) => {
        return (
          item.name === mealToEdit.name &&
          item.date === mealToEdit.date &&
          item.hour === mealToEdit.hour &&
          item.description === mealToEdit.description
        )
      })
    })

    if (mealIndex !== -1) {
      const mealToEditArray = storagedMeals[mealIndex]
      console.log('mealtodeelte ->', mealToEdit)

      const mealToEditIndex = mealToEditArray.data.findIndex((item) => {
        return (
          item.name === mealToEdit.name &&
          item.date === mealToEdit.date &&
          item.hour === mealToEdit.hour &&
          item.description === mealToEdit.description
        )
      })

      if (mealToEditIndex !== -1) {
        mealToEditArray.data[mealToEditIndex].name = editedMeal.name
        mealToEditArray.data[mealToEditIndex].date = editedMeal.date
        mealToEditArray.data[mealToEditIndex].description =
          editedMeal.description
        mealToEditArray.data[mealToEditIndex].hour = editedMeal.hour
        mealToEditArray.data[mealToEditIndex].status = editedMeal.status
      }

      await mealsRemoveAll()

      await AsyncStorage.setItem(
        MEALS_COLLECTION,
        JSON.stringify(storagedMeals),
      )

      console.log('Refeição editada com sucesso.')
    } else {
      console.log('Refeição não encontrada.')
    }

    Toast.show({
      type: 'success',
      text1: 'Refeição editada com sucesso!',
    })
  } catch (error) {
    console.log(error)
    Toast.show({
      type: 'error',
      text1: 'Não foi possivel editar a refeição.',
    })
  }
}

export async function mealsRemoveAll() {
  await AsyncStorage.removeItem(MEALS_COLLECTION)
}
