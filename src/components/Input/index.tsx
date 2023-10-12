import { TextInput, TextInputProps } from 'react-native'
import { InputContainer, TitleInput, Container } from './styles'
import { useTheme } from 'styled-components/native'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  inputTitle: string
}

export function Input({ inputRef, inputTitle, ...rest }: Props) {
  const { COLORS } = useTheme()
  return (
    <Container>
      <TitleInput>{inputTitle}</TitleInput>
      <InputContainer
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
      />
    </Container>
  )
}
