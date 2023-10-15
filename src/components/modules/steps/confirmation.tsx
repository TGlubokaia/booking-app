import { useFormContext } from 'react-hook-form';

function Confirmation() {
  const { getValues } = useFormContext();
  const data = getValues();

  return (
    <>
      <p>
        {data.lastName + ' ' + data.firstName}
        {data.fatherName && ' ' + data.fatherName}
      </p>
      <p>{data.tel}</p>
      <p>{'Номер ' + data.suit + ' на ' + data.nights + ' ночей'}</p>
      <p>
        {data.adults + ' взрослых'}
        {data.middleChildhood &&
          ', ' + data.middleChildhood + ' ребенка от 5 лет'}
        {data.earlyChildhood &&
          ', ' + data.earlyChildhood + ' ребенка младше 5 лет'}
      </p>
      {data.isInsured && <p>Страховка включена</p>}
      <p>К оплате ...... </p>
    </>
  );
}

export default Confirmation;
