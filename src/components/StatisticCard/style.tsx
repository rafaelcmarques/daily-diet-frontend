import styled from "styled-components/native";

export type CardProps = {
  types: 'neutral' | 'green' | 'red'
}

export const Container = styled.View<CardProps>`
  width: 100%;
  align-items: center;
  padding: 25px;
  border-radius: 8px;

  background-color: ${({ types, theme }) =>
    types === 'green'
      ? theme.COLORS.GREEN_LIGHT 
      : types === 'red'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600
  };
`

export const CardNumber = styled.Text`
font-size: ${({theme})=> theme.FONT_SIZE.XXL}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD}
`

export const Description = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  text-align: center;
`