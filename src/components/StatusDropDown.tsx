import {
  FormControl,
  Select as NativeBaseSelect,
  ISelectProps,
  CheckIcon,
} from "native-base";

type Option = {
  label: string;
  value: string;
};

type Props = ISelectProps & {
  errorMessage?: string | null;
  options: Option[];
};



export function StatusDropDown({
  errorMessage = null,
  isInvalid,
  options,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseSelect
        minWidth="200"
        accessibilityLabel="Choose Status"
        placeholder="Status"
        _selectedItem={{
          bg: "gray.50",
          endIcon: <CheckIcon size="5" />,
        }}
        isInvalid={invalid}
        _invalid={{
            borderWidth:1,
            borderColor:"teal.600"
        }}
        h={12}
        mt={1}
        {...rest}
      >
        {options.map((option, i) => (
          <NativeBaseSelect.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </NativeBaseSelect>
      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
