import { Box, HStack, Heading, ScrollView, Text, VStack } from "native-base";
import React, { useState } from "react";
import Swiper from "react-native-swiper";

import { CardManutencao } from "@components/CardManutencao";
import { Documentos } from "@components/Documentos";
import { Equipamentos } from "@components/Equipamentos";
import { Header } from "@components/Header";

export function EstacaoDetails() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
  };

  return (
    <VStack flex={1} bg="fundo" position="relative">
      <Header title="Estações" subtitle="" />

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
        <Heading color="blue.600" fontFamily="bold" fontSize="xl">
          Estação Cururupu
        </Heading>
        <HStack mt={3} justifyContent="space-between">
          <Text color="blue.200" fontFamily="regular">
            Latitude: 41.40338
          </Text>
          <Text color="blue.200" fontFamily="regular">
            Longitude: 2.17403
          </Text>
        </HStack>

        <Text mt={2} color="gray.450">
          Rua teste. 220 - Bairro teste - Cururupu, MA - 37560-252
        </Text>
      </VStack>

      <Swiper
        showsPagination={false}
        onIndexChanged={handleSlideChange}
        loop={false}
      >
        <ScrollView mt={100}>
          <CardManutencao />
        </ScrollView>

        <ScrollView mt={100}>
          <Equipamentos />
        </ScrollView>

        <ScrollView mt={100}>
          <Documentos />
        </ScrollView>
      </Swiper>

      {/* <HStack
        position="absolute"
        bottom={10}
        left={0}
        right={0}
        justifyContent="center"
      >
        {["Manutenção de Equipamentos", "Equipamentos", "Documentos"].map(
          (name, index) => (
            <Text
              key={name}
              color={activeSlideIndex === index ? "yellow.500" : "gray.500"}
              opacity={activeSlideIndex === index ? 1 : 0.5}
              mx={2}
              fontSize="sm"
            >
              {name}
            </Text>
          )
        )}
      </HStack> */}
    </VStack>
  );
}
