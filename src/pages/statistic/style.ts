import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

type StatisticPageStyleProps = {
  types: 'green' | 'red'
}

export const Container = styled(SafeAreaView)<StatisticPageStyleProps>`
  display: flex;
  background-color: ${({ theme, types }) => 
    types === 'green' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT 
  };
  flex: 1;
`

export const Header = styled.View`
  display: flex;
  align-items: center;
  height: 130px;
`
export const HeaderNumber = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.XXL}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
`
export const HeaderDescription = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
`

export const Details = styled.View`
  flex: 1;
  gap: 15px;
  padding: 40px 24px;
 
  background-color: ${({theme})=> theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius:20px ;
`

export const Title = styled.Text`
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};

`
export const CardWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 15px;
`
export const CardContainer = styled.View`
  flex: 1;
`