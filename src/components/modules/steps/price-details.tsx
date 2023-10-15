import { useFormContext, useWatch } from 'react-hook-form';
import { InfoType, SetInfoType } from '@/core/utils/types';
import { priceFields } from '@/core/utils/utils';
import useCompletedStep from '@/core/hooks/useCompletedStep';
import TextInput from '@/components/ui/input/input/text-input';
import CheckboxInput from '@/components/ui/checkbox/checkbox';
import SelectInput from '@/components/ui/select/select';

type Props = {
  info: InfoType;
  handleInfo: SetInfoType;
};

function PriceDetails(props: Props) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const updatedFields = useWatch({ name: priceFields });

  useCompletedStep(updatedFields, errors, props.info, props.handleInfo, 0);

  return (
    <>
      <label>Количество взрослых</label>
      <TextInput
        control={control}
        inputName={'adults'}
        type={'number'}
      />
      <label>Количество детей от 5 до 12 лет</label>
      <TextInput
        control={control}
        inputName={'middleChildhood'}
        type={'number'}
      />
      <label>Количество детей до 5 лет</label>
      <TextInput
        control={control}
        inputName={'earlyChildhood'}
        type={'number'}
      />
      <label>Тип номера</label>
      <SelectInput
        control={control}
        selectName={'suit'}
      />
      <label>Количество ночей</label>
      <TextInput
        control={control}
        inputName={'nights'}
        type={'number'}
      />
      <label>Страховка</label>
      <CheckboxInput
        control={control}
        checkboxName={'isInsured'}
      />
    </>
  );
}

export default PriceDetails;
