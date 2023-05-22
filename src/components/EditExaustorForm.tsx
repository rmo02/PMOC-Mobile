import {
  Box,
  Center,
  CheckIcon,
  HStack,
  Heading,
  Icon,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./Button";
import { Input } from "./Input";
import { StatusDropDown } from "./StatusDropDown";

type FormData = {
  codigo: string;
  marca: string;
  status: string;
  modelo: string;
};

export function EditExaustorForm({ onSubmit } :any) {
  const [dataExaustor, setDataExaultor] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();


  return (
    <VStack position="absolute" mt={120} w='full'>
      <VStack p={5} px={5} bg="white" marginX={5} borderRadius={10}>
        <Center>
          <Heading color="blue.600" fontFamily="bold" fontSize="xl">
            Exaustor
          </Heading>
        </Center>

        <VStack>
          <VStack mt={5}>
            <Text color="blue.600" fontFamily="regular" fontSize="md">
              Código
            </Text>

            <Controller
              control={control}
              name="codigo"
              rules={{ required: "Informe o código" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.codigo?.message}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Código"
                  InputRightElement={
                    <Pressable onPress={() => onChange('')}>
                      <Icon
                        as={<Ionicons name="md-close-circle" />}
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />
              )}
            />
          </VStack>

          <VStack mt={5}>
            <Text color="blue.600" fontFamily="regular" fontSize="md">
              Status
            </Text>

            <Box maxW="full">
              <Controller 
              control={control}
              name="status"
              rules={{ required: "Informe o status"}}
              render={({field: {onChange, value}}) => (
                <StatusDropDown
                errorMessage={errors.status?.message}
                selectedValue={value}
                onValueChange={onChange} 
                />
              )}
              />

            </Box>
          </VStack>

          <VStack mt={5}>
            <Text color="blue.600" fontFamily="regular" fontSize="md">
              Marca
            </Text>

            <Controller
              control={control}
              name="marca"
              rules={{ required: "Informe a marca" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.marca?.message}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Marca X"
                  InputRightElement={
                    <Pressable onPress={()=> onChange('')}>
                      <Icon
                        as={<Ionicons name="md-close-circle" />}
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />
              )}
            />
          </VStack>

          <VStack mt={5}>
            <Text color="blue.600" fontFamily="regular" fontSize="md">
              Modelo
            </Text>
            <Controller
              control={control}
              name="modelo"
              rules={{ required: "Informe o modelo" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.modelo?.message}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Modelo X"
                  InputRightElement={
                    <Pressable onPress={()=> onChange('')}>
                      <Icon
                        as={<Ionicons name="md-close-circle" />}
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />
              )}
            />
          </VStack>
        </VStack>
      </VStack>

      {dataExaustor === undefined ? (
          <HStack
          marginX={5}
          justifyContent="center"
          marginBottom={10}
        >
          <Button title="Excluir" w={160} bg="black.100" rounded={10} />
          <Button title="Salvar" ml={4} w={160} bg="blue.200" rounded={10} />
        </HStack>
        ) : (
          <HStack marginX={5} justifyContent="center"  marginBottom={10}>
          <Button
            title="Salvar"
            w="full"
            bg="blue.200"
            rounded={10}
            onPress={handleSubmit(onSubmit)}
          />
        </HStack>
        )}


    </VStack>
  );
}
