import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/features/booking-form/schema';

export function BookingForm({ children }: { children: React.ReactNode }) {
  const methods = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });

  return (
    <FormProvider {...methods}>
      <form>{children}</form>
    </FormProvider>
  );
}

export default BookingForm;
