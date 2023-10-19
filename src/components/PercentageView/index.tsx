import { Container, Title, Description, Icon, PercentageProps } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  value: string
  type: PercentageProps['type']
}

export function PercentageView({ value, type, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} />
      <Title> {value}% </Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  )
}
