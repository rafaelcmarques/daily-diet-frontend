import styled from 'styled-components/native'

export const Container = styled.View`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const BackgroundOverlay = styled.View`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  opacity: 0.5;
`

export const Card = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  max-height: 192px;
  min-height: 192px;
  border-radius: 8px;
  padding: 24px;
  gap: 24px;
  margin: 28px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`
export const Wrapper = styled.View`
  flex-direction: row;
  gap: 16px;
`
