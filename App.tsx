import { StatusBar } from 'react-native'
import Toast from 'react-native-toast-message'
import { Loading } from './src/components/Loading'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  useFonts,
  // eslint-disable-next-line camelcase
  NunitoSans_400Regular,
  // eslint-disable-next-line camelcase
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { Routes } from './src/routes'

import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    NunitoSans_400Regular,
    // eslint-disable-next-line camelcase
    NunitoSans_700Bold,
  })

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
        <Toast />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
