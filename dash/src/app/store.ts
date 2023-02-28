import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

import fetchReducer from '../features/apiFetch/actionslice';
const rootreducer=combineReducers({fetch:fetchReducer})
export const store = configureStore({
  reducer: {
    root: rootreducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
