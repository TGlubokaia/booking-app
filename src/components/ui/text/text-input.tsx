import {
  Control,
  FieldPath,
  FieldValues,
  FieldPathValue,
  useController,
} from "react-hook-form";

import TextField from "@mui/material/TextField";

interface TextInputProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  inputName: TFieldName;
  type?: string;
  label: string;
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>
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
    defaultValue: props.defaultValue,
  });

  return (
    <>
      <label>{props.label}</label>
      <TextField
        helperText={error ? error.message : null}
        size="small"
        error={!!error}
        fullWidth
        variant="outlined"
        type={props.type}
        {...field}
      />
    </>

  );
};

export default TextInput;
