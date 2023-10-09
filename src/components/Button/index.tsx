import { ReactElement, ReactNode } from "react"
import { Container, Text } from "./styles"
import { TouchableOpacityProps } from 'react-native'


type ButtonProps = TouchableOpacityProps & {
  title: string
  icon?: ReactElement
}

export function Button({title, icon,  ...rest}:ButtonProps){
  return (
    <Container {...rest}>
      {icon && 
      icon
      }
      
        <Text>
          {title}
        </Text>
    </Container>
  )
}