import { createSlice } from '@reduxjs/toolkit';
import { IVinInfoSlice } from '../../types';

const initialState: IVinInfoSlice = {
	values: [],
	loading: false,
};

const resultsSlice = createSlice({
	name: 'vin-items',
	initialState,
	reducers: {
		fetchingProcess: (state) => {
			state.loading = true;
		},
		fetchedResults: (state, action) => {
			state.values = action.payload;
			state.loading = false;
		},
		deleteResults: (state) => {
			state.values.splice(0);
		},
	},
});

export const { fetchingProcess, fetchedResults, deleteResults } =
	resultsSlice.actions;

export default resultsSlice.reducer;
