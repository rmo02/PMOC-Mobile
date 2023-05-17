import { Box, HStack, Text, VStack } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";

export function Eletrica () {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function HandleNavigateEditareletrica () {
    //   navigation.navigate('')
    }

    return (
        <VStack px={5} mt={2}>
            <Text color='gray.300'>Elétrica</Text>
            <VStack bg='white' mt={2} borderRadius={10} py={2} px={5}>

                <TouchableOpacity onPress={() => console.log('clicou')}>
                    <HStack alignItems='center'>
                        <Box bg='blue.600' borderRadius={50} alignItems='center' justifyContent='center' h={30} w={30}>
                            <Ionicons name="ios-pin" size={24} color="white" />
                        </Box>
                        <VStack px={5} flex={1}>
                            <Text fontFamily='bold' fontSize='md'>NBR001</Text>
                            <Text fontSize='xs' color='gray.300'>Marca - Modelo</Text>
                        </VStack>
                        <Box flex={0.1}>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
                        </Box>
                    </HStack>
                    <VStack borderTopWidth={0.5} mt={1}></VStack>
                </TouchableOpacity>

                <VStack mt={2}>
                    <HStack alignItems='center'>
                        <Box bg='blue.600' borderRadius={50} alignItems='center' justifyContent='center' h={30} w={30}>
                            <Ionicons name="ios-pin" size={24} color="white" />
                        </Box>
                        <VStack px={5} flex={1}>
                            <Text fontFamily='bold' fontSize='md'>NBR002</Text>
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
                            <Text fontFamily='bold' fontSize='md'>NBR003</Text>
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