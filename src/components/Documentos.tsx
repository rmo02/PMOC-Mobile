import { HStack, Text, VStack } from "native-base";

export function Documentos() {
  return (
    <VStack px={5} mt={2}>
    <VStack bg='white' mt={2} borderRadius={10} py={2} px={5}>
        <VStack>
            <HStack alignItems='center'>
                <VStack px={5} >
                    <Text fontFamily='bold' fontSize='md'>NF-e</Text>
                    <Text fontSize='xs' color='gray.300'>Ar Premium</Text>
                </VStack>
            </HStack>
            <VStack borderTopWidth={0.5} mt={1}></VStack>
        </VStack>

        <VStack mt={2}>
            <HStack alignItems='center'>
                <VStack px={5} >
                    <Text fontFamily='bold' fontSize='md'>NF-e</Text>
                    <Text fontSize='xs' color='gray.300'>Ar Premium</Text>
                </VStack>
            </HStack>
            <VStack borderTopWidth={0.5} mt={1}></VStack>
        </VStack>
    </VStack>
  </VStack>
  );
}
