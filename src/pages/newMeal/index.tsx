import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import { MealDTO } from '../../DTOs/MealDTO'
import { mealCreate } from '../../storage/mealCreate'

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MealDTO>()

  async function onSubmit(data: MealDTO) {
    data.status = isSelected as MealDTO['status']
    await mealCreate(data)
  }

  const [isSelected, setIsSelected] = useState<MealDTO['status']>()

  return (
    <Container>
      <Header>
        <BackButton types="neutral" title="Nova refeição" />
      </Header>
      <Main>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
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
        </ScrollView>
      </Main>
    </Container>
  )
}
