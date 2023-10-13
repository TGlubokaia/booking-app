import { useFormContext } from 'react-hook-form';

export function BookingForm() {
  const { register } = useFormContext();

  return (
    <>
      <label>Количество взрослых</label>
      <input type="number" {...register('adults')} />
      <br />
      <br />
      <label>Количество детей от 5 до 12 лет</label>
      <input type="number" {...register('middleChildhood')} />
      <br />
      <br />
      <label>Количество детей до 5 лет</label>
      <input type="number" {...register('earlyChildhood')} />
      <br />
      <br />
      <label>Тип номера</label>
      <select {...register('suit')}>
        <option value="эконом">эконом</option>
        <option value="стандарт">стандарт</option>
        <option value="люкс">люкс</option>
      </select>
      <br />
      <br />
      <label>Количество ночей</label>
      <input type="number" {...register('nights')} />
      <br />
      <br />
      <label>Страховка</label>
      <input type="checkbox" {...register('isInsured')} />
      <br />
      <br />
      <label>Фамилия</label>
      <input type="text" {...register('lastName')} />
      <br />
      <br />
      <label>Имя</label>
      <input type="text" {...register('firstName')} />
      <br />
      <br />
      <label>Отчество</label>
      <input type="text" {...register('fatherName')} />
      <br />
      <br />
      <label>Номер телефона</label>
      <input
        type="tel"
        {...register('tel')}
        maxLength={13}
        placeholder="+790000000-00"
      />
      <br />
      <br />
      <label>Дата рождения</label>
      <input type="date" {...register('birthDate')} />
    </>
  );
}

export default BookingForm;
