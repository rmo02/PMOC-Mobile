import { HStack, Text, VStack } from "native-base";
import { TouchableOpacity } from 'react-native';

type Props = {
  data:any
}

export function CardManutencao({data}: Props) {

  return (
    <TouchableOpacity>
      <VStack p={5} px={5} bg="white" marginX={5} mt={2} borderRadius={10}>
        <Text color="blue.600" fontWeight='bold' fontFamily="regular" fontSize="md">
          {data.tipo}
        </Text>
        <HStack mt={3} justifyContent="space-between">
          <Text color="blue.200" fontFamily="regular">
            {data.tec}
          </Text>
          <Text color="blue.200" fontFamily="regular">
            {data.empresa}
          </Text>
          <Text fontWeight="bold" fontFamily="regular">
            {data.data}
          </Text>
        </HStack>

        <Text mt={2} color="gray.450">
          {data.local}
        </Text>

      <VStack
       marginTop={5}
       w='full'
       h={10}
       bg={{
        linearGradient: {
          colors: data.status === "Agendada" ? ["blue.200", "blue.600"] : ["green.300", "green.400"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      rounded={20}
       alignItems='center'
       justifyContent='center'
      >
      <Text color='white' fontFamily='button'>{data.status}</Text>
      </VStack>
      </VStack>

    </TouchableOpacity>
  );
}
