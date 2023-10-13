'use client';
import { BookingForm } from '@/features/booking-form/booking-form';
import styles from './page.module.css';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/features/booking-form/schema';

export default function Home() {
  const methods = useForm({ resolver: yupResolver(schema) });

  const formSubmittedCallback = (formData: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log('sumbit');
    console.log(formData);
  };

  console.log(methods.formState.errors);

  return (
    <main className={styles.main}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmittedCallback)}>
          <BookingForm />
          <br />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </main>
  );
}
