import FormControl, { FormControlProps } from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

function CustomFormControl(props: FormControlProps) {
  const { children, ...rest } = props;

  return <FormControl {...rest}>{children}</FormControl>;
}

export default CustomFormControl;
