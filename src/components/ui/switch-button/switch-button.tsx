import {
  Control,
  FieldPath,
  FieldValues,
  FieldPathValue,
  useController,
} from 'react-hook-form';

import Switch from '@mui/material/Switch';

interface SwitchButtonProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  switchName: TFieldName;
  type?: string;
  label: string;
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
}

const SwitchButton = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: SwitchButtonProps<TFieldsValues, TFieldName>
) => {
  const { field } = useController({
    name: props.switchName,
    control: props.control,
    defaultValue: props.defaultValue,
  });

  return (
    <>
      <label>{props.label}</label>
      <Switch checked={field.value} {...field} />
    </>
  );
};

export default SwitchButton;
