import { Container, Logo, UserProfile, UserProfilePlaceholder } from "./styles"
import logoImg from "./../../assets/Logo.png"

export function Heading() {
  return (
     <Container>
        <Logo source={logoImg}/>
        <UserProfile>
          <UserProfilePlaceholder/>
        </UserProfile>
     </Container>
  )
}