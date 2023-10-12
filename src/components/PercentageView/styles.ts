import styled from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

export type PercentageProps = {
  type: 'primary' | 'secondery'
}

export const Container = styled.TouchableOpacity<PercentageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;

  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding-bottom: 32px;
`
export const ListWrapper = styled.View`
  margin-top: 10px;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`
export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`
export const Icon = styled(ArrowUpRight).attrs<PercentageProps>(
  ({ theme, type }) => ({
    size: 30,
    color: type === 'primary' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)<PercentageProps>`
  align-self: flex-end;
  margin: 8px 8px 0 0;
`
