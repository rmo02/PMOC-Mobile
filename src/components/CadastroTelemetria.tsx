import { Box, HStack, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";


export function CadastroTelemetria() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();


    return (
        <VStack px={5} mt={5}>
        <Text color="gray.300" fontFamily="regular">
          Telemetria
        </Text>

        <VStack bg="white" mt={2} borderRadius={10} py={2} px={5}>
          <TouchableOpacity onPress={() => navigation.navigate('criareditarSwitch')}>
            <HStack alignItems="center" h={10}>
              <Box
                bg="blue.600"
                borderRadius={50}
                alignItems="center"
                justifyContent="center"
                h={30}
                w={30}
              >
                <Ionicons name="ios-pin" size={24} color="white" />
              </Box>
              <VStack px={5} flex={1}>
                <Text fontFamily="bold" fontSize="md">
                  Switch
                </Text>
              </VStack>
              <Box flex={0.1}>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color="gray"
                />
              </Box>
            </HStack>
            <VStack borderTopWidth={0.5} borderColor="gray.200" mt={1}></VStack>
          </TouchableOpacity>

          <VStack mt={2}>
            <TouchableOpacity onPress={() => navigation.navigate('criareditarTelemetria')}>
              <HStack alignItems="center" h={10}>
                <Box
                  bg="blue.600"
                  borderRadius={50}
                  alignItems="center"
                  justifyContent="center"
                  h={30}
                  w={30}
                >
                  <Ionicons name="ios-pin" size={24} color="white" />
                </Box>
                <VStack px={5} flex={1}>
                  <Text fontFamily="bold" fontSize="md">
                    Telemetria
                  </Text>
                </VStack>
                <Box flex={0.1}>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={20}
                    color="gray"
                  />
                </Box>
              </HStack>
            </TouchableOpacity>
            <VStack borderTopWidth={0.5} borderColor="gray.200" mt={1}></VStack>
          </VStack>


        </VStack>
      </VStack>
    );
}