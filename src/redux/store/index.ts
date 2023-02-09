import { configureStore } from '@reduxjs/toolkit';

import vinInfoReducer from '../vinInfoSlice/';
import variablesInfoReducer from '../VariablesInfoSlice';
import { reducer as requestedVinReducer } from '../requestedVinSlice'; //другой варианта импорта/експорта

const store = configureStore({
	reducer: { vinInfoReducer, requestedVinReducer, variablesInfoReducer },
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
