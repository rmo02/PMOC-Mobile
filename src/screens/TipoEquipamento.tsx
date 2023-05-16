import { Center, HStack, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";


export function TipoEquipamento() {
  return (
    <VStack bg="fundo" flex={1}>
      <VStack
        pt={16}
        pb={20}
        px={8}
        bg={{
          linearGradient: {
            colors: ["roxo.300", "roxo.500"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
      >
        <HStack>
        <MaterialIcons name="arrow-back-ios" size={20} color="white" />
            <Text color="white" fontFamily="regular" fontSize="md">
              Cancelar
            </Text>
        </HStack>

        <Center >
            <Text color='white' fontFamily='bold' fontSize={20}>Tipo de equipamento</Text>
        </Center>
      </VStack>
    </VStack>
  );
}
