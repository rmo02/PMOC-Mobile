import { VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { TouchableOpacity } from "react-native";

export function ButtonNew() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function HandleNavigateGoBack() {
    navigation.navigate("tipoEquipamento");
  }

  return (
    <TouchableOpacity onPress={() => HandleNavigateGoBack()}>
      <VStack
        bg="blue.500"
        borderRadius={52}
        w={68}
        h={36}
        alignItems="center"
        justifyContent="center"
      >
        <MaterialIcons name="add" size={30} color={"white"} />
      </VStack>
    </TouchableOpacity>
  );
}
