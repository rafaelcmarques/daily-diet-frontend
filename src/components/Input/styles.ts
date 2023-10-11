import styled, {css} from "styled-components/native";
import { TextInput } from "react-native";


export const Container = styled.View `
  flex: 1;
  gap: 4px;
  min-height: 85px;
  max-height: 85px;
`
export const InputContainer = styled(TextInput)`
  
  ${({theme})=> css`  
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px solid ${theme.COLORS.GRAY_500};
  `}
  border-radius: 6px;
  padding: 16px;
`

export const TitleInput = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  text-transform: capitalize;
`