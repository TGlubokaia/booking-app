import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface DateInputProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  inputName: TFieldName
}
const DateInput = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: DateInputProps<TFieldsValues, TFieldName>,
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.inputName,
    control: props.control,
  });

  console.log(error);

  return (
    // Нужна доработка
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        fullWidth
        slotProps={{ textField: { error: !!error, helperText: error?.message } }}
        defaultValue=""
        {...field} />
    </LocalizationProvider>

  );
};

export default DateInput;
