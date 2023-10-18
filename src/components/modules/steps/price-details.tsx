import { useFormContext } from 'react-hook-form';
import TextInputField from '@/components/ui/mui-components/custom-components/text/text-input';
import SelectField from '@/components/ui/mui-components/custom-components/select/select';
import CustomCheckboxField from '@/components/ui/mui-components/custom-components/checkbox/checkbox';

function PriceDetails() {
  const { control } = useFormContext();

  return (
    <>
      <TextInputField
        label={'Количество взрослых'}
        control={control}
        fieldName={'adults'}
        type={'number'}
        defaultValue={''}
      />
      <TextInputField
        label={'Количество детей от 5 до 12 лет'}
        control={control}
        fieldName={'middleChildhood'}
        type={'number'}
        defaultValue={''}
      />
      <TextInputField
        label={'Количество детей до 5 лет'}
        control={control}
        fieldName={'earlyChildhood'}
        type={'number'}
        defaultValue={''}
      />
      <SelectField
        label={'Тип номера'}
        control={control}
        fieldName={'suit'}
        defaultValue={'econom'}
      />
      <TextInputField
        label={'Количество ночей'}
        control={control}
        fieldName={'nights'}
        type={'number'}
        defaultValue={''}
      />
      <CustomCheckboxField
        label={'Страховка'}
        control={control}
        fieldName={'isInsured'}
        defaultValue={false}
      />
    </>
  );
}

export default PriceDetails;
