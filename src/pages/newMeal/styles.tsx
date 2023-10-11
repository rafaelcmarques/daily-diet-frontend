import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.COLORS.GRAY_500};
`

export const Header = styled.View`
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
` 

export const Main = styled.View`
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({theme})=> theme.COLORS.GRAY_700};
`

export const Form = styled.View`
  flex: 1;
  padding: 24px;
  gap: 24px;
`
export const Wrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  
`
export const ButtonWrapper = styled.View`
  
`

export const Text = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};

`