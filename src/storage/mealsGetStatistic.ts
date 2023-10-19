import { mealsGetAll } from './mealGetAll'

export async function mealsGetStatistics() {
  const mealsArray = await mealsGetAll()

  let totalMeals = 0
  let totalInDietMeals = 0
  let totalOutDietMeals = 0
  let bestSequence = 0
  let currentSequence = 0

  for (const dia of mealsArray) {
    for (const refeicao of dia.data) {
      totalMeals++

      if (refeicao.status === 'onDiet') {
        totalInDietMeals++
        currentSequence++
      } else {
        totalOutDietMeals++
        currentSequence = 0
      }
      if (currentSequence >= bestSequence) {
        bestSequence = currentSequence
      }
    }
  }

  return {
    totalMeals,
    totalInDietMeals,
    totalOutDietMeals,
    bestSequence,
    percentage:
      totalMeals === 0
        ? '0'
        : ((totalInDietMeals / totalMeals) * 100).toFixed(0),
  }
}
