import { Center, HStack, Heading, ScrollView, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EditEletricaForm } from "@components/EditEletricaForm";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useState } from "react";

export function CriarEditarEletrica() {
  const [nobreak, setNobreak] = useState<any>([{}]);
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function HandleNavigateGoBack() {
    if(nobreak != undefined) {
    navigation.navigate("tipoEquipamento");
    } else {
      navigation.navigate("estacaoDetails");
    }
    
  }

  return (
    <VStack flex={1} bg="fundo" position="relative">
      <ScrollView>
        <VStack
          pt={8}
          pb={20}
          bg={{
            linearGradient: {
              colors: ["roxo.300", "roxo.500"],
              start: [0, 0],
              end: [1, 0],
            },
          }}
        >
          <HStack alignItems="center" w="full">
            <TouchableOpacity onPress={() => HandleNavigateGoBack()}>
              <HStack alignItems="center" pt={5} ml={2} flex={0.1}>
                <MaterialIcons name="arrow-back-ios" size={20} color="white" />
                <Text color="white" fontFamily="regular" fontSize="md">
                  Cancelar
                </Text>
              </HStack>
            </TouchableOpacity>
            <Center flex={0.7}>
              <Heading pt={5} color="white" fontFamily="bold">
                {nobreak === undefined ? "NBR001" : "Novo Receptor"}
              </Heading>
            </Center>
          </HStack>
        </VStack>

        <EditEletricaForm />

        {nobreak === undefined ? (
          <HStack
            marginX={5}
            justifyContent="center"
            zIndex={1}
            mt="620"
            marginBottom={10}
          >
            <Button title="Excluir" w={160} bg="black.100" rounded={10} />
            <Button title="Salvar" ml={4} w={160} bg="blue.200" rounded={10} />
          </HStack>
        ) : (
          <HStack
            marginX={5}
            justifyContent="center"
            zIndex={1}
            mt="620"
            marginBottom={10}
          >
            <Button title="Salvar" w="full" bg="blue.200" rounded={10} />
          </HStack>
        )}
      </ScrollView>
    </VStack>
  );
}
