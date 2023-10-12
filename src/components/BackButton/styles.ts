import styled from 'styled-components/native'
import { Pressable } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

export type ButtonBackStyleProps = {
  types?: 'neutral' | 'green' | 'red'
}

export const Container = styled(Pressable)`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`

export const Icon = styled(ArrowLeft).attrs<ButtonBackStyleProps>(
  ({ theme, types }) => ({
    size: 24,
    color:
      types == 'green'
        ? theme.COLORS.GREEN_LIGHT
        : types == 'red'
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_100,
  }),
)<ButtonBackStyleProps>``

export const PageTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin: auto;
`
