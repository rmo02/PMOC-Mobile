import { Center, HStack, Heading, Icon, Input, Pressable, Text, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";



export function EditCaboForm () {
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
      <Center>
        <Heading color="blue.600" fontFamily="bold" fontSize="xl">
          Cabo
        </Heading>
      </Center>

      <VStack>
        <VStack mt={5}>
          <Text color="blue.600" fontFamily="regular" fontSize="md">
            Tag
          </Text>
          <Input
            isRequired
            mt={2}
            bg="gray.50"
            borderWidth={0}
            h={12}
            placeholder="NBR0001"
            maxW="100%"
            InputRightElement={
              <Pressable>
                <Icon
                  as={<Ionicons name="md-close-circle" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />
        </VStack>

        <VStack mt={5}>
          <Text color="blue.600" fontFamily="regular" fontSize="md">
            Marca
          </Text>
          <Input
            isRequired
            mt={2}
            bg="gray.50"
            borderWidth={0}
            h={12}
            placeholder="Marca X"
            maxW="100%"
            InputRightElement={
              <Pressable>
                <Icon
                  as={<Ionicons name="md-close-circle" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />
        </VStack>

        <VStack mt={5}>
          <Text color="blue.600" fontFamily="regular" fontSize="md">
            Modelo
          </Text>
          <Input
            isRequired
            mt={2}
            bg="gray.50"
            borderWidth={0}
            h={12}
            placeholder="Modelo X"
            maxW="100%"
            InputRightElement={
              <Pressable>
                <Icon
                  as={<Ionicons name="md-close-circle" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />
        </VStack>

        <VStack mt={5}>
          <Text color="blue.600" fontFamily="regular" fontSize="md">
            Tipo
          </Text>
          <Input
            isRequired
            mt={2}
            bg="gray.50"
            borderWidth={0}
            h={12}
            placeholder="CAT-6"
            maxW="100%"
            InputRightElement={
              <Pressable>
                <Icon
                  as={<Ionicons name="md-close-circle" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />
        </VStack>

        <VStack mt={5}>
          <Text color="blue.600" fontFamily="regular" fontSize="md">
            Tamanho
          </Text>
          <Input
            mt={2}
            bg="gray.50"
            borderWidth={0}
            keyboardType="decimal-pad"
            h={12}
            placeholder="220"
            maxW="100%"
            InputRightElement={
              <Pressable>
                <Icon
                  as={<Ionicons name="md-close-circle" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />
        </VStack>

        <VStack mt={5}>
          <Text color="blue.600" fontFamily="regular" fontSize="md">
            Categoria equipamento
          </Text>
          <Input
            mt={2}
            bg="gray.50"
            borderWidth={0}
            h={12}
            placeholder="Irradiação"
            maxW="100%"
            InputRightElement={
              <Pressable>
                <Icon
                  as={<Ionicons name="md-close-circle" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />
        </VStack>

        <VStack mt={5}>
          <Text color="blue.600" fontFamily="regular" fontSize="md">
            Criado por
          </Text>
          <Input
            mt={2}
            bg="gray.50"
            borderWidth={0}
            h={12}
            placeholder="Ramon"
            maxW="100%"
            InputRightElement={
              <Pressable>
                <Icon
                  as={<Ionicons name="md-close-circle" />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />
        </VStack>

      </VStack>

    </VStack>

    
    );
}