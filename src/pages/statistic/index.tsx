import {
  Container,
  Details,
  Header,
  Title,
  CardWrapper,
  CardContainer,
  HeaderNumber,
  HeaderDescription,
} from './style'
import { StatisticCard } from '../../components/StatisticCard'
import { BackButton } from '../../components/BackButton'
import { mealsGetStatistics } from '../../storage/mealsGetStatistic'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'

export function Statistic() {
  const [percentage, setPercentage] = useState<string>('')
  const [bestSequence, setBestSequence] = useState(0)
  const [totalMealOutDiet, setTotalMealOutDiet] = useState(0)
  const [totalMealInDiet, setTotalMealInDiet] = useState(0)
  const [totalMeals, setTotalMeals] = useState(0)

  async function fetchStatistics() {
    const {
      bestSequence,
      totalInDietMeals,
      totalOutDietMeals,
      totalMeals,
      percentage,
    } = await mealsGetStatistics()
    setPercentage(percentage)
    setBestSequence(bestSequence)
    setTotalMealInDiet(totalInDietMeals)
    setTotalMealOutDiet(totalOutDietMeals)
    setTotalMeals(totalMeals)
  }

  useFocusEffect(
    useCallback(() => {
      fetchStatistics()
    }, []),
  )

  const SCREEN_TYPE = parseFloat(percentage) > 49.99 ? 'green' : 'red'

  return (
    <Container types={SCREEN_TYPE}>
      <Header>
        <BackButton types={SCREEN_TYPE} />
        <HeaderNumber>{percentage}%</HeaderNumber>
        <HeaderDescription>das refeições dentro da dieta</HeaderDescription>
      </Header>

      <Details>
        <Title>Estatísticas gerais</Title>
        <StatisticCard
          number={bestSequence}
          description="melhor sequência de pratos dentro da dieta"
          type="neutral"
        />
        <StatisticCard
          number={totalMeals}
          description="refeições registradas"
          type="neutral"
        />

        <CardWrapper>
          <CardContainer>
            <StatisticCard
              number={totalMealInDiet}
              description="refeições dentro da dieta"
              type="green"
            />
          </CardContainer>

          <CardContainer>
            <StatisticCard
              number={totalMealOutDiet}
              description="refeições fora da dieta"
              type="red"
            />
          </CardContainer>
        </CardWrapper>
      </Details>
    </Container>
  )
}
