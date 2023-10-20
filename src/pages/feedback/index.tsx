import { useRoute, useNavigation } from '@react-navigation/native'

import { MealDTO } from '../../DTOs/MealDTO'

import { Button } from '../../components/Button'
import { Container, Description, Title, FeedbackImage } from './styles'

import PositiveFeedbackImg from './../../assets/positiveFeedbackImg.png'
import NegativeFeedbackImg from './../../assets/negativeFeedback.png'

type RouteParams = {
  status: MealDTO['status']
}

export function Feedback() {
  const route = useRoute()
  const navigation = useNavigation()
  const { status } = route.params as RouteParams

  function handleNavigation() {
    navigation.navigate('home')
  }

  return (
    <Container>
      {status === 'onDiet' ? (
        <>
          <Title type="onDiet">Continue assim!</Title>
          <Description>Você continua dentro da dieta. Muito bem!</Description>
          <FeedbackImage source={PositiveFeedbackImg} />
          <Button title="Ir para pagina inicial" onPress={handleNavigation} />
        </>
      ) : (
        <>
          <Title type="outDiet">Que pena!</Title>
          <Description>
            Você saiu da dieta dessa vez, mas continue se esforçando e não
            desista!
          </Description>
          <FeedbackImage source={NegativeFeedbackImg} />
          <Button title="Ir para pagina inicial" onPress={handleNavigation} />
        </>
      )}
    </Container>
  )
}
