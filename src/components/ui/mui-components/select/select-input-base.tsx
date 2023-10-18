import { styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';

type Type = {
  error?: string
} & InputBaseProps

const StyledInputBase = styled(({ ...props }) => (
  <InputBase {...props} />
))((props) => ({
  '& .MuiInputBase-input': {
    padding: '7px 8px',
    height: '32px',
    lineHeight: '16px',
    backgroundColor: props.theme.palette.background.paper,
    border: `1px solid ${props.error ? props.theme.palette.error.main : '#E5E7EB'}`,
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
}
));

// eslint-disable-next-line react/display-name
const CustomSelectInputBase = (props: Type) => {
  return (
    <StyledInputBase
      {...props}
    />
  )
};

export default CustomSelectInputBase;