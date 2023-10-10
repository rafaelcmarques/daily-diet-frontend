import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import theme from "./src/theme";
import { Statistic } from "./src/pages/statistic"

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  })

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />
        {fontsLoaded ? <Statistic /> : <Loading />}
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
