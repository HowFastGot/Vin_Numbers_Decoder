import { configureStore } from '@reduxjs/toolkit';

import vinInfoReducer from '../vinInfoSlice/';
import { reducer as requestedVinReducer } from '../requestedVinSlice'; //два варианта импорта/експорта

const store = configureStore({
	reducer: { vinInfoReducer, requestedVinReducer },
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
