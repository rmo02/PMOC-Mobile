
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HStack, Heading, ScrollView, Text, VStack } from "native-base";

export function EstacaoDetails () {
    return (
        <VStack flex={1} bg='fundo' position='relative'>
            <Header title="Estações" subtitle="" />

            <VStack position='absolute' p={5} px={5} bg='white' marginX={5} mt={120}   borderRadius={10}>
                <Heading color='blue.600' fontFamily='bold' fontSize='xl'>Estação Cururupu</Heading>
                <HStack mt={3} justifyContent='space-between'>
                    <Text color='blue.200' fontFamily='regular'>Latitude: 41.40338</Text>
                    <Text color='blue.200' fontFamily='regular'>Longitude: 2.17403</Text>

                </HStack>

                <Text mt={2} color='gray.450'>Rua teste. 220 - Bairro teste - Cururupu, MA - 37560-252</Text>
            </VStack>


            <ScrollView paddingTop={50}>
            <VStack p={5} px={5} bg='white' marginX={5} mt={140}   borderRadius={10}>
                <Text color='blue.600' fontFamily='regular' fontSize='md'>Manutenção Preventiva Cururupu</Text>
                <HStack mt={3} justifyContent='space-between'>
                    <Text color='blue.200' fontFamily='regular'>Edson Neves</Text>
                    <Text color='blue.200' fontFamily='regular'>TV Mirante</Text>
                    <Text fontWeight='bold' fontFamily='regular'>25/04/2023</Text>

                </HStack>

                <Text mt={2} color='gray.450'>Rua teste. 220 - Bairro teste - Cururupu, MA - 37560-252</Text>

                <Button title="Em Execução"/>
            </VStack>

            <VStack p={5} px={5} bg='white' marginX={5} mt={5}   borderRadius={10}>
                <Text color='blue.600' fontFamily='regular' fontSize='md'>Manutenção Preventiva Cururupu</Text>
                <HStack mt={3} justifyContent='space-between'>
                    <Text color='blue.200' fontFamily='regular'>Edson Neves</Text>
                    <Text color='blue.200' fontFamily='regular'>TV Mirante</Text>
                    <Text fontWeight='bold' fontFamily='regular'>25/04/2023</Text>

                </HStack>

                <Text mt={2} color='gray.450'>Rua teste. 220 - Bairro teste - Cururupu, MA - 37560-252</Text>

                <Button title="Agendada"/>
            </VStack>
            </ScrollView>

           


            
        </VStack>
    );
}