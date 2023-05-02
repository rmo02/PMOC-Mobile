import { Header } from "@components/Header";
import { Center, Text, VStack } from "native-base";

export function Manutencao () {
    return (
        <VStack flex={1} bg='fundo'>
            <Header />
            <Center>
                <Text>Manutençao</Text>
            </Center>
        </VStack>
    );
}