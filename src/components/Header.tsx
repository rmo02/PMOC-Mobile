import { Box, Center, HStack, Heading, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  subtitle: string;
};

export function Header({ title, subtitle }: Props) {
  return (
    <VStack
      pt={16}
      pb={subtitle === "" ? 20 : 5}
      px={8}
      bg={{
        linearGradient: {
          colors: ["roxo.300", "roxo.500"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
    >
      {subtitle === "" ? (
        <HStack justifyContent="space-between">
          <HStack alignItems="center">
            <MaterialIcons name="arrow-back-ios" size={20} color="white" />
            <Text color="white" fontFamily="regular" fontSize="md">
              {title}
            </Text>
          </HStack>
          <Text color="white" fontFamily="regular" fontSize="md">
            Editar
          </Text>
        </HStack>
      ) : (
        <>
          <Center>
            <Text color="white">{subtitle}</Text>
          </Center>
          <Box mt={5}>
            <Heading color="white" fontFamily="bold">
              {title}
            </Heading>
          </Box>
        </>
      )}
    </VStack>
  );
}
