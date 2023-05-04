import { Box, HStack, Text, VStack } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

export function Refrigeracao () {
    return (
        <VStack px={5} mt={2}>
            <Text color='gray.300'>Refrigeração</Text>

            <VStack bg='white' mt={2} borderRadius={10} py={2} px={5}>

                <VStack>
                    <HStack alignItems='center'>
                        <Box bg='blue.600' borderRadius={50} alignItems='center' justifyContent='center' h={30} w={30}>
                            <Ionicons name="ios-pin" size={24} color="white" />
                        </Box>
                        <VStack px={5} flex={1}>
                            <Text fontFamily='bold' fontSize='md'>ARC001</Text>
                            <Text fontSize='xs' color='gray.300'>Marca - Modelo</Text>
                        </VStack>
                        <Box flex={0.1}>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
                        </Box>
                    </HStack>
                    <VStack borderTopWidth={0.5} mt={1}></VStack>
                </VStack>

                <VStack mt={2}>
                    <HStack alignItems='center'>
                        <Box bg='blue.600' borderRadius={50} alignItems='center' justifyContent='center' h={30} w={30}>
                            <Ionicons name="ios-pin" size={24} color="white" />
                        </Box>
                        <VStack px={5} flex={1}>
                            <Text fontFamily='bold' fontSize='md'>ARC002</Text>
                            <Text fontSize='xs' color='gray.300'>Marca - Modelo</Text>
                        </VStack>
                        <Box flex={0.1}>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
                        </Box>
                    </HStack>
                    <VStack borderTopWidth={0.5} mt={1}></VStack>
                </VStack>

                <VStack mt={2}>
                    <HStack alignItems='center'>
                        <Box bg='blue.600' borderRadius={50} alignItems='center' justifyContent='center' h={30} w={30}>
                            <Ionicons name="ios-pin" size={24} color="white" />
                        </Box>
                        <VStack px={5} flex={1}>
                            <Text fontFamily='bold' fontSize='md'>ARC003</Text>
                            <Text fontSize='xs' color='gray.300'>Marca - Modelo</Text>
                        </VStack>
                        <Box flex={0.1}>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
                        </Box>
                    </HStack>
                    <VStack borderTopWidth={0.5} mt={1}></VStack>
                </VStack>

            </VStack>
        </VStack>
    );
}