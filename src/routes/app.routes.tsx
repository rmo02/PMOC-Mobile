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

import { CriarEletrica } from "@screens/CriarEletrica";
import { CriarAntena } from "@screens/CriarAntena";
import { CriarAr } from "@screens/CriarAr";

import { CriarExaustor } from "@screens/CriarExaustor";
import { CriarSwitch } from "@screens/CriarSwitch";
import { CriarTelemetria } from "@screens/CriarTelemetria";

import { CriarDisjuntor } from "@screens/CriarDisjuntor";
import { CriarParabolica } from "@screens/CriarParabolica";
import { CriarReceptor } from "@screens/CriarReceptor";

import { CriarTransmissor } from "@screens/CriarTransmissor";
import { CriarCombinador } from "@screens/CriarCombinador";
import { CriarCabo } from "@screens/CriarCabo";

import { CriarTorre } from "@screens/CriarTorre";
import { CriarDPS } from "@screens/CriarDPS";
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
  criarEletrica: undefined;
  criarAntena: undefined;
  criarAr: undefined;
  criarExaustor: undefined;
  criarSwitch: undefined;
  criarTelemetria: undefined;
  criarDisjuntor: undefined;
  criarParabolica: undefined;
  criarReceptor: undefined;
  criarTransmissor: undefined;
  criarCombinador: undefined;
  criarCabo: undefined;
  criarTorre: undefined;
  criarDPS: undefined;
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
        name="criarEletrica"
        component={CriarEletrica}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarAntena"
        component={CriarAntena}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarAr"
        component={CriarAr}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarExaustor"
        component={CriarExaustor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarSwitch"
        component={CriarSwitch}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarTelemetria"
        component={CriarTelemetria}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarDisjuntor"
        component={CriarDisjuntor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarParabolica"
        component={CriarParabolica}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarReceptor"
        component={CriarReceptor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarTransmissor"
        component={CriarTransmissor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarCombinador"
        component={CriarCombinador}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarCabo"
        component={CriarCabo}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarTorre"
        component={CriarTorre}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="criarDPS"
        component={CriarDPS}
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
