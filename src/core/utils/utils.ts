import { InfoType, SuitCategoryType } from './types';

const userFields = ['lastName', 'firstName', 'tel', 'birthDate'];
const priceFields = ['adults', 'nights'];

const stepsInfo: InfoType = {
  0: {
    title: 'Расчет стоимости',
    required: ['adults', 'nights']
  },
  1: {
    title: 'Данные покупателя',
    required: ['lastName', 'firstName', 'tel', 'birthDate']
  },
  2: {
    title: 'Подтверждение заказа',
  },
};

const suitCategories: SuitCategoryType = {
  'econom': 'Эконом',
  'standard': 'Стандарт',
  'lux': 'Люкс'
};

export { userFields, priceFields, stepsInfo, suitCategories };
