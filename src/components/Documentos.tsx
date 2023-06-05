import { HStack, Text, VStack } from "native-base";
import { AlphabetFilter } from "./AlphabetFilter";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  data: any;
};

export function Documentos({ data, ...rest }: Props) {
  return (
    <HStack marginX={5} w='90%' bg='white' >
        <VStack bg='white' w='full' >
            <VStack px={5} py={1}>
            <Text fontFamily='bold' fontSize='md'>{data.nome}</Text>
            <Text fontSize='xs' color='gray.300'>{data.descricao}</Text>
            <VStack borderTopWidth={0.5} mt={1}/>
            </VStack>
        </VStack>
    </HStack>
  );
}
