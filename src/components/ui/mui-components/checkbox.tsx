import { styled } from '@mui/material/styles';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const ForwardedCheckbox = forwardRef((props, ref) => {
  return (
    <Checkbox
      inputRef={ref}
      icon={<CheckBoxOutlineBlankIcon viewBox='3 3 18 18' />}
      checkedIcon={<CheckBoxOutlinedIcon sx={{ color: '#000000' }} viewBox='3 3 18 18' />}
      {...props}
    />
  )
});

const CustomCheckbox = styled(ForwardedCheckbox)`
  padding: 0,
  color: '#000000',
  & .MuiSvgIcon-root {
    font-size: 1rem,
    background-color: '#FFFFFF'
  },
  @media (max-width: 400px) {
    display: 'none',
  },
`;

export default CustomCheckbox;

// const StyledCheckbox = styled((props) => (
//   <Checkbox {...props} />
// ))(() => ({
//   padding: 0,
//   color: '#000000',
//   '& .MuiSvgIcon-root': {
//     fontSize: '1rem',
//     backgroundColor: '#FFFFFF'
//   },
//   '@media (max-width: 400px)': {
//     display: 'none',
//   },
// }));

// // eslint-disable-next-line react/display-name
// const CustomCheckbox = (props: CheckboxProps) => {
//   return (
//     <StyledCheckbox
//       icon={<CheckBoxOutlineBlankIcon viewBox='3 3 18 18' />}
//       checkedIcon={<CheckBoxOutlinedIcon sx={{ color: '#000000' }} viewBox='3 3 18 18' />}
//       {...props}
//     />
//   )
// };


