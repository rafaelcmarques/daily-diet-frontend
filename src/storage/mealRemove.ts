import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLLECTION } from './storageConfig'
import { MealDTO } from '../DTOs/MealDTO'
import { mealsGetAll } from './mealGetAll'
import Toast from 'react-native-toast-message'

export async function mealRemove(deletedMeal: MealDTO) {
  try {
    const storagedMeals = await mealsGetAll()

    // Encontre o índice da refeição a ser deletada
    const mealIndex = storagedMeals.findIndex((meal) => {
      return meal.data.some((item) => {
        return (
          item.name === deletedMeal.name &&
          item.date === deletedMeal.date &&
          item.hour === deletedMeal.hour &&
          item.description === deletedMeal.description
        )
      })
    })

    if (mealIndex !== -1) {
      const mealToDelete = storagedMeals[mealIndex]
      console.log('mealtodeelte ->', mealToDelete)

      // Encontre a refeição a ser excluída dentro do item de data
      const mealToDeleteIndex = mealToDelete.data.findIndex((item) => {
        return (
          item.name === deletedMeal.name &&
          item.date === deletedMeal.date &&
          item.hour === deletedMeal.hour &&
          item.description === deletedMeal.description
        )
      })

      if (mealToDeleteIndex !== -1) {
        // Remova a refeição do array de refeições do dia
        mealToDelete.data.splice(mealToDeleteIndex, 1)

        // Se não houver mais refeições para o dia, remova o item do array
        if (mealToDelete.data.length === 0) {
          storagedMeals.splice(mealIndex, 1)
        }

        // Atualize o armazenamento AsyncStorage
        await mealsRemoveAll()

        await AsyncStorage.setItem(
          MEALS_COLLECTION,
          JSON.stringify(storagedMeals),
        )

        console.log('Refeição removida com sucesso.')
      } else {
        console.log('Refeição não encontrada.')
      }
    } else {
      console.log('Refeição não encontrada.')
    }
    Toast.show({
      type: 'success',
      text1: 'Refeição removida com sucesso!',
    })
  } catch (error) {
    console.log(error)
    Toast.show({
      type: 'error',
      text1: 'Não foi possivel remover a refeição.',
    })
  }
}

export async function mealsRemoveAll() {
  await AsyncStorage.removeItem(MEALS_COLLECTION)
}
