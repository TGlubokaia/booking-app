import { styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { forwardRef } from 'react';

// const StyledInputBase = styled((props, ref) => (
//   <InputBase {...props} inputRef={ref} />
// ))((props) => ({
//   input: {
//     height: '32px',
//     padding: '7px 8px',
//     color: props.error ? props.theme.palette.error.main : props.theme.palette.common.black,
//     backgroundColor: props.error ? props.theme.palette.rose.light : props.theme.palette.background.paper,
//     border: `1px solid ${props.error ? props.theme.palette.rose.main : '#E5E7EB'}`,
//     borderRadius: '4px',
//     boxSizing: 'border-box',
//   }
// }));

// eslint-disable-next-line react/display-name
const ForwardedInputBase = forwardRef((props: InputBaseProps, ref) => {
  return <InputBase inputRef={ref} {...props} />;
});

const CustomInputBase = styled(ForwardedInputBase)((props) => ({
  input: {
    height: '32px',
    padding: '7px 8px',
    color: props.error
      ? props.theme.palette.error.main
      : props.theme.palette.common.black,
    backgroundColor: props.error
      ? props.theme.palette.rose.light
      : props.theme.palette.background.paper,
    border: `1px solid ${
      props.error ? props.theme.palette.rose.main : '#E5E7EB'
    }`,
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
}));

export default CustomInputBase;
