import {
  Control,
  FieldPath,
  FieldValues,
  FieldPathValue,
  useController,
} from "react-hook-form";

import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import { suitCategories } from "@/core/utils/utils";

interface SelectInputProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  label: string;
  selectName: TFieldName;
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>
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
    defaultValue: props.defaultValue
  });

  return (
    <>
      <label>{props.label}</label>
      <Select
        inputProps={{ 'aria-label': 'controlled' }}
        size="small"
        fullWidth
        variant="outlined"
        {...field}
      >
        {Object.keys(suitCategories).map((category) => (
          <MenuItem key={category} value={category}>{suitCategories[category]}</MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectInput;