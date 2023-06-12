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

import { EditarAntena } from "@screens/EditarAntena";
import { EditarAr } from "@screens/EditarAr";
import { EditarCabo } from "@screens/EditarCabo";

import { EditarCombinador } from "@screens/EditarCombinador";
import { EditarDisjuntor } from "@screens/EditarDisjuntor";
import { EditarDPS } from "@screens/EditarDPS";

import { EditarEletrica } from "@screens/EditarEletrica";
import { EditarExaustor } from "@screens/EditarExaustor";
import { EditarParabolica } from "@screens/EditarParabolica";

import { EditarReceptor } from "@screens/EditarReceptor";
import { EditarSwitch } from "@screens/EditarSwitch";
import { EditarTelemetria } from "@screens/EditarTelemetria";

import { EditarTorre } from "@screens/EditarTorre";
import { EditarTransmissor } from "@screens/EditarTransmissor";
import { AntenaDTO } from "src/dtos/AntenaDTO";

import { ArCondionadoDTO } from "src/dtos/ArCondiconadoDTO";
import { CaboDTO } from "src/dtos/CaboDTO";
import { CombinadoDTO } from "src/dtos/CombinadorDTO";

import { DisjuntosDTO } from "src/dtos/DisjuntorDTO";
import { DPSDTO } from "src/dtos/DPSDTO";
import { NobreakDTO } from "src/dtos/NobreakDTO";

import { ExaustorDTO } from "src/dtos/ExaustorDTO";
import { ParabolicaDTO } from "src/dtos/ParabolicaDTO";
import { ReceptorDTO } from "src/dtos/ReceptorDTO";

import { SwitchDTO } from "src/dtos/SwitchDTO";
import { TelemetriaDTO } from "src/dtos/TelemetriaDTO";
import { TorreDTO } from "src/dtos/TorreDTO";

import { TransmissorDTO } from "src/dtos/TransmissorDTO";

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
  editarAntena: AntenaDTO;
  editarAr: ArCondionadoDTO;
  editarCabo: CaboDTO;
  editarCombinador: CombinadoDTO;
  editarDisjuntor: DisjuntosDTO;
  editarDPS: DPSDTO;
  editarEletrica: NobreakDTO;
  editarExaustor: ExaustorDTO;
  editarParabolica: ParabolicaDTO;
  editarReceptor: ReceptorDTO;
  editarSwitch: SwitchDTO;
  editarTelemetria: TelemetriaDTO;
  editarTorre: TorreDTO;
  editarTransmissor: TransmissorDTO;

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

      <Screen
        name="editarAntena"
        component={EditarAntena}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarAr"
        component={EditarAr}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarCabo"
        component={EditarCabo}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarCombinador"
        component={EditarCombinador}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarDisjuntor"
        component={EditarDisjuntor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarDPS"
        component={EditarDPS}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarEletrica"
        component={EditarEletrica}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarExaustor"
        component={EditarExaustor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarParabolica"
        component={EditarParabolica}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarReceptor"
        component={EditarReceptor}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarSwitch"
        component={EditarSwitch}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarTelemetria"
        component={EditarTelemetria}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarTorre"
        component={EditarTorre}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="editarTransmissor"
        component={EditarTransmissor}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
