import { ReactElement, } from "react"
import { Container, Text, ButtonStyleProps } from "./styles"
import { TouchableOpacityProps } from 'react-native'


type ButtonProps = TouchableOpacityProps & {
  title: string
  icon?: ReactElement
  type?: ButtonStyleProps['type']
}

export function Button({title, icon, type = 'dark',  ...rest}:ButtonProps){
  return (
    <Container type={type} {...rest}>
      {icon && 
      icon
      }
        <Text type={type}>
          {title}
        </Text>
    </Container>
  )
}