import { Box, HStack, Text, VStack } from "native-base";
import { Button } from "./Button";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
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