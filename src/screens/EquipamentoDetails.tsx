import {
  Box,
  FlatList,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

import { CardManutencao } from "@components/CardManutencao";
import { Documentos } from "@components/Documentos";
import { Header } from "@components/Header";

import api from "@api/api";
import { AlphabetFilter } from "@components/AlphabetFilter";
import { CardInfoEquipamento } from "@components/CardInfoEquipamento";

export function EquipamentoDetails() {
  const [equipamentoDetails, setEquipamentoDetails] = useState<any[]>();
  const [equipamentoInfo, setEquipamentoInfo] = useState<any[]>();
  const [equipamentoDoc, setEquipamentoDoc] = useState<any[]>();
  const [telaAtual, setTelaAtual] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const swiperRef = useRef<Swiper | null>(null);

  const getEstacaoDetails = async () => {
    // try {
    //   const res = await api.get(`/estacoes/${id}`);
    //   setEstacaoDetails(res.data["manutencao"]);
    //   setEstacaoInfo(res.data);
    //   setEstacaoDoc(res.data["documentos"]);
    //   // console.log(res.data["documentos"])
    // } catch (error) {
    //   console.log("Estacao", error);
    // }
  };


  const nomesTelas = ["Manutenções", "Documentos"];

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

      <CardInfoEquipamento />

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
        <FlatList
          data={equipamentoDetails}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardManutencao data={item} />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ marginTop: "30%", paddingBottom: 130 }}
          ListEmptyComponent={() => (
            <VStack
              flex={1}
              justifyContent="center"
              alignItems="center"
              mt="50%"
            >
              <Text fontFamily="bold" fontSize={20} color="gray.300">
                Não há manutenções cadastradas
              </Text>
            </VStack>
          )}
        />

        <HStack mt="40%" alignItems="center">
          <FlatList
            data={equipamentoDoc}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Documentos data={item} />}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ paddingBottom: 130 }}
            ListEmptyComponent={() => (
              <VStack
                flex={1}
                justifyContent="center"
                alignItems="center"
                mt="50%"
                marginX={10}
              >
                <Text fontFamily="bold" fontSize={20} color="gray.300">
                  Não há documentos anexados
                </Text>
              </VStack>
            )}
          />
          <ScrollView showsVerticalScrollIndicator={false} marginRight={5} mt={10}>
            <AlphabetFilter />
          </ScrollView>
        </HStack>
      </Swiper>

      <HStack
        bgColor="white"
        h={7}
        alignItems="center"
        justifyContent="space-evenly"
        px={5}
      >
        {nomesTelas.map((nome, index) => {
          const isActive = telaAtual === index;
          const textStyle = isActive
            ? { color: "#F59E0B" }
            : { color: "#3963F9" };
          const scale = isActive ? 1.2 : 0.8;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleTelaPress(index)}
            >
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
