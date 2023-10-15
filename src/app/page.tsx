'use client';

import BookingForm from '@/features/booking-form/booking-form';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <BookingForm />
    </main>
  );
}
