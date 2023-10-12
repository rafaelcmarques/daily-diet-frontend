import styled from 'styled-components/native'

export type StatusPropsStyle = {
  types: 'onDiet' | 'outDiet'
}

export const Container = styled.View<StatusPropsStyle>`
  flex: 1;
  background-color: ${({ theme, types }) =>
    types === 'onDiet' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Header = styled.View`
  height: 120px;
  display: flex;
  flex-direction: row;
`

export const Main = styled.View`
  flex: 1;
  padding: 24px;
  gap: 10px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Wrapper = styled.View`
  flex-direction: row;
  gap: 10px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Status = styled.View<StatusPropsStyle>`
  flex: 1;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  border-radius: 17px;
  max-height: 40px;
  width: 150px;
  margin-top: 24px;
  margin-bottom: auto;
`

export const StatusIcon = styled.View<StatusPropsStyle>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, types }) =>
    types === 'onDiet' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
