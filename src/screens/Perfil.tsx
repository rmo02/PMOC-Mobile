import { Header } from "@components/Header";
import { Center, Text, VStack } from "native-base";

export function Perfil () {
    return (
        <VStack flex={1} bg='fundo'>
            <Header />
            <Center>
                <Text>Perfil</Text>
            </Center>
        </VStack>
    );
}