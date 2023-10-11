import { Container, Icon, ButtonBackStyleProps, PageTitle } from "./styles";
import { PressableProps } from "react-native";

type BackButtonProps = PressableProps & {
  types?: ButtonBackStyleProps['types'],
  title?: string
}

export function BackButton ({types = 'neutral', title, ...rest} : BackButtonProps) {
  return (
    <Container {...rest}>
      <Icon types={types}/>
      { title && 
        <PageTitle>
            {title}
        </PageTitle>
      }
    </Container>
  )
}