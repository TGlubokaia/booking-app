import {
  Control,
  FieldPath,
  FieldValues,
  FieldPathValue,
  useController,
} from 'react-hook-form';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { suitCategories } from '@/core/utils/utils';

interface RadioButtonsProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  radioName: TFieldName;
  type?: string;
  label: string;
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
}

const RadioButtons = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: RadioButtonsProps<TFieldsValues, TFieldName>
) => {
  const { field } = useController({
    name: props.radioName,
    control: props.control,
    defaultValue: props.defaultValue,
  });

  return (
    <>
      <label>{props.label}</label>
      <RadioGroup {...field}>
        {Object.keys(suitCategories).map((category) => (
          <FormControlLabel
            key={category}
            value={category}
            control={<Radio />}
            label={suitCategories[category]}
          />
        ))}
      </RadioGroup>
    </>
  );
};

export default RadioButtons;
