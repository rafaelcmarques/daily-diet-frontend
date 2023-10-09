import styled from "styled-components/native";

export type StatusProps = {
  type:  'primary' | 'secondery'
}

export const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;

  border-radius: 8px;
  margin: 5px 24px 0 24px;
  height: 50px;
  border: 1px solid ${({theme})=> theme.COLORS.GRAY_500};
`
export const Text = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_300};
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  margin-left: 5px;
`
export const Hour = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
`

export const Status = styled.View<StatusProps>`
  height: 14px;
  width: 14px;
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 100%;
  margin-left: auto;
`