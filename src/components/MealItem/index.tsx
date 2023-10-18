import { Container, Text, Hour, Status, StatusProps } from './styles'
import { PressableProps } from 'react-native'

type MealItemProps = PressableProps & {
  data: {
    name: string
    status: StatusProps['type']
    hour: string
  }
}

export function MealItem({ data, ...rest }: MealItemProps) {
  return (
    <Container {...rest}>
      <Hour>{data.hour} |</Hour>
      <Text>{data.name}</Text>
      <Status type={data.status} />
    </Container>
  )
}
