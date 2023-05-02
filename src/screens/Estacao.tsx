import { Header } from "@components/Header";
import { Center, Text, VStack } from "native-base";

export function Estacao () {
    return (
        <VStack flex={1} bg='fundo'>
            <Header />
            <Center>
                <Text>Estação</Text>
            </Center>
        </VStack>
    );
}