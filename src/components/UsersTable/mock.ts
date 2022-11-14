import type { IUser } from 'src/types';

export const users: IUser[] = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    status: 'active',
    email: 'ivanov@project.org',
    registrationDate: '2022.10.10',
  },
  {
    id: 2,
    firstName: 'Петр',
    lastName: 'Петров',
    status: 'active',
    email: 'petrov@project.org',
    registrationDate: '2022.10.10',
  },
  {
    id: 3,
    firstName: 'Сидор',
    lastName: 'Сидоров',
    status: 'blocked',
    email: 'sidorov@project.org',
    registrationDate: '2022.10.10',
  },
  {
    id: 4,
    firstName: 'Матвей',
    lastName: 'Матвеев',
    status: 'active',
    email: 'matveev@project.org',
    registrationDate: '2022.10.10',
  },
  {
    id: 5,
    firstName: 'Игнат',
    lastName: 'Игнатов',
    status: 'frozen',
    email: 'ignatov@project.org',
    registrationDate: '2022.10.10',
  },
];
