import { Center, HStack, Heading, Icon, Input, Pressable, Text, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "./Button";


export function EditEletricaForm () {
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
          Nobreak
        </Heading>
      </Center>

      <VStack>
        <VStack mt={5}>
          <Text color="blue.600" fontFamily="regular" fontSize="md">
            Tag
          </Text>
          <Input
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
            Tensão Entrada
          </Text>
          <Input
            mt={2}
            bg="gray.50"
            borderWidth={0}
            h={12}
            placeholder="320"
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
            Tensão Saida
          </Text>
          <Input
            mt={2}
            bg="gray.50"
            borderWidth={0}
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

      </VStack>

    </VStack>

    
    );
}