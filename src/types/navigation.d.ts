import { MealDTO } from '../DTOs/MealDTO'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      feedback: {
        status: MealDTO['status']
      }
      mealDetails: {
        meal: MealDTO
      }
      editMeal: {
        meal: MealDTO
      }
      newMeal: undefined
      statistic: undefined
    }
  }
}
