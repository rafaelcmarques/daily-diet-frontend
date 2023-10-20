import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height

type ChoicePropsButton = {
  types: 'green' | 'red'
  isSelected?: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Header = styled.View`
  height: 120px;
  display: flex;
  flex-direction: row;
`

export const Main = styled.View`
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
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
export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const ChoiceButton = styled.Pressable<ChoicePropsButton>`
  flex: 1;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isSelected, types }) =>
    isSelected && types === 'green'
      ? theme.COLORS.GREEN_LIGHT
      : isSelected && types === 'red'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};
  border: 1px solid;
  border-color: ${({ theme, isSelected, types }) =>
    isSelected && types === 'green'
      ? theme.COLORS.GREEN_DARK
      : isSelected && types === 'red'
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_600};

  border-radius: 8px;
  min-height: 50px;
  max-height: 50px;
`

export const Status = styled.View<ChoicePropsButton>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, types }) =>
    types === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
