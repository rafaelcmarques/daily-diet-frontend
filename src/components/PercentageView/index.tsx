import { Container, Title, Description, Icon, PercentageProps} from "./styles"
import { TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
  type: PercentageProps['type']
}

export function PercentageView({type, ...rest}:Props) {
  return (
     <Container 
     type={type}
     {...rest}
     >
      <Icon type={type}/>
      <Title> 90,60% </Title>
      <Description>
        das refeições dentro da dieta
      </Description>
     </Container>
  )
}