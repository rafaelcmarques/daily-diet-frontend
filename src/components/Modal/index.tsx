import { Container, Card, Title, Wrapper, BackgroundOverlay } from './styles'
import { Button } from '../Button'

type ModalProps = {
  cancel: () => void
}
export function Modal({ cancel }: ModalProps) {
  return (
    <Container>
      <BackgroundOverlay />
      <Card>
        <Title>Deseja realmente excluir o registro da refeição?</Title>
        <Wrapper>
          <Button title="Cancelar" type="light" onPress={() => cancel()} />
          <Button title="Sim, excluir" />
        </Wrapper>
      </Card>
    </Container>
  )
}
