import { PressableProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Container, Icon, ButtonBackStyleProps, PageTitle } from './styles'

type BackButtonProps = PressableProps & {
  types?: ButtonBackStyleProps['types']
  title?: string
}

export function BackButton({
  types = 'neutral',
  title,
  ...rest
}: BackButtonProps) {
  const navigation = useNavigation()
  function handleBack() {
    navigation.goBack()
  }
  return (
    <Container {...rest} onPress={() => handleBack()}>
      <Icon types={types} />
      {title && <PageTitle>{title}</PageTitle>}
    </Container>
  )
}
