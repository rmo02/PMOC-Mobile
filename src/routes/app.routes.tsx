import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { HomePage } from "@screens/HomePage";
import { useTheme } from "native-base";
import { Platform } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Manutencao } from "@screens/Manutencao";
import { Estacao } from "@screens/Estacao";
import { Perfil } from "@screens/Perfil";

import { Novo } from "@screens/Novo";
import { ButtonNew } from "@components/ButtonNew";
import { EstacaoDetails } from "@screens/EstacaoDetails";

import { CriarEditarEletrica } from "@screens/CriarEditarEletrica";
import { CriarEditarAntena } from "@screens/CriarEditarAntena";
import { CriarEditarAr } from "@screens/CriarEditarAr";

import { CriarEditarExaustor } from "@screens/CriarEditarExaustor";
import { CriarEditarSwitch } from "@screens/CriarEditarSwitch";
import { CriarEditarTelemetria } from "@screens/CriarEditarTelemetria";

import { CriarEditarDisjuntor } from "@screens/CriarEditarDisjuntor";
import { CriarEditarParabolica } from "@screens/CriarEditarParabolica";
import { CriarEditarReceptor } from "@screens/CriarEditarReceptor";

import { CriarEditarTransmissor } from "@screens/CriarEditarTransmissor";
import { CriarEditarCombinador } from "@screens/CriarEditarCombinador";
import { CriarEditarCabo } from "@screens/CriarEditarCabo";

import { CriarEditarTorre } from "@screens/CriarEditarTorre";
import { CriarEditarDPS } from "@screens/CriarEditarDPS";
import { TipoEquipamento } from "@screens/TipoEquipamento";
import { EquipamentoDetails } from "@screens/EquipamentoDetails";

type AppRoutes = {
  monitor: undefined;
  manutencao: undefined;
  novo: undefined;
  estacao: undefined;
  perfil: undefined;
  tipoEquipamento: undefined;
  estacaoDetails: { id: string };
  equipamentoDetails: undefined;
  criareditarEletrica: undefined;
  criareditarAntena: undefined;
  criareditarAr: undefined;
  criareditarExaustor: undefined;
  criareditarSwitch: undefined;
  criareditarTelemetria: undefined;
  criareditarDisjuntor: undefined;
  criareditarParabolica: undefined;
  criareditarReceptor: undefined;
  criareditarTransmissor: undefined;
  criareditarCombinador: undefined;
  criareditarCabo: undefined;
  criareditarTorre: undefined;
  criareditarDPS: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[7];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.amber[500],
        tabBarInactiveTintColor: colors.blue[500],
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 78 : 96,
          paddingTop: sizes[2],
          paddingBottom: sizes[5],
        },
      }}
    >
      <Screen
        name="monitor"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }: any) => (
            <MaterialCommunityIcons
              name="signal-cellular-2"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="manutencao"
        component={Manutencao}
        options={{
          tabBarIcon: ({ color }: any) => (
            <MaterialCommunityIcons
              name="cog-box"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="novo"
        component={Novo}
        options={{
          tabBarIcon: ({ color, focused }: any) => <ButtonNew />,
        }}
      />

      <Screen
        name="estacao"
        component={Estacao}
        options={{
          tabBarIcon: ({ color }: any) => (
            <MaterialCommunityIcons
              name="view-grid-plus-outline"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }: any) => (
            <MaterialCommunityIcons
              name="face-man"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="estacaoDetails"
        component={EstacaoDetails}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarEletrica"
        component={CriarEditarEletrica}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarAntena"
        component={CriarEditarAntena}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarAr"
        component={CriarEditarAr}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarExaustor"
        component={CriarEditarExaustor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarSwitch"
        component={CriarEditarSwitch}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarTelemetria"
        component={CriarEditarTelemetria}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarDisjuntor"
        component={CriarEditarDisjuntor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarParabolica"
        component={CriarEditarParabolica}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarReceptor"
        component={CriarEditarReceptor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarTransmissor"
        component={CriarEditarTransmissor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarCombinador"
        component={CriarEditarCombinador}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarCabo"
        component={CriarEditarCabo}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarTorre"
        component={CriarEditarTorre}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criareditarDPS"
        component={CriarEditarDPS}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="tipoEquipamento"
        component={TipoEquipamento}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="equipamentoDetails"
        component={EquipamentoDetails}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
