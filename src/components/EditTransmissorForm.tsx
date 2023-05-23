import {
  Box,
  Center,
  CheckIcon,
  HStack,
  Heading,
  Icon,
  Pressable,
  Select,
  Text,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "./Button";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "./Input";
import { StatusDropDown } from "./StatusDropDown";

type FormData = {
  codigo: string;
  marca: string;
  status: string;
  modelo: string;
  programmed_power: number;
  canal_fisico: number;
  canal_virtual: number;
  receptor: string;
  antena: string;
};

export function EditTransmissorForm({ onSubmit }: any) {
  const [dataTransmissor, setDataTransmissor] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:{}
  });

  return (
    <VStack position="absolute" mt={120} w="full">
      <VStack p={5} px={5} bg="white" marginX={5} borderRadius={10}>
        <Center>
          <Heading color="blue.600" fontFamily="bold" fontSize="xl">
            Transmissor
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
                    <Pressable onPress={() => onChange("")}>
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
                rules={{ required: "Informe o status" }}
                render={({ field: { onChange, value } }) => (
                  <StatusDropDown
                    errorMessage={errors.status?.message}
                    selectedValue={value}
                    onValueChange={onChange}
                    options={[
                      { label: "Funcionando", value: "FUNCIONANDO" },
                      { label: "Parado", value: "PARADO" },
                      { label: "Em espera", value: "STAND_BY" },
                    ]}
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
                    <Pressable onPress={() => onChange("")}>
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
                    <Pressable onPress={() => onChange("")}>
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
              Programmed power
            </Text>
            <Controller
              control={control}
              name="programmed_power"
              rules={{ required: "Informe o Programmed power" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.programmed_power?.message}
                  onChangeText={onChange}
                  keyboardType="decimal-pad"
                  value={value}
                  placeholder="250"
                  InputRightElement={
                    <Pressable onPress={() => onChange("")}>
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
              Canal físico
            </Text>
            <Controller
              control={control}
              name="canal_fisico"
              rules={{ required: "Informe o numero do canal físico" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.canal_fisico?.message}
                  keyboardType="decimal-pad"
                  onChangeText={onChange}
                  value={value}
                  placeholder="12345"
                  InputRightElement={
                    <Pressable onPress={() => onChange("")}>
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
              Canal virtual
            </Text>
            <Controller
              control={control}
              name="canal_virtual"
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.canal_virtual?.message}
                  keyboardType="decimal-pad"
                  onChangeText={onChange}
                  value={value}
                  placeholder="12345"
                  InputRightElement={
                    <Pressable onPress={() => onChange("")}>
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
              Receptor
            </Text>
            <Controller
              control={control}
              name="receptor"
              rules={{ required: "Informe o Symbol Rate" }}
              render={({ field: { onChange, value } }) => (
                <Input
                errorMessage={errors.receptor?.message}
                  onChangeText={onChange}
                  value={value}
                  placeholder="receptor"
                  InputRightElement={
                    <Pressable onPress={() => onChange("")}>
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
              Antena
            </Text>
            <Controller
              control={control}
              name="antena"
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="antena"
                  InputRightElement={
                    <Pressable onPress={() => onChange("")}>
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

      { dataTransmissor === undefined ? (
        <HStack marginX={5} justifyContent="center" marginBottom={10}>
          <Button title="Excluir" w={160} bg="black.100" rounded={10} />
          <Button title="Salvar" ml={4} w={160} bg="blue.200" rounded={10} />
        </HStack>
      ) : (
        <HStack marginX={5} justifyContent="center" marginBottom={10}>
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
