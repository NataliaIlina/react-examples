import { STATUS_TITLE } from 'src/constants/common';
import type { IUserStatus } from 'src/types';

export const TABLE_COLUMNS = ['Имя', 'Фамилия', 'Статус', 'Почта', 'Дата регистрации', '', ''];

interface IFilterOption {
  label: string;
  value: IUserStatus | 'all';
}

export const FILTERS: IFilterOption[] = [
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
