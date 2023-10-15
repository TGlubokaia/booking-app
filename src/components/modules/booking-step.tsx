import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BookingForm from '@/features/booking-form/booking-form';
import UserDetails from './steps/user-details';
import PriceDetails from './steps/price-details';
import Confirmation from './steps/confirmation';
import { steps } from '@/core/utils/utils';
import { StepInfoType, StepType } from '@/core/utils/types';

function BookingStep() {
  const [stepsInfo, setStepsInfo] = useState(steps);
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const activeStepInfo: StepInfoType = { ...stepsInfo[activeStep] };

  const returnHandler = (step: StepType) => {
    if (step) {
      setActiveStep((step -= 1));
    }
    return;
  };

  const forwardHandler = (
    step: StepType,
    stepInfo: StepInfoType,
    cb: () => void
  ) => {
    if (step == 2) {
      cb();
      return;
    }
    if (stepInfo.isCompleted) {
      setActiveStep((step += 1));
    }
  };

  const getStepComponent = (step: StepType) => {
    switch (step) {
      case 0:
        return <PriceDetails info={stepsInfo} handleInfo={setStepsInfo} />;
      case 1:
        return <UserDetails info={stepsInfo} handleInfo={setStepsInfo} />;
      case 2:
        return <Confirmation />;
      default:
        return null;
    }
  };

  const fetchData = async (e: MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log('Data');
      router.push('/success');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <h3>{activeStepInfo.title}</h3>
      <BookingForm>{getStepComponent(activeStep)}</BookingForm>
      <br />
      {!!activeStep && (
        <button onClick={() => returnHandler(activeStep)}>Назад</button>
      )}
      <br />
      <button
        disabled={!activeStepInfo.isCompleted}
        onClick={(e) =>
          forwardHandler(activeStep, activeStepInfo, () => fetchData(e))
        }
      >
        {activeStep == 2 ? 'Оплатить' : 'Далее'} {isLoading && 'isLoading'}
      </button>
    </>
  );
}

export default BookingStep;
