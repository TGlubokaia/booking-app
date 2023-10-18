import Radio, { RadioProps } from '@mui/material/Radio';
import { styled } from '@mui/material/styles';


const StyledRadio = styled(Radio)`
  color: #000000;

  &.Mui-checked {
    color: #000000;
  }

  & .MuiSvgIcon-root {
    font-size: 16px;
  }
`;

function CustomRadio(props: RadioProps) {
  return (
    <StyledRadio
      {...props}
    />
  )
}

export default CustomRadio;