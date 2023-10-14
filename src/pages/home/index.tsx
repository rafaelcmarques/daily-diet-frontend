import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
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

export function Home() {
  const [refeicoes, setRefeicoes] = useState<MealsDTO[]>([
    {
      title: '09.10.2023',
      data: [
        { hour: '08:00', title: 'ovo cozinho', status: 'onDiet' },
        { hour: '10:00', title: 'café preto', status: 'onDiet' },
        { hour: '12:00', title: 'hamburguer', status: 'outDiet' },
        { hour: '14:00', title: 'omelete', status: 'onDiet' },
        { hour: '20:00', title: 'frango frito', status: 'outDiet' },
      ],
    },
    {
      title: '10.10.2023',
      data: [
        { hour: '08:30', title: 'panqueca', status: 'onDiet' },
        { hour: '11:00', title: 'iogurte', status: 'onDiet' },
        { hour: '13:30', title: 'batata frita', status: 'outDiet' },
        { hour: '16:00', title: 'açaí', status: 'outDiet' },
        {
          hour: '19:30',
          title: 'arroz integral com legumes',
          status: 'onDiet',
        },
      ],
    },
  ])

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
        showsVerticalScrollIndicator={false}
      />
      <LinearGradient
        colors={['transparent', 'rgb(255, 255, 255)']} // Cores do gradiente
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 180, // Altura do gradiente
          pointerEvents: 'none', // Permite que o toque na tela passe através do gradiente
        }}
      />
    </Container>
  )
}
