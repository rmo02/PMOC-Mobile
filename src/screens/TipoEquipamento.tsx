import { Box, Center, HStack, ScrollView, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { CadastroEletrica } from "@components/CadastroEletrica";
import { CadastroRefrigeracao } from "@components/CadastroRefrigeracao";
import { CadastroTelemetria } from "@components/CadastroTelemetria";
import { CadastroIrradiacao } from "@components/CadastroIrradiacao";

export function TipoEquipamento() {
  return (
    <VStack bg="fundo" flex={1}>
      <VStack
        pt={16}
        h="22%"
        px={5}
        bg={{
          linearGradient: {
            colors: ["roxo.300", "roxo.500"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        justifyContent="space-between"
      >
        <HStack>
          <MaterialIcons name="arrow-back-ios" size={20} color="white" />
          <Text color="white" fontFamily="regular" fontSize="md">
            Cancelar
          </Text>
        </HStack>

        <Center paddingBottom={2}>
          <Text color="white" fontFamily="bold" fontSize={20}>
            Tipo de equipamento
          </Text>
        </Center>
      </VStack>

      <ScrollView>
        <CadastroEletrica />

        <CadastroRefrigeracao />

        <CadastroTelemetria />

        <CadastroIrradiacao  />
        
      </ScrollView>
    </VStack>
  );
}
