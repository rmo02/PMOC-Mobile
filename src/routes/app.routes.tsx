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
import { EditarEletrica } from "@screens/EditarEletrica";
import { EditarAntena } from "@screens/EditarAntena";

type AppRoutes = {
  monitor: undefined;
  manutencao: undefined;
  novo: undefined;
  estacao: undefined;
  perfil: undefined;
  estacaoDetails: undefined;
  editarEletrica: undefined;
  editarAntena: undefined;
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
        name="editarEletrica"
        component={EditarEletrica}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarAntena"
        component={EditarAntena}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
