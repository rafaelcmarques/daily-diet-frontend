import { useState } from 'react'

import {
  Container,
  Header,
  Main,
  Form,
  Wrapper,
  Text,
  ChoiceButton,
  Status,
} from './styles'
import { BackButton } from '../../components/BackButton'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function NewMeal() {
  const [isSelected, setIsSelected] = useState<string>()

  return (
    <Container>
      <Header>
        <BackButton types="neutral" title="Nova refeição" />
      </Header>
      <Main>
        <Form>
          <Input inputTitle="Nome" />
          <Input inputTitle="Descrição" />

          <Wrapper>
            <Input inputTitle="Data" />
            <Input inputTitle="Hora" />
          </Wrapper>

          <Text>Está dentro da dieta?</Text>

          <Wrapper style={{ marginBottom: 'auto' }}>
            <ChoiceButton
              types="green"
              isSelected={isSelected === 'onDiet'}
              onPress={() => setIsSelected('onDiet')}
            >
              <Status types="green" />
              <Text>Sim</Text>
            </ChoiceButton>

            <ChoiceButton
              types="red"
              isSelected={isSelected === 'outDiet'}
              onPress={() => setIsSelected('outDiet')}
            >
              <Status types="red" />
              <Text>Não</Text>
            </ChoiceButton>
          </Wrapper>

          <Button title="Cadastrar refeição" />
        </Form>
      </Main>
    </Container>
  )
}
