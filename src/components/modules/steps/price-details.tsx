import { useFormContext } from 'react-hook-form';
import TextInput from '@/components/ui/input/input/text-input';
import CheckboxInput from '@/components/ui/checkbox/checkbox';
import SelectInput from '@/components/ui/select/select';

function PriceDetails() {
  const { control } = useFormContext();

  return (
    <>
      <label>Количество взрослых</label>
      <TextInput
        control={control}
        inputName={'adults'}
        type={'number'}
        defaultValue={''}
      />
      <label>Количество детей от 5 до 12 лет</label>
      <TextInput
        control={control}
        inputName={'middleChildhood'}
        type={'number'}
        defaultValue={''}
      />
      <label>Количество детей до 5 лет</label>
      <TextInput
        control={control}
        inputName={'earlyChildhood'}
        type={'number'}
        defaultValue={''}
      />
      <label>Тип номера</label>
      <SelectInput
        control={control}
        selectName={'suit'}
        defaultValue={'econom'}
      />
      <label>Количество ночей</label>
      <TextInput
        control={control}
        inputName={'nights'}
        type={'number'}
        defaultValue={''}
      />
      <label>Страховка</label>
      <CheckboxInput
        control={control}
        checkboxName={'isInsured'}
        defaultValue={false}
      />
    </>
  );
}

export default PriceDetails;
