import createStore from './createStore';
import rootReducer from './modules/rootReducers';

const store = createStore(rootReducer, []);

export { store };
