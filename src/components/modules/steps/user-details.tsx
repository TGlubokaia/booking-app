import { useFormContext, useWatch } from 'react-hook-form';
import { StateInfoType, SetInfoType } from '@/core/utils/types';
import { userFields } from '@/core/utils/utils';
import useCompletedStep from '@/core/hooks/useCompletedStep';

type Props = {
  info: StateInfoType;
  handleInfo: SetInfoType;
};

function UserDetails(props: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const updatedFields = useWatch({ name: userFields });

  useCompletedStep(updatedFields, errors, props.info, props.handleInfo, 1);

  return (
    <>
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
export default UserDetails;
