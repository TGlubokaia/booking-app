import {
  Control,
  FieldPath,
  FieldValues,
  FieldPathValue,
  useController,
} from 'react-hook-form';

import CustomFormHelperText from '../../form-helper-text';
import CustomInputBase from '../../input-base';
import CustomFormControl from '../../form-control';
import CustomLabel from '@/components/ui/label';
import { useRef } from 'react';

interface TextInputProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  fieldName: TFieldName;
  type?: string;
  placeholder?: string;
  label: string;
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
}

const TextInputField = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: TextInputProps<TFieldsValues, TFieldName>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.fieldName,
    control: props.control,
    defaultValue: props.defaultValue,
  });

  const inputRef = useRef(null);

  return (
    <CustomFormControl error={!!error} fullWidth>
      <CustomLabel>{props.label}</CustomLabel>
      <CustomInputBase
        error={!!error}
        placeholder={props.placeholder}
        type={props.type}
        {...field}
        ref={inputRef}
        aria-describedby={props.fieldName}
      />
      <CustomFormHelperText id={props.fieldName}>
        {error ? error.message : ''}
      </CustomFormHelperText>
    </CustomFormControl>
  );
};

export default TextInputField;
