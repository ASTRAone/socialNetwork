import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import initialState from './initialState';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants';

import {PeopleReducer} from '../reducers/people.reducers';
import {TechnologiesReducer} from '../reducers/technologies.reducers';
import { FilmsReducer } from '../reducers/films.reducer';
import { TransportReducer } from '../reducers/transport.reducer';
import { VarietyReducer } from '../reducers/variety.reducer';

const reducer = combineReducers({
  people: PeopleReducer.reducer,
  technologies: TechnologiesReducer.reducer,
  films: FilmsReducer.reducer,
  transport: TransportReducer.reducer,
  variety: VarietyReducer.reducer,
});

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
  middleware: getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }),
});

export default store;