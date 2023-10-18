import { styled } from '@mui/material/styles';

type LabelProps = {
  children: string;
};

const StyledLabel = styled('label')`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

function CustomLabel(props: LabelProps) {
  return <StyledLabel>{props.children}</StyledLabel>;
}

export default CustomLabel;
