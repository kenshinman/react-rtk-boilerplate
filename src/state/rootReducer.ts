import { combineReducers, } from 'redux';
import { persistReducer } from 'redux-persist';
import counter from "./counter/counterSlice";

const persistConfig = {
  key: 'root',
  storage: localStorage, // can be something more secure like sessionStorage
  blacklist: [], // reducers that you don't want to persist
}

export const combinedReducers = combineReducers({
  // your reducers here
  counter,
});

export const persistedReducer = persistReducer(persistConfig, combinedReducers);

