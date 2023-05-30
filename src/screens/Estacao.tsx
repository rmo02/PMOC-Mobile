import api from "@api/api";
import { Estacoes } from "@components/Estacoes";
import { Header } from "@components/Header";
import { FlatList, Text, VStack } from "native-base";
import { useEffect, useState } from "react";


export function Estacao () {
    const [estacoes, setEstacoes] = useState<any[]>();


    const getEstacoes = async() => {
        try {
            const res = await api.get('/estacoes');
            setEstacoes(res.data);
        } catch (error) {
            console.log('Estacao', error)
        }
    }

    useEffect(() => {
        getEstacoes()
    }, [])
    

    return (
        <VStack flex={1} bg='fundo'>
            <Header title="Estações" subtitle={estacoes?.length === undefined ? '0 Estações' : `${estacoes?.length} estações`}/>
            <FlatList 
            data={estacoes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Estacoes data={item}/>
            )}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{marginTop: 2}}
            ListEmptyComponent={() => (
                <VStack flex={1} justifyContent='center' alignItems='center' mt='70%'>
                    <Text fontFamily='bold' fontSize={20} color='gray.300'>Não há estações cadastradas</Text>
                </VStack>
            )}
            />
           
        </VStack>
    );
}

