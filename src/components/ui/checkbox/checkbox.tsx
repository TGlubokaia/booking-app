import {
  Control,
  FieldPath,
  FieldValues,
  FieldPathValue,
  useController,
} from 'react-hook-form';

import Checkbox from '@mui/material/Checkbox';

interface CheckboxProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  label: string;
  checkboxName: TFieldName;
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
}

const CheckboxInput = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: CheckboxProps<TFieldsValues, TFieldName>
) => {
  const { field } = useController({
    name: props.checkboxName,
    control: props.control,
    defaultValue: props.defaultValue,
  });

  return (
    <>
      <label>{props.label}</label>
      <Checkbox checked={field.value} {...field} />
    </>
  );
};

export default CheckboxInput;
