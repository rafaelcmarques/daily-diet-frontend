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

export function Statistic() {
  return (
    <Container types="green">
      <Header>
        <BackButton types="green" />
        <HeaderNumber>30,21%</HeaderNumber>
        <HeaderDescription>das refeições dentro da dieta</HeaderDescription>
      </Header>

      <Details>
        <Title>Estatísticas gerais</Title>
        <StatisticCard
          number="4"
          description="melhor sequência de pratos dentro da dieta"
          type="neutral"
        />
        <StatisticCard
          number="109"
          description="refeições registradas"
          type="neutral"
        />

        <CardWrapper>
          <CardContainer>
            <StatisticCard
              number="32"
              description="refeições dentro da dieta"
              type="green"
            />
          </CardContainer>

          <CardContainer>
            <StatisticCard
              number="77"
              description="refeições fora da dieta"
              type="red"
            />
          </CardContainer>
        </CardWrapper>
      </Details>
    </Container>
  )
}
