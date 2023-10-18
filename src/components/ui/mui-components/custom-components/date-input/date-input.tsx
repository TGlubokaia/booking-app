import {
  Control,
  FieldPath,
  FieldValues,
  FieldPathValue,
  useController,
} from 'react-hook-form';

import CustomInputBase from '../../input-base';
import CustomFormControl from '../../form-control';
import CustomLabel from '@/components/ui/label';
import CustomFormHelperText from '../../form-helper-text';

interface DateInputProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  fieldName: TFieldName;
  label: string;
  type?: string;
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
}

const DateField = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: DateInputProps<TFieldsValues, TFieldName>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.fieldName,
    control: props.control,
    defaultValue: props.defaultValue,
  });

  return (
    <CustomFormControl error={!!error} fullWidth>
      <CustomLabel>{props.label}</CustomLabel>
      <CustomInputBase type={props.type} error={!!error} {...field} />
      <CustomFormHelperText id={props.fieldName}>
        {error ? error.message : ''}
      </CustomFormHelperText>
    </CustomFormControl>
  );
};

export default DateField;
