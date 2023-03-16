import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import appReducer from './slicers/app';
import axiosMiddleware from './middleware/api';
import errorHandling from './middleware/error';

const combinedReducers = combineReducers({
  app: appReducer,
});

const rootReducer = (state: any | undefined, action: Action) =>
  combinedReducers(state, action);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(axiosMiddleware).concat(errorHandling),
  enhancers: defaultEnhancers => [
    ...defaultEnhancers,
  ],
});

export type AppDispatch = typeof store.dispatch;

export default store;
