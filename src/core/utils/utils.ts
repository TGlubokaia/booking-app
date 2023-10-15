import { InfoType } from './types';

const userFields = ['lastName', 'firstName', 'tel', 'birthDate'];
const priceFields = ['adults', 'nights'];

const steps: InfoType = {
  0: {
    title: 'Расчет стоимости',
    isCompleted: false,
  },
  1: {
    title: 'Данные покупателя',
    isCompleted: false,
  },
  2: {
    title: 'Подтверждение заказа',
    isCompleted: true,
  },
};

export { userFields, priceFields, steps };
