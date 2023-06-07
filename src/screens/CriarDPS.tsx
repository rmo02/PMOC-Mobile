import { Header } from "@components/Header";
import { Center, HStack, Heading, ScrollView, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { EditDPSForm } from "@components/EditDPSForm";
import { useEffect, useState } from "react";
import api from "@api/api";
import { DPSDTO } from "src/dtos/DPSDTO";

export function CriarDPS() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [dps, setDps] = useState<any[]>([]);

  function HandleNavigateGoBack() {
    if (dps != undefined) {
      navigation.navigate("tipoEquipamento");
    } else {
      navigation.navigate("estacao");
    }
  }

  useEffect(() => {
    getDPS();
  }, []);

  async function getDPS() {
    try {
      const res = await api.get("/DPS");
      setDps(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (data: DPSDTO) => {
    const dadosDPS = 
      {
        dados_gerais: {
          "codigo": data.dados_gerais.codigo,
          "marca": data.dados_gerais.marca,
          "modelo": data.dados_gerais.modelo,
        },
        "status": data.status,
        "corrente_maxima": +data.corrente_maxima,
        "classe": data.classe,
        "category": "Eletrica",
      }
    console.log(dadosDPS)
    try {
      const res = await api.post("/DPS", dadosDPS);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitUpdate = async (data: any) => {
    const dados = {
      codigo: data.codigo,
      marca: data.marca,
      status: data.status,
      modelo: data.modelo,
      corrente_maxima: data.corrente_maxima,
      classe: data.classe,
      category: "Eletrica",
    };
    try {
      const res = await api.put("/DPS/1", dados);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (data: any) => {
    try {
      const res = await api.delete("/DPS/1");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
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
                {dps === undefined ? "Novo DPS" : dps[0]?.codigo}
              </Heading>
            </Center>
          </HStack>
        </VStack>
        <EditDPSForm
          onSubmit={onSubmit}
          onSubmitUpdate={onSubmitUpdate}
          onDelete={onDelete}
          DPS={dps}
        />
      </VStack>
    </ScrollView>
  );
}
