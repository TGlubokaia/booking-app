import {
  Control,
  FieldPath,
  FieldValues,
  FieldPathValue,
  useController,
} from 'react-hook-form';
import CustomFormControl from '../../form-control';
import CustomFormHelperText from '../../form-helper-text';
import CustomCheckbox from '../../checkbox';
import CustomSwitchButton from '../../switch';
import CustomLabel from '@/components/ui/label';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRef } from 'react';

interface CheckboxProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  label: string;
  fieldName: TFieldName;
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
}

const CustomCheckboxField = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: CheckboxProps<TFieldsValues, TFieldName>
) => {
  const {
    field,
    fieldState: { error }
  } = useController({
    name: props.fieldName,
    control: props.control,
    defaultValue: props.defaultValue,
  });

  const inputRef = useRef(null);

  const minWidth400 = useMediaQuery('(min-width:400px)');
  // const touchpad = useMediaQuery('(hover: none) and (pointer: coarse)');

  return (
    <CustomFormControl
      error={!!error}
    >
      <CustomLabel>{props.label}</CustomLabel>

      {minWidth400
        ? <CustomCheckbox checked={field.value} {...field} ref={inputRef} />
        : <CustomSwitchButton checked={field.value} {...field} ref={inputRef} />
      }

      <CustomFormHelperText id={props.fieldName}>
        {error ? error.message : ''}
      </CustomFormHelperText>
    </CustomFormControl>
  )
};

export default CustomCheckboxField;
