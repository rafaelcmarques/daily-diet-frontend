import { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { MealDTO } from '../../DTOs/MealDTO'
import { mealRemove } from '../../storage/mealRemove'
import {
  Container,
  Header,
  Main,
  Text,
  Title,
  Subtitle,
  StatusIcon,
  Status,
} from './styles'

import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'

type RouteParams = {
  meal: MealDTO
}

export function MealDetails() {
  const route = useRoute()
  const navigation = useNavigation()
  const { meal } = route.params as RouteParams

  const [showModal, setShowModal] = useState(false)

  function handleDeleteMeal() {
    setShowModal(true)
  }

  function handleCancel() {
    setShowModal(false)
  }

  async function handleConfirm(deletedMeal: MealDTO) {
    await mealRemove(deletedMeal)
    navigation.goBack()
  }

  const theme = useTheme()

  return (
    <Container types={meal.status}>
      {showModal && (
        <Modal
          cancel={handleCancel}
          confirm={() => handleConfirm(meal)}
          meal={meal}
        />
      )}

      <Header>
        <BackButton types="neutral" title="Editar refeição" />
      </Header>
      <Main>
        <Title>{meal.name}</Title>
        <Text>{meal.description}</Text>

        <Subtitle>Data e hora</Subtitle>
        <Text>
          {meal.date} às {meal.hour}
        </Text>
        {meal.status === 'onDiet' ? (
          <Status types="onDiet">
            <StatusIcon types={meal.status} />
            <Text> dentro da dieta</Text>
          </Status>
        ) : (
          <Status types="outDiet">
            <StatusIcon types={meal.status} />
            <Text> fora da dieta</Text>
          </Status>
        )}
        <Button
          title="Editar refeição"
          icon={<PencilSimpleLine color={theme.COLORS.GRAY_700} />}
        />
        <Button
          title="Excluir refeição"
          type="light"
          icon={<Trash color={theme.COLORS.GRAY_100} />}
          onPress={() => handleDeleteMeal()}
        />
      </Main>
    </Container>
  )
}
