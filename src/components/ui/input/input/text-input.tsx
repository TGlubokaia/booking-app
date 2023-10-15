import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

import TextField from "@mui/material/TextField";

interface TextInputProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  inputName: TFieldName;
  type?: string
};

const TextInput = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: TextInputProps<TFieldsValues, TFieldName>,
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.inputName,
    control: props.control,
  });

  return (
    <TextField
      helperText={error ? error.message : null}
      defaultValue=""
      size="small"
      error={!!error}
      fullWidth
      variant="outlined"
      type={props.type}
      {...field}
    />
  );
};

export default TextInput;
