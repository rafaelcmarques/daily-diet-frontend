import { useState } from "react";
import { Button } from "../../components/Button";
import { Container, Description, Title, FeedbackImage } from "./styles";

import PositiveFeedbackImg from './../../assets/positiveFeedbackImg.png'
import NegativeFeedbackImg from './../../assets/negativeFeedback.png'


export function Feedback() {
  const [mealStatus, setMealStatus] = useState('onDiet')
  return (
    <Container>
      {mealStatus === 'onDiet' ? (
        <>
          <Title type="onDiet">
            Continue assim!
          </Title>
          <Description>
            Você continua dentro da dieta. Muito bem!
          </Description>
          <FeedbackImage source={PositiveFeedbackImg} />
          <Button title="Ir para pagina inicial" />
        </>
      ) :
        <>
          <Title type="outDiet">
            Que pena!
          </Title>
          <Description>
          Você saiu da dieta dessa vez, mas continue se esforçando e não desista!
          </Description>
          <FeedbackImage source={NegativeFeedbackImg} />
          <Button title="Ir para pagina inicial" />
        </>
      }

    </Container>
  )
}