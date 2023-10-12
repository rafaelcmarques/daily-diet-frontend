import { Container, CardNumber, CardProps, Description } from './style'

type StastiticCardProps = {
  number: string
  description: string
  type: CardProps['types']
}

export function StatisticCard({
  description,
  number,
  type,
}: StastiticCardProps) {
  return (
    <Container types={type}>
      <CardNumber>{number}</CardNumber>
      <Description>{description}</Description>
    </Container>
  )
}
