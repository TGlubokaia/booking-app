import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';

interface SelectInputProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  selectName: TFieldName;
};

const SelectInput = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: SelectInputProps<TFieldsValues, TFieldName>,
) => {
  const {
    field,
  } = useController({
    name: props.selectName,
    control: props.control,
  });

  return (
    <Select
      fullWidth
      {...field}
    >
      <MenuItem value={'эконом'}>эконом</MenuItem>
      <MenuItem value={'стандарт'}>стандарт</MenuItem>
      <MenuItem value={'люкс'}>люкс</MenuItem>
    </Select>

  );
};

export default SelectInput;