import { Container, Text, Hour, Status, StatusProps } from './styles'
import { PressableProps } from 'react-native'

type MealItemProps = PressableProps & {
  data: {
    title: string
    status: StatusProps['type']
    hour: string
  }
}

export function MealItem({ data, ...rest }: MealItemProps) {
  return (
    <Container {...rest}>
      <Hour>{data.hour} |</Hour>
      <Text>{data.title}</Text>
      <Status type={data.status} />
    </Container>
  )
}
