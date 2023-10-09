import { Container, Text, ListWrapper } from "./styles"

import { PercentageView } from "../../components/PercentageView"
import { MealItem } from "../../components/MealItem"
import { Heading } from "../../components/Heading"
import { Button } from "../../components/Button"

import { Plus } from "phosphor-react-native"

export function Home(){
  return (
    <Container>
      <Heading/>
      <PercentageView type="primary"/>
      <Text>
        Refeições
      </Text>
      <Button 
        title="Nova refeição"
        icon={<Plus color="white"/>}
      />
      <ListWrapper>
        <Text>
          08.02.2023
        </Text>
        <MealItem title="X-tudo" status="secondery"/>
        <MealItem title="Salada" status="primary"/>
        <MealItem title="Frango frito" status="secondery"/>
        <MealItem title="Ovo cozido" status="primary"/>
      </ListWrapper>

    </Container>
  )
}