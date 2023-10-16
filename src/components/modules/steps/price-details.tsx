import { useFormContext } from 'react-hook-form';
import TextInput from '@/components/ui/text/text-input';
import CheckboxInput from '@/components/ui/checkbox/checkbox';
import SelectInput from '@/components/ui/select/select';
import RadioButtons from '@/components/ui/radio-buttons/radio-buttons';
import SwitchButton from '@/components/ui/switch-button/switch-button';

function PriceDetails() {
  const { control } = useFormContext();

  return (
    <>
      <TextInput
        label={'Количество взрослых'}
        control={control}
        inputName={'adults'}
        type={'number'}
        defaultValue={''}
      />
      <TextInput
        label={'Количество детей от 5 до 12 лет'}
        control={control}
        inputName={'middleChildhood'}
        type={'number'}
        defaultValue={''}
      />
      <TextInput
        label={'Количество детей до 5 лет'}
        control={control}
        inputName={'earlyChildhood'}
        type={'number'}
        defaultValue={''}
      />
      {/* <SelectInput
        label={'Тип номера'}
        control={control}
        selectName={'suit'}
        defaultValue={'econom'}
      /> */}
      <RadioButtons
        label={'Тип номера'}
        control={control}
        radioName={'suit'}
        defaultValue={'econom'}
      />
      <TextInput
        label={'Количество ночей'}
        control={control}
        inputName={'nights'}
        type={'number'}
        defaultValue={''}
      />
      {/* <CheckboxInput
        label={'Страховка'}
        control={control}
        checkboxName={'isInsured'}
        defaultValue={false}
      /> */}
      <SwitchButton
        label={'Страховка'}
        control={control}
        switchName={'isInsured'}
        defaultValue={false}
      />
    </>
  );
}

export default PriceDetails;
