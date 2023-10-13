'use client';
import { BookingForm } from '@/features/booking-form/booking-form';
import styles from './page.module.css';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

export default function Home() {
  const methods = useForm();

  const formSubmittedCallback = (formData: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  };

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
