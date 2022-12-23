import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './slices/users';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
