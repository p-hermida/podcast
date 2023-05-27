import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const middlewares: any[] = [thunk];

if (import.meta.env.MODE !== 'production') {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
