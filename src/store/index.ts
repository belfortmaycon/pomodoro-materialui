// OLD WAY Redux CORE
// import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// NEW WAY Redux Toolkit
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// import rootReducer from './modules/rootReducers';
import rootReducer from 'src/store/ducks';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
/**
 * For use with Redux-Saga
 * import createSagaMiddleware from 'redux-saga';
 * import rootSaga from './modules/rootSaga';
 *
 * // After persisted Reducer
 * const sagaMiddleware = createSagaMiddleware();
 *
 * // Change createStore to:
 * createStore(persistedReducer, applyMiddleware(sagaMiddleware));
 *
 * // Run Middleware
 * sagaMiddleware.run(rootSaga);
 *
 * // Export sagaMiddleware
 * export { store, persistor sagaMiddleware};
 */

// OLD WAY with core Redux
// const store = createStore(persistedReducer);

// New WAY with Redux Toolkit
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
