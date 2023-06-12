import { HStack, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type Props = TouchableOpacityProps & {
  data : any;
}

export function Estacoes({data, ...rest} : Props) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function HandleNavigateEstacaoDetail (data: any) {
    navigation.navigate('estacaoDetails', {id:`${data.id}`})
  }



  return (
  <TouchableOpacity style={{backgroundColor:'white', marginHorizontal:6, borderRadius:2}} onPress={() => HandleNavigateEstacaoDetail(data)} {...rest}>
    <VStack 
    pt={3}
    pb={1}
    px={2}
    marginX={6}
    bgColor='white'
    
    >
      <HStack justifyContent='space-between' >
        <Text color="black" fontFamily="bold" fontSize='md'>{data.nome}</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
      </HStack>
      <VStack
          mt={2}
          borderBottomWidth={1}
          borderBottomColor="gray.250"
        ></VStack>
    </VStack>
  </TouchableOpacity>
  );
}
