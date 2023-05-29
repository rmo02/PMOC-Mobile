import { HStack, Text, VStack } from "native-base";
import { Button } from "./Button";

type Props = {
  data:any
}

export function CardManutencao({data}: Props) {

  return (
    <VStack>
      <VStack p={5} px={5} bg="white" marginX={5} mt={2} borderRadius={10}>
        <Text color="blue.600" fontFamily="regular" fontSize="md">
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

        <Button title={data.status} />
      </VStack>

    </VStack>
  );
}
