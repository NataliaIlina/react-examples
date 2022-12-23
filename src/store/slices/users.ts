import { createSlice } from '@reduxjs/toolkit';

import type { IUser } from 'src/types';

interface IUsersState {
  data: IUser[];
}

const initialState: IUsersState = {
  data: [],
};

const users = createSlice({ name: 'users', initialState, reducers: {} });

export default users.reducer;
