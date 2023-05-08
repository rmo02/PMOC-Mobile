import { Header } from "@components/Header";
import { Center, Text, VStack } from "native-base";

export function Novo() {
  return (
    <VStack flex={1} bg="fundo">
      <Header />
      <Center>
        <Text>Novo</Text>
      </Center>
    </VStack>
  );
}
