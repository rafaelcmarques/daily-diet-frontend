import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;

  background-color: ${({theme})=> theme.COLORS.GRAY_700};
  color: black;
`
export const ListWrapper = styled.View`
  margin-top: 20px;
`

export const Text = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  padding: 0 24px;
  padding-bottom: 10px;
`
export const TextSection = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  margin: 24px 24px 10px 24px;
`