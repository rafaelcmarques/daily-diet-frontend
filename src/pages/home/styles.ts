import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { css } from 'styled-components'

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: black;
`
export const ListWrapper = styled.View`
  margin-top: 20px;
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  padding-bottom: 10px;
`
export const TextSection = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin: 24px 0 10px 0;
`
export const EmptyListView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const EmptyListMessage = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`
