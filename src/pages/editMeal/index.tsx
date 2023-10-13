import { useState } from 'react'

import {
  Container,
  Header,
  Main,
  Text,
  Title,
  Subtitle,
  StatusIcon,
  Status,
  StatusPropsStyle,
} from './styles'

import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'

type EditMealProps = {
  types: StatusPropsStyle['types']
}

export function EditMeal() {
  const [type, setType] = useState<EditMealProps['types']>('outDiet')
  const [showModal, setShowModal] = useState(false)

  function handleDeleteMeal() {
    setShowModal(true)
  }

  function handleCancel() {
    setShowModal(false)
  }

  const theme = useTheme()

  return (
    <Container types={type}>
      {showModal && <Modal cancel={handleCancel} />}

      <Header>
        <BackButton types="neutral" title="Editar refeição" />
      </Header>
      <Main>
        <Title>Sanduíche</Title>
        <Text>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Text>

        <Subtitle>Data e hora</Subtitle>
        <Text>12/08/2022 às 16:00</Text>
        {type === 'onDiet' ? (
          <Status types="onDiet">
            <StatusIcon types={type} />
            <Text> dentro da dieta</Text>
          </Status>
        ) : (
          <Status types="outDiet">
            <StatusIcon types={type} />
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
