import Button, { ButtonProps } from '@mui/material/Button';
import { ButtonBlockType } from '@/core/utils/types';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')`
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  },
}
`;

const StyledButton = styled(Button)`
  height: 39px;
  border-radius: 38px;
  text-transform: none;
`;

const StyledButtonBack = styled(StyledButton)((props: ButtonProps) => ({
  backgroundColor: props.theme.palette.common.white,
  color: props.theme.palette.common.black,

  '&:hover': {
    backgroundColor: props.theme.palette.common.white,
    color: '#D1D5DB',
  },

  '@media (max-width: 400px)': {
    order: 2,
  },
}));

const StyledButtonForward = styled(StyledButton)((props: ButtonProps) => ({
  height: '39px',
  width: '128px',
  backgroundColor: props.theme.palette.primary.main,
  textTransform: 'none',

  '&:hover': {
    backgroundColor: props.theme.palette.primary.light,
  },

  '&:focused': {
    height: '45px',
    backgroundColor: props.theme.palette.primary.main,
    border: `10px double ${props.theme.palette.primary.main}`,
    boxSizing: 'border-box',
  },

  '@media (max-width: 400px)': {
    width: '100%',
  },
}));

function ButtonBlock(props: ButtonBlockType) {
  return (
    <StyledBox>
      {props.step > 0 && (
        <StyledButtonBack variant={'contained'} onClick={props.handleBack}>
          {props.step < 2
            ? 'Назад к расчету стоимости'
            : 'Назад к данным покупателя'}
        </StyledButtonBack>
      )}
      <StyledButtonForward
        variant={'contained'}
        disabled={props.isDisabledButton}
        onClick={props.step < 2 ? props.handleNext : undefined}
      >
        {props.step < 2 ? 'Далее' : 'Оплатить'}
      </StyledButtonForward>
    </StyledBox>
  );
}

export default ButtonBlock;
