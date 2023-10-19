import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealsDTO } from '../DTOs/MealsDTO'
import { MEALS_COLLECTION } from './storageConfig'

export async function mealsGetAll() {
  const storage = await AsyncStorage.getItem(MEALS_COLLECTION)
  const meals: MealsDTO[] = storage ? JSON.parse(storage) : []
  return meals
}
