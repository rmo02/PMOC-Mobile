import {
    Input as NativeBaseInput,
    IInputProps,
    FormControl,
    Pressable,
    IconButton,
  } from "native-base";
import { Ionicons } from "@expo/vector-icons";
  

  type Props = IInputProps & {
    errorMessage?: string | null;
  };
  
  export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
    const invalid = !!errorMessage || isInvalid;
    return (
      <FormControl isInvalid={invalid} mb={4}>
        <NativeBaseInput
          bg="gray.50"
          h={14}
          px={14}
          borderWidth={0}
          fontSize="md"
          fontFamily="body"
          placeholderTextColor="gray.200"
          isInvalid={invalid}
          _invalid={{
              borderWidth:1,
              borderColor:"red.500"
          }}
          _focus={{
            bg: "gray.50",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
          {...rest}
        />
        <FormControl.ErrorMessage _text={{ color: 'red.500'}}>
          {errorMessage}
        </FormControl.ErrorMessage>
      </FormControl>
    );
  }