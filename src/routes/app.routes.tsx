import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../pages/home'
import { NewMeal } from '../pages/newMeal'
import { Feedback } from '../pages/feedback'
import { Statistic } from '../pages/statistic'
import { MealDetails } from '../pages/mealDetails'
import { EditMeal } from '../pages/editMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="editMeal" component={EditMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealDetails" component={MealDetails} />
    </Navigator>
  )
}
