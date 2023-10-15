import { useFormContext, useWatch } from 'react-hook-form';
import { StateInfoType, SetInfoType } from '@/core/utils/types';
import { priceFields } from '@/core/utils/utils';
import useCompletedStep from '@/core/hooks/useCompletedStep';

type Props = {
  info: StateInfoType;
  handleInfo: SetInfoType;
};

function PriceDetails(props: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const updatedFields = useWatch({ name: priceFields });

  useCompletedStep(updatedFields, errors, props.info, props.handleInfo, 0);

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
    </>
  );
}

export default PriceDetails;
