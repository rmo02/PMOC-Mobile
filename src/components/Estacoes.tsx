import { HStack, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";



export function Estacoes() {
  return (

    <VStack
      pt={5}
      pb={1}
      px={2}
      marginX={6}
      marginY={5}
      bgColor="white"
      borderRadius={7}
    >
      <TouchableOpacity>
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="black" fontFamily="bold" fontSize="md">
            Estação Cururupu
          </Text>

          <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
        </HStack>
        <VStack
          mt={2}
          borderBottomWidth={1}
          borderBottomColor="gray.250"
        ></VStack>
      </TouchableOpacity>

    </VStack>

  );
}
