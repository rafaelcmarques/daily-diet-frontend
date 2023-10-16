import styled from 'styled-components/native'
import { User } from 'phosphor-react-native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`

export const Logo = styled.Image`
  width: 82px;
  height: 31px;
`
export const UserProfile = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`
export const UserProfilePlaceholder = styled(User).attrs(({ theme }) => ({
  size: 35,
  color: theme.COLORS.GRAY_100,
}))``
