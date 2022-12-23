import { createSlice } from '@reduxjs/toolkit';

import { users } from 'src/mock';
import type { IUser } from 'src/types';

interface IUsersState {
  data: IUser[];
}

const initialState: IUsersState = {
  data: users,
};

const usersSlice = createSlice({ name: 'users', initialState, reducers: {} });

export default usersSlice.reducer;
