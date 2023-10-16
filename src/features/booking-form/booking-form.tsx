import { FormProvider, useForm, FieldValues } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/features/booking-form/schema';
import BookingStep from '@/components/modules/booking-step';
import { useEffect, useState } from 'react';
import { priceFields, userFields } from '@/core/utils/utils';
import { StepType } from '@/core/utils/types';

function BookingForm() {
  const methods = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });
  const router = useRouter();
  const { watch, formState, handleSubmit, } = methods;
  const { errors } = formState;

  const [step, setStep] = useState(0);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const onSubmit = (data: FieldValues) => {
    setTimeout(() => {
      console.log(data);
      router.push('/success');
    })
  };

  const handleButton = (step: StepType) => {
    let fieldsRequired: string[];
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
    };

    const checkIsValid = () => {
      const invalidFields = Object.keys(errors);
      if (invalidFields.length == 0) {
        return true;
      }
      if (invalidFields.some(element => fieldsRequired.includes(element))) {
        return false;
      }
      return true;
    };

    const isFilled = watch(fieldsRequired).every(Boolean);
    const isValid = checkIsValid();

    if (isFilled && isValid) {
      setIsDisabledButton(false);
    } else {
      setIsDisabledButton(true);
    }
  };

  const handleBack = () => {
    handleButton(step - 1);
    setStep((prev) => prev - 1);
  };

  const handleNext = () => {
    handleButton(step + 1);
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    handleButton(step);
  }, [formState]);

  return (
    <FormProvider {...methods} >
      <form onSubmit={handleSubmit(onSubmit)}>
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
