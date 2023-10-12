import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import theme from "./src/theme";
import { Home } from "./src/pages/home"
import { Statistic } from "./src/pages/statistic";
import { NewMeal } from "./src/pages/newMeal"
import { Feedback } from "./src/pages/feedback"



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
        {fontsLoaded ? <Feedback /> : <Loading />}
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
