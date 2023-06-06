import { HStack, Heading, Image, Text, VStack } from "native-base";
import Retangulo from '@assets/retangulo.png'


export function CardInfoEquipamento() {
    return (
        <VStack
        zIndex={1}
        w="90%"
        position="absolute"
        p={5}
        px={5}
        bg="white"
        marginX={5}
        mt={120}
        borderRadius={10}
      >
        <HStack>
          <Heading color="blue.600" fontFamily="bold" fontSize="xl">
            Nobreak:
          </Heading>
          <Heading
            marginLeft={1}
            color="gray.900"
            fontFamily="bold"
            fontSize="xl"
          >
            NBR001
          </Heading>
        </HStack>

        <HStack justifyContent='space-between' alignItems='center'>
          <VStack mt={3}>
            <HStack>
              <Text color="blue.200" fontFamily="regular">
                Marca:
              </Text>
              <Text marginLeft={1} color="gray.900" fontFamily="regular">
                Marca X
              </Text>
            </HStack>
            <HStack mt={2}>
              <Text color="blue.200" fontFamily="regular">
                Modelo:
              </Text>
              <Text marginLeft={1} color="gray.900" fontFamily="regular">
                Modelo X
              </Text>
            </HStack>
            <HStack mt={2}>
              <Text color="blue.200" fontFamily="regular">
                Tensão entrada:
              </Text>
              <Text marginLeft={1} color="gray.900" fontFamily="regular">
                320v
              </Text>
            </HStack>
            <HStack mt={2}>
              <Text color="blue.200" fontFamily="regular">
                Tensão saida:
              </Text>
              <Text marginLeft={1} color="gray.900" fontFamily="regular">
                220v
              </Text>
            </HStack>
          </VStack>
          <Image 
          source={Retangulo}
          alt="logo"
          />
        </HStack>
      </VStack>
    )
}