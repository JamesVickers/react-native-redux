import {createStore, combineReducers} from 'redux';
import {visibilityFilterReducer, todosReducer} from '../reducers';

export const rootReducer = combineReducers({
    visibilityFilterReducer,
    todosReducer,
  });

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);