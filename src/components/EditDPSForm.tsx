import { Box, Center, CheckIcon, HStack, Heading, Icon, Input, Pressable, Select, Text, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "./Button";
import { useState } from "react";


export function EditDPSForm () {
  const [service, setService] = useState("");

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
          DPS001
        </Heading>
      </Center>

      <VStack>
        <VStack mt={5}>
          <Text color="blue.600" fontFamily="regular" fontSize="md">
            Código
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
            Status
          </Text>
          <Box maxW="full">
            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Status"
              _selectedItem={{
                bg: "gray.50",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              h={12}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="Parado" value="stop" />
              <Select.Item label="Manutenção" value="main" />
              <Select.Item label="Funcionando" value="play" />
            </Select>
          </Box>
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
            Corrente máxima
          </Text>
          <Input
            isRequired
            mt={2}
            bg="gray.50"
            borderWidth={0}
            keyboardType="decimal-pad"
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
            Classe
          </Text>
          <Input
            isRequired
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

        <VStack mt={5}>
          <Text color="blue.600" fontFamily="regular" fontSize="md">
            Categoria do equipamento
          </Text>
          <Input
            isRequired
            mt={2}
            bg="gray.50"
            borderWidth={0}
            h={12}
            placeholder="Elétrica"
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