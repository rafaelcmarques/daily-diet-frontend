import { useState } from 'react'
import { ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

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

type FormData = {
  name: string
  description: string
  date: string
  hour: string
  isSelected: string
}

export function NewMeal() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  function onSubmit(data: FormData) {
    data.isSelected = isSelected as string
    console.log(data)
  }

  const [isSelected, setIsSelected] = useState<string>()

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header>
          <BackButton types="neutral" title="Nova refeição" />
        </Header>
        <Main>
          <Form>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  inputTitle="Nome"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="name"
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  inputTitle="Descrição"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="description"
            />
            <Wrapper>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    inputTitle="Data"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="date"
              />

              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    inputTitle="Hora"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="hour"
              />
            </Wrapper>
            <Text>Está dentro da dieta?</Text>
            <Wrapper style={{ flex: 1 }}>
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
            <Button
              title="Cadastrar refeição"
              onPress={handleSubmit(onSubmit)}
            />
          </Form>
        </Main>
      </ScrollView>
    </Container>
  )
}
