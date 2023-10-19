import { Container, Card, Title, Wrapper, BackgroundOverlay } from './styles'
import { Button } from '../Button'
import { MealDTO } from '../../DTOs/MealDTO'

type ModalProps = {
  cancel: () => void
  confirm: (meal: MealDTO) => void
  meal: MealDTO
}
export function Modal({ cancel, confirm, meal }: ModalProps) {
  return (
    <Container>
      <BackgroundOverlay />
      <Card>
        <Title>Deseja realmente excluir o registro da refeição?</Title>
        <Wrapper>
          <Button title="Cancelar" type="light" onPress={() => cancel()} />
          <Button title="Sim, excluir" onPress={() => confirm(meal)} />
        </Wrapper>
      </Card>
    </Container>
  )
}
