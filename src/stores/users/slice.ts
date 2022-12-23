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
    deleteUser: (state, action: PayloadAction<{ userId: number }>) => {
      const { userId } = action.payload;

      state.data = state.data.filter((user) => user.id !== userId);
    },
  },
});

export const { deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
