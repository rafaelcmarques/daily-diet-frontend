import { Container, Text, Hour, Status, StatusProps } from "./styles"
import { PressableProps } from 'react-native'

type MealItemProps = PressableProps & {
  data: {
    title: string,
    status: StatusProps['type'],
    hour: string
  }
}

export function MealItem({ data }: MealItemProps) {
  return (
    <Container>
      <Hour>
        {data.hour}|
      </Hour>
      <Text>
        {data.title}
      </Text>
      <Status type={data.status} />
    </Container>
  )
}