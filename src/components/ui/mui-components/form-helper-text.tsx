import { styled } from '@mui/material/styles';
import FormHelperText, {
  FormHelperTextProps,
} from '@mui/material/FormHelperText';

const StyledFormHelperText = styled(FormHelperText)((props) => ({
  marginTop: 0,
  height: '1.5rem',
  bottom: '-1rem',
  '&.Mui-error': {
    color: props.theme.palette.error.main,
  },
}));

function CustomFormHelperText(props: FormHelperTextProps) {
  const { children, ...rest } = props;

  return <StyledFormHelperText {...rest}>{children}</StyledFormHelperText>;
}

export default CustomFormHelperText;
