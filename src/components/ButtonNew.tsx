import { VStack } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export function ButtonNew ({color} : any) {
    return (
        <VStack bg='blue.500' borderRadius={52} w={68} h={36} alignItems='center' justifyContent='center'>
            <MaterialIcons name="add" size={30} color={'white'} />
        </VStack>
    );
}