import { STATUS_TITLE } from 'src/constants';

export const TABLE_COLUMNS = ['Имя', 'Фамилия', 'Статус', 'Почта', 'Дата регистрации', ''];

export const FILTERS = [
  {
    label: 'Все',
    value: 'all',
  },
  {
    label: STATUS_TITLE['active'],
    value: 'active',
  },
  {
    label: STATUS_TITLE['frozen'],
    value: 'frozen',
  },
  {
    label: STATUS_TITLE['blocked'],
    value: 'blocked',
  },
];
