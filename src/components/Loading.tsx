import { Spinner, Center, Box, VStack } from "native-base";


export function Loading() {
  return (
    <Center
      flex={1}
      bg={{
        linearGradient: {
          colors: ['roxo.300', 'roxo.500'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
    >
      <Spinner color="white" />
    </Center>
  );
}
