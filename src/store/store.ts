import {
  combineReducers,
  Action,
  Store,
  createStore,
  applyMiddleware,
} from 'redux';
import furnitureReducer from './furniture/furnitureReducer';
import { IGlobalState } from './globalState';
import thunkMiddleware from 'redux-thunk';
import furnitureTypesReducer from './furnitureTypes/furnitureTypesReducer';

const rootReducer = combineReducers({
  furniture: furnitureReducer,
  furnitureTypes: furnitureTypesReducer,
});

export const configureStore = (): Store<IGlobalState, Action> => {
  const globalStore: Store<IGlobalState> = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );
  return globalStore;
};
