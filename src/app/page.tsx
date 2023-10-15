'use client';

import BookingForm from '@/features/booking-form/booking-form';
import styles from './page.module.css';
import BookingStep from '@/components/modules/booking-step';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <BookingForm /> */}
      <BookingStep />
    </main>
  );
}
