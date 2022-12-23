import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { users } from 'src/mock';
import type { IUser } from 'src/types';

interface IUsersState {
  data: IUser[];
}

const initialState: IUsersState = {
  data: users,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<IUser>) => {
      const user = action.payload;

      state.data = [...state.data, user];
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      const userId = action.payload;

      state.data = state.data.filter((user) => user.id !== userId);
    },
  },
});

const { deleteUser, createUser } = usersSlice.actions;

export default usersSlice.reducer;

export { deleteUser, createUser };
