import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  height: 50px;
  margin: 0 24px;

  background-color: ${({theme})=> theme.COLORS.GRAY_200};
  border-radius: 8px;
`

export const Text = styled.Text`
  color: ${({theme})=> theme.COLORS.WHITE};
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
`