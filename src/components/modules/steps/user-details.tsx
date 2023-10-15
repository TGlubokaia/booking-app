import { useFormContext } from 'react-hook-form';
import TextInput from '@/components/ui/input/input/text-input';
import DateInput from '@/components/ui/date-input/date-input';

function UserDetails() {
  const { control } = useFormContext();

  return (
    <>
      <label>Фамилия</label>
      <TextInput
        control={control}
        inputName={'lastName'}
        defaultValue={''}
      />
      <label>Имя</label>
      <TextInput
        control={control}
        inputName={'firstName'}
        defaultValue={''}
      />
      <label>Отчество</label>
      <TextInput
        control={control}
        inputName={'fatherName'}
        defaultValue={''}
      />
      <label>Номер телефона</label>
      <TextInput
        control={control}
        inputName={'tel'}
        defaultValue={''}
      />
      <label>Дата рождения</label>
      <br />
      <DateInput
        control={control}
        inputName={'birthDate'}
        defaultValue={''}
      />
    </>
  );
}
export default UserDetails;
