import { Box, HStack, Text, VStack } from "native-base";
import { Eletrica } from "./Eletrica";
import { Refrigeracao } from "./Refrigeracao";

export function Equipamentos () {
    return (
        <VStack >
            <Eletrica />
            <Refrigeracao />
        </VStack>
    );
}