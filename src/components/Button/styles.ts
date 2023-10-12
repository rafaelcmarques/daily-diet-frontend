import styled from 'styled-components/native'

export type ButtonStyleProps = {
  type?: 'dark' | 'light'
}

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-height: 50px;
  min-height: 50px;

  background-color: ${({ theme, type }) =>
    type === 'dark' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
  border: 2px solid;
  border-color: ${({ theme, type }) =>
    type === 'dark' ? 'none' : theme.COLORS.GRAY_300};
  border-radius: 8px;
`

export const Text = styled.Text<ButtonStyleProps>`
  color: ${({ theme, type }) =>
    type === 'dark' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
