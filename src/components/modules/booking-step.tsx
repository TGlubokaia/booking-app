import { Dispatch, SetStateAction, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import UserDetails from './steps/user-details';
import PriceDetails from './steps/price-details';
import Confirmation from './steps/confirmation';
import { stepsInfo } from '@/core/utils/utils';
import Button from '@mui/material/Button'

type BookingStepType = {
  handleNext: () => void;
  handleBack: () => void;
  step: number;
  isDisabledButton: boolean;
}

function BookingStep(props: BookingStepType) {
  return (
    <>
      <h3>{stepsInfo[props.step].title}</h3>
      <div>
        {props.step == 0 && <PriceDetails />}
        {props.step == 1 && <UserDetails />}
        {props.step == 2 && <Confirmation />}
      </div>
      <br />
      <div>
        {props.step > 0 && (
          <Button
            variant={'contained'}
            onClick={props.handleBack}
          >
            Назад
          </Button>
        )}
        <br />
        <br />
        <Button
          variant={'contained'}
          disabled={props.isDisabledButton}
          onClick={props.step < 2 ? props.handleNext : undefined}
        >
          {props.step < 2 ? 'Далее' : 'Оплатить'}
        </Button>
      </div>
    </>
  );
}

export default BookingStep;
