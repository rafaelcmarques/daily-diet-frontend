import { Container,Text, Hour, Status, StatusProps } from "./styles"
import {PressableProps} from 'react-native'

type MealItemProps = PressableProps & {
  title: string
  status: StatusProps['type']
}

export function MealItem ({title, status}:MealItemProps) {
  return (
    <Container>
      <Hour>
        20:00 |
      </Hour>
      <Text>
        {title}
      </Text>
      <Status type={status}/>
    </Container>
  )
}