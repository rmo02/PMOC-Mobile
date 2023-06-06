import { Header } from "@components/Header";
import { Center, FlatList, Icon, Input, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { CardManutencao } from "@components/CardManutencao";
import { useEffect, useState } from "react";
import api from "@api/api";

export function Manutencao() {
  const [manutencaoDetail, setManutencaoDetail] = useState<any[]>();

  const getManutencoes = async () => {
    try {
      const res = await api.get("/Manutencoes");
      setManutencaoDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getManutencoes();
  }, []);

  return (
    <VStack flex={1} bg="fundo">
      <Header title="Manutenções" subtitle={`${manutencaoDetail?.length} Manutenções`} />
      <VStack mt={5}>
        <Center>
          <Input
            placeholder="Pesquisa"
            color="gray.50"
            bg="white"
            width="90%"
            borderRadius="12"
            py="3"
            px="1"
            fontSize="14"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                borderWidth={0}
                as={<MaterialIcons name="search" />}
              />
            }
          />
        </Center>

        <FlatList
          data={manutencaoDetail}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardManutencao data={item} />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            marginTop: 5,
            paddingBottom: 250,
            width: "100%",
          }}
          ListEmptyComponent={() => (
            <VStack
              flex={1}
              justifyContent="center"
              alignItems="center"
              mt={125}
            >
              <Text fontFamily="bold" fontSize={20} color="gray.300">
                Não há manutenções cadastradas
              </Text>
            </VStack>
          )}
        />
      </VStack>
    </VStack>
  );
}
