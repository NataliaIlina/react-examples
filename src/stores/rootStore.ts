import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './users/slice';

export const rootStore = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type IRootState = ReturnType<typeof rootStore.getState>;
export type IAppDispatch = typeof rootStore.dispatch;
