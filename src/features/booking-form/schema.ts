import * as yup from 'yup';

const schema = yup.object({
  adults: yup
    .number()
    .transform((value, originValue) => (originValue == '' ? undefined : value))
    .positive('Неверно указано число')
    .integer('Неверно указано число')
    .required('Обязательное поле'),
  middleChildhood: yup
    .number()
    .transform((value, originValue) => (originValue == '' ? undefined : value))
    .min(0, 'Неверно указано число')
    .integer('Неверно указано число'),
  earlyChildhood: yup
    .number()
    .transform((value, originValue) => (originValue == '' ? undefined : value))
    .min(0, 'Неверно указано число')
    .integer('Неверно указано число'),
  suit: yup.string(),
  nights: yup
    .number()
    .transform((value, originValue) => (originValue == '' ? undefined : value))
    .positive('Неверно указано число')
    .integer('Неверно указано число')
    .required('Обязательное поле'),
  isInsured: yup.boolean(),
  lastName: yup.string().required('Обязательное поле'),
  firstName: yup.string().required('Обязательное поле'),
  fatherName: yup.string(),
  tel: yup
    .string()
    .required('Обязательное поле')
    .matches(/\+7\d{8}[-]\d{2}/, 'Неверный формат'),
  birthDate: yup
    .date()
    .transform((value, originValue) => (originValue == '' ? undefined : value))
    .required('Обязательное поле'),
});

export { schema };
