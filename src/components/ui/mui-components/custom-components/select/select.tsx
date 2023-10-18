import {
  Control,
  FieldPath,
  FieldValues,
  FieldPathValue,
  useController,
} from 'react-hook-form';
import CustomLabel from '@/components/ui/label';
import CustomFormControl from '../../form-control';
import CustomFormHelperText from '../../form-helper-text';
import CustomRadioButtons from '../../radio-buttons/radio-buttons';
import CustomSelect from '../../select/select';
import useMediaQuery from '@mui/material/useMediaQuery';

interface SelectInputProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  label: string;
  fieldName: TFieldName;
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
}

const SelectField = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: SelectInputProps<TFieldsValues, TFieldName>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.fieldName,
    control: props.control,
    defaultValue: props.defaultValue,
  });

  const minWidth400 = useMediaQuery('(min-width:400px)');
  // const touchpad = useMediaQuery('(hover: none) and (pointer: coarse)');

  return (
    <CustomFormControl error={!!error} fullWidth>
      <CustomLabel>{props.label}</CustomLabel>
      {minWidth400 ? (
        <CustomRadioButtons {...field} />
      ) : (
        <CustomSelect {...field} />
      )}
      <CustomFormHelperText id={props.fieldName}>
        {error ? error.message : ''}
      </CustomFormHelperText>
    </CustomFormControl>
  );
};

export default SelectField;
