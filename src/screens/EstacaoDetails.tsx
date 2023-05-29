import { Box, HStack, Heading, ScrollView, Text, VStack } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

import { CardManutencao } from "@components/CardManutencao";
import { Documentos } from "@components/Documentos";
import { Equipamentos } from "@components/Equipamentos";
import { Header } from "@components/Header";
import api from "@api/api";

export function EstacaoDetails({route}: any) {
  let id = route?.params.id;
  const [estacaoDetails, setEstacaoDetails] = useState<[]>()
  const [telaAtual, setTelaAtual] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const swiperRef = useRef<Swiper | null>(null);

  

  const getEstacaoDetails = async() => {
    try {
        const res = await api.get(`/estacoes/${id}`);
        setEstacaoDetails(res.data["manutencao"]);
    } catch (error) {
        console.log('Estacao', error)
    }
}

useEffect(() => {
  getEstacaoDetails()
}, [])


  const nomesTelas = ["Manutenção", "Equipamentos", "Documentos"];

  const handleTelaChange = (index: number) => {
    setTelaAtual(index);
  };

  const handleTelaPress = (index: number) => {
    setTelaAtual(index);
    swiperRef.current?.scrollTo(index);
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
        ref={swiperRef}
        showsPagination={false}
        loop={false}
        loadMinimal
        loadMinimalSize={2}
        onIndexChanged={handleTelaChange}
        onScrollBeginDrag={() => {
          scrollX.setValue(0);
        }}
        onScroll={(e) => {
          const offsetX = e.nativeEvent.contentOffset.x;
          scrollX.setValue(offsetX);
        }}
        scrollEnabled
        scrollEventThrottle={16}
      >
        <ScrollView mt={120} scrollEventThrottle={16}>
          <CardManutencao data={estacaoDetails}/>
        </ScrollView>

        <ScrollView mt={120} scrollEventThrottle={16}>
          <Equipamentos />
        </ScrollView>

        <ScrollView mt={120} scrollEventThrottle={16}>
          <Documentos />
        </ScrollView>
      </Swiper>

      <HStack bgColor="white" h={7} alignItems="center" justifyContent="space-between" px={5}>
        {nomesTelas.map((nome, index) => {
          const isActive = telaAtual === index;
          const textStyle = isActive ? { color: "#F59E0B" } : { color: "#3963F9" };
          const scale = isActive ? 1.2 : 0.8;

          return (
            <TouchableOpacity key={index} onPress={() => handleTelaPress(index)}>
              <Animated.Text style={[textStyle, { transform: [{ scale }] }]}>
                {nome}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </HStack>
    </VStack>
  );
}
