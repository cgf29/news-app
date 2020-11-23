import { combineReducers } from 'redux';
import { globalNewsReducer } from './globalNewsReducer';
import { specificNewsReducer } from './specificNewsReducer';

export const rootReducer = combineReducers({
   global: globalNewsReducer,
   specific: specificNewsReducer,
});