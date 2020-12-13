import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducers';

const persistConfig = {
  key: 'root',
  storage,
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
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
