import { Estacoes } from "@components/Estacoes";
import { Header } from "@components/Header";
import { FlatList, VStack } from "native-base";


export function Estacao () {

    return (
        <VStack flex={1} bg='fundo'>
            <Header title="Estações" subtitle="45 estações"/>

            <Estacoes />
        </VStack>
    );
}

