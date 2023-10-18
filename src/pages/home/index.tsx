import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

import { Container, Text, TextSection } from './styles'

import { PercentageView } from '../../components/PercentageView'
import { MealItem } from '../../components/MealItem'
import { Heading } from '../../components/Heading'
import { Button } from '../../components/Button'

import { Plus } from 'phosphor-react-native'
import { SectionList } from 'react-native'

import { MealsDTO } from '../../DTOs/MealsDTO'
import { MealDTO } from '../../DTOs/MealDTO'

import { mealsGetAll } from '../../storage/mealGetAll'

export function Home() {
  const [refeicoes, setRefeicoes] = useState<MealsDTO[]>([])

  async function fetchMeals() {
    const data = await mealsGetAll()
    setRefeicoes(data)
  }

  const navigation = useNavigation()

  function handleMealDetails(meal: MealDTO) {
    navigation.navigate('mealDetails', { meal })
  }

  function handleStatistic() {
    navigation.navigate('statistic')
  }

  function handleNewMeal() {
    navigation.navigate('newMeal')
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  return (
    <Container>
      <Heading />
      <PercentageView type="primary" onPress={() => handleStatistic()} />
      <Text>Refeições</Text>
      <Button
        title="Nova refeição"
        onPress={() => handleNewMeal()}
        icon={<Plus color="white" />}
      />

      <SectionList
        sections={refeicoes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MealItem data={item} onPress={() => handleMealDetails(item)} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TextSection>{title}</TextSection>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgb(255, 255, 255)']} // Cores do gradiente
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 200, // Altura do gradiente
          pointerEvents: 'none', // Permite que o toque na tela passe através do gradiente
        }}
      />
    </Container>
  )
}
