import { Header } from "@components/Header";
import { Center, HStack, Heading, ScrollView, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { EditExaustorForm } from "@components/EditExaustorForm";
import { useState } from "react";
import api from "@api/api";

export function CriarEditarExaustor() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [exaustor, setExaustor] = useState<any[]>([{}]);

  function HandleNavigateGoBack() {
    if (exaustor != undefined) {
      navigation.navigate("tipoEquipamento");
    } else {
      navigation.navigate("estacaoDetails");
    }
  }

  const onSubmit = async (data: FormData) => {
    console.log('página do exaustor',data);
    // try {
    //   const res = await api.post('/exaustores',{
    //     "codigo": data.codigo,
    //     "status": "funcionando",
    //     "marca": data.marca,
    //     "modelo": data.modelo,
    //     "category": "refrigeracao"
    //   }, {
    //     headers: { "Content-Type": "application/json" }
    //   });
    //   console.log(res);
    // } catch (error) {
    //   console.log(error)
    // }
  };

  return (
    <ScrollView
      bg="fundo"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="fundo" position="relative" h={800}>
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
              <HStack alignItems="center" pt={5} ml={2}>
                <MaterialIcons name="arrow-back-ios" size={20} color="white" />
                <Text color="white" fontFamily="regular" fontSize="md">
                  Cancelar
                </Text>
              </HStack>
            </TouchableOpacity>
            <Center flex={0.7}>
              <Heading pt={5} color="white" fontFamily="bold">
                {exaustor === undefined ? "EXAU001" : "Novo Receptor"}
              </Heading>
            </Center>
          </HStack>
        </VStack>
        <EditExaustorForm onSubmit={onSubmit} />
      </VStack>
    </ScrollView>
  );
}
