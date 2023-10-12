import styled from "styled-components/native";

export type PagePropsStyle = {
  type: 'onDiet' | 'outDiet'
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  justify-content: center;
  padding: 0 32px;

`

export const Title = styled.Text<PagePropsStyle>`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, type }) =>
    type === 'onDiet' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
`;

export const FeedbackImage = styled.Image`
  width: 224px;
  height: 288px;
  
`