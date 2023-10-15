import { useFormContext, useWatch } from 'react-hook-form';
import { InfoType, SetInfoType } from '@/core/utils/types';
import { userFields } from '@/core/utils/utils';
import useCompletedStep from '@/core/hooks/useCompletedStep';
import TextInput from '@/components/ui/input/input/text-input';
import DateInput from '@/components/ui/date-input/date-input';


type Props = {
  info: InfoType;
  handleInfo: SetInfoType;
};

function UserDetails(props: Props) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const updatedFields = useWatch({ name: userFields });

  useCompletedStep(updatedFields, errors, props.info, props.handleInfo, 1);

  return (
    <>
      <label>Фамилия</label>
      <TextInput
        control={control}
        inputName={'lastName'}
      />
      <label>Имя</label>
      <TextInput
        control={control}
        inputName={'firstName'}
      />
      <label>Отчество</label>
      <TextInput
        control={control}
        inputName={'fatherName'}
      />
      <label>Номер телефона</label>
      <TextInput
        control={control}
        inputName={'tel'}
      />
      <label>Дата рождения</label>
      <br />
      <DateInput
        control={control}
        inputName={'birthDate'}
      />
    </>
  );
}
export default UserDetails;
