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
  label: string;
  type?: string
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>
};

const DateInput = <
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
    defaultValue: props.defaultValue
  });

  return (
    <>
      <label>{props.label}</label>
      <TextField
        type="date"
        size="small"
        fullWidth
        variant="outlined"
        error={!!error}
        helperText={error ? error.message : null}
        InputLabelProps={{
          shrink: true,
        }}
        {...field}
      />
    </>

  );
};

export default DateInput;
