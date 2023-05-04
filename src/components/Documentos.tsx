import { HStack, Text, VStack } from "native-base";
import { Button } from "./Button";

export function Documentos() {
  return (
    <VStack p={5} px={5} bg="white" marginX={5} mt={2} borderRadius={10}>
      <Text color="blue.600" fontFamily="regular" fontSize="md">
        Documentos
      </Text>
      <HStack mt={3} justifyContent="space-between">
        <Text color="blue.200" fontFamily="regular">
          Ramon Maia
        </Text>
        <Text color="blue.200" fontFamily="regular">
          TV Mirante
        </Text>
        <Text fontWeight="bold" fontFamily="regular">
          25/04/2023
        </Text>
      </HStack>

      <Text mt={2} color="gray.450">
        Rua teste. 220 - Bairro teste - Cururupu, MA - 37560-252
      </Text>

      <Button title="Em Execução" />
    </VStack>
  );
}
