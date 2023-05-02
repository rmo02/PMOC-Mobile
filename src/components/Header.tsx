import { VStack } from "native-base";

export function Header() {
  return (
    <VStack
      pt={16}
      pb={75}
      px={8}
      bg={{
        linearGradient: {
          colors: ["roxo.300", "roxo.500"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
    ></VStack>
  );
}
