import type { IRootState } from 'src/stores/rootStore';

export const getUsers = (state: IRootState) => state.users.data;

export const getUserById = (state: IRootState, userId: number) => {
  const users = getUsers(state);

  return users.find((user) => user.id === userId);
};
