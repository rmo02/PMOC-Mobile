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
  gain: string;
  fendas: number;
  tipo: string;
  vr: string;
  posicao_torre: string;
};

export function EditAntenaForm({ onSubmit }: any) {
  const [dataAntena, setDataAntena] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      posicao_torre: "",
    },
  });

  return (
    <VStack position="absolute" mt={120} w="full">
      <VStack p={5} px={5} bg="white" marginX={5} borderRadius={10}>
        <Center>
          <Heading color="blue.600" fontFamily="bold" fontSize="xl">
            Antena
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
              Gain
            </Text>
            <Controller
              control={control}
              name="gain"
              rules={{ required: "Informe o gain" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.gain?.message}
                  onChangeText={onChange}
                  value={value}
                  placeholder="gain xx"
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
              Fendas
            </Text>
            <Controller
              control={control}
              name="fendas"
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.fendas?.message}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="decimal-pad"
                  placeholder="120"
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
              Tipo
            </Text>

            <Box maxW="full">
              <Controller
                control={control}
                name="tipo"
                render={({ field: { onChange, value } }) => (
                  <StatusDropDown
                    errorMessage={errors.tipo?.message}
                    selectedValue={value}
                    onValueChange={onChange}
                    placeholder="Tipo da antena"
                    options={[
                      { label: "Onnidirecional", value: "Onnidirecional" },
                      { label: "Diretiva", value: "Diretiva" },
                    ]}
                  />
                )}
              />
            </Box>
          </VStack>

          <VStack mt={5}>
            <Text color="blue.600" fontFamily="regular" fontSize="md">
              VR
            </Text>
            <Controller
              control={control}
              name="vr"
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.vr?.message}
                  onChangeText={onChange}
                  value={value}
                  placeholder="vr x"
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
              Posição torre
            </Text>
            <Controller
              control={control}
              name="posicao_torre"
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.posicao_torre?.message}
                  onChangeText={onChange}
                  value={value}
                  placeholder="156321"
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

      {dataAntena === undefined ? (
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
