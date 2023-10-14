import { MealDTO } from '../DTOs/MealDTO'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      feedback: {
        status: string
      }
      mealDetails: {
        meal: MealDTO
      }
      newMeal: undefined
      statistic: undefined
    }
  }
}
