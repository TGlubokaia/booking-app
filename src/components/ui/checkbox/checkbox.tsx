import { ComponentProps } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

import Checkbox from "@mui/material/Checkbox";

interface CheckboxProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  checkboxName: TFieldName;
}

const CheckboxInput = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: CheckboxProps<TFieldsValues, TFieldName>,
) => {
  const { checkboxName, control, ...rest } = props;
  const {
    field,
  } = useController({
    name: checkboxName,
    control: control,
  });

  return (
    <Checkbox
      defaultValue={'false'}
      {...field}
    />
  );
};

export default CheckboxInput;
