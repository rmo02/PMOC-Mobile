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
import { useEffect, useState } from "react";
import { Input } from "./Input";
import { StatusDropDown } from "./StatusDropDown";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  codigo: string;
  marca: string;
  status: string;
  modelo: string;
  corrente_maxima: number;
  classe: string;
};

export function EditDPSForm({ onSubmit, DPS, onSubmitUpdate, onDelete }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  useEffect(() => {
    if (DPS && Object.keys(DPS).length > 0) {
      setValue("codigo", DPS[0].codigo || "");
      setValue("marca", DPS[0].marca || "");
      setValue("modelo", DPS[0].modelo || "");
      setValue("corrente_maxima", DPS[0].corrente_maxima || 0);
      setValue("classe", DPS[0].classe || "");
    }
  }, [DPS, setValue]);

  return (
    <VStack position="absolute" mt={120} w="full">
      <VStack p={5} px={5} bg="white" marginX={5} borderRadius={10}>
        <Center>
          <Heading color="blue.600" fontFamily="bold" fontSize="xl">
            DPS
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
              Corrente máxima
            </Text>
            <Controller
              control={control}
              name="corrente_maxima"
              rules={{ required: "Informe a corrente máxima" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.corrente_maxima?.message}
                  onChangeText={onChange}
                  value={value}
                  placeholder="4"
                  keyboardType="decimal-pad"
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
              Classe
            </Text>
            <Controller
              control={control}
              name="classe"
              rules={{ required: "Informe a classe" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.classe?.message}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Classe abc"
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

      {!DPS || Object.keys(DPS).length === 0 ? (
        <HStack marginX={5} justifyContent="center" marginBottom={10}>
          <Button
            title="Salvar"
            w="full"
            bg="blue.200"
            rounded={10}
            onPress={handleSubmit(onSubmit)}
          />
        </HStack>
      ) : (
        <HStack marginX={5} justifyContent="center" marginBottom={10}>
          <Button
            title="Excluir"
            w={160}
            bg="black.100"
            rounded={10}
            onPress={handleSubmit(onDelete)}
          />
          <Button
            title="Salvar"
            ml={4}
            w={160}
            bg="blue.200"
            rounded={10}
            onPress={handleSubmit(onSubmitUpdate)}
          />
        </HStack>
      )}
    </VStack>
  );
}
