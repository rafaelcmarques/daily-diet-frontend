import { Container, Header, Main, Form, Wrapper, Text, ButtonWrapper } from "./styles"
import { BackButton } from "../../components/BackButton"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function NewMeal () {
  return (
    <Container>
      <Header>
          <BackButton types="neutral" title="Nova refeição"/>
      </Header>
      <Main>
        <Form>
          <Input inputTitle="Nome"/>
          <Input inputTitle="Descrição"/>

          <Wrapper>
            <Input inputTitle="Data"/>
            <Input inputTitle="Hora"/>
          </Wrapper>


          <Text>
            Está dentro da dieta?
          </Text>

          <Wrapper style={{marginBottom: 'auto'}}>
            <Button title="Sim" type="light"/>
            <Button title="Não" type="light"/>
          </Wrapper>

          
            <Button title="Cadastrar refeição"/>
          
          
        </Form>
      </Main>
    </Container>
  )
}