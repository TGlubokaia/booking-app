import { FormProvider, useForm, FieldValues } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/features/booking-form/schema';
import BookingStep from '@/components/modules/booking-step';
import { useState } from 'react';
import { priceFields, userFields } from '@/core/utils/utils';
import { StepType } from '@/core/utils/types';

function BookingForm() {
  const methods = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });
  const router = useRouter();
  const { watch, formState: { errors }, handleSubmit } = methods;

  const [step, setStep] = useState(0);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const onSubmit = (data: FieldValues) => {
    setTimeout(() => {
      console.log(data);
      router.push('/success');
    })
  }

  const handleButton = (step: StepType) => {
    let fieldsRequired;
    switch (step) {
      case 0: {
        fieldsRequired = priceFields;
        break;
      };
      case 1: {
        fieldsRequired = userFields;
        break;
      };
      default: return;
    }

    const isFilled = watch(fieldsRequired).every(Boolean);
    const checkIsValid = () => {
      const invalidFields = Object.keys(errors);
      if (invalidFields.length == 0) {
        return true;
      } else {
        invalidFields.some(element => fieldsRequired.includes(element));
      }
    }

    if (isFilled && checkIsValid) {
      console.log('not disaabled');
      setIsDisabledButton(false);
    } else {
      console.log('disaabled');
      setIsDisabledButton(true);
    }
  };

  const handleBack = () => {
    console.log(step);
    handleButton(step - 1);
    setStep((prev) => prev - 1);
  };

  const handleNext = () => {
    handleButton(step + 1);
    setStep((prev) => prev + 1);
  };



  return (
    <FormProvider {...methods} >
      <form onSubmit={handleSubmit(onSubmit)} onBlur={() => handleButton(step)} onChange={() => handleButton(step)}>
        <BookingStep
          handleBack={handleBack}
          handleNext={handleNext}
          step={step}
          isDisabledButton={isDisabledButton}
        />
      </form>
    </FormProvider>
  );
}

export default BookingForm;
