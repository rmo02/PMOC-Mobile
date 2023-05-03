import React from "react";
import { StatusBar } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

import { Inter_500Medium } from "@expo-google-fonts/inter";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { THEME, config } from "@theme/index";

import { Loading } from "@components/Loading";
import { EstacaoDetails } from "@screens/EstacaoDetails";
import { Estacao } from "@screens/Estacao";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Inter_500Medium,
  });

  return (
    <NativeBaseProvider theme={THEME} config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <EstacaoDetails /> : <Loading />}
    </NativeBaseProvider>
  );
}
