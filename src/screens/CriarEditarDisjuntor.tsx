import {
  Center,
  HStack,
  Heading,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { EditDisjuntorForm } from "@components/EditDisjuntorForm";
import { useState } from "react";

export function CriarEditarDisjuntor() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const [ disjuntor, setDisjuntor ] = useState<any[]>([])


    function HandleNavigateGoBack() {
      if(disjuntor != undefined) {
      navigation.navigate("tipoEquipamento");
      } else {
        navigation.navigate("estacaoDetails");
      }
    }

    const onSubmit = async (data: any) => {
      const dados = {
        "codigo": data.codigo,
        "status": data.status,
        "marca": data.marca,
        "modelo": data.modelo,
        "corrente_maxima": data.corrente_maxima,
        "category": "Eletrica",
      };
      console.log(dados);
      // Faça a requisição POST usando a biblioteca de sua escolha
      // try {
      //   const res = await api.post('/exaustores',dados
      //   );
      //   console.log(res.data);
      // } catch (error) {
      //   console.log(error);
      // }
    };


  return (
    <ScrollView
      bg="fundo"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="fundo" position="relative" h={1000}>
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
                {disjuntor != undefined ? "Novo Disjuntor" : "Disj001"}
              </Heading>
            </Center>
          </HStack>
        </VStack>
        <EditDisjuntorForm onSubmit={onSubmit} />
      </VStack>
    </ScrollView>
  );
}
