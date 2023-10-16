import { useFormContext } from 'react-hook-form';
import TextInput from '@/components/ui/text/text-input';
import DateInput from '@/components/ui/date-input/date-input';

function UserDetails() {
  const { control } = useFormContext();

  return (
    <>
      <TextInput
        label={'Фамилия'}
        control={control}
        inputName={'lastName'}
        defaultValue={''}
      />
      <TextInput
        label={'Имя'}
        control={control}
        inputName={'firstName'}
        defaultValue={''}
      />
      <TextInput
        label={'fatherName'}
        control={control}
        inputName={'fatherName'}
        defaultValue={''}
      />
      <TextInput
        label={'Номер телефона'}
        control={control}
        inputName={'tel'}
        defaultValue={''}
      />
      <DateInput
        label={'Дата рождения'}
        control={control}
        inputName={'birthDate'}
        defaultValue={''}
      />
    </>
  );
}
export default UserDetails;
