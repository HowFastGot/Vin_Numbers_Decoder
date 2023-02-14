import { createSelector, createSlice } from '@reduxjs/toolkit';
import { IVinInfoSlice, IResponseItemAPI } from '../../types';

const initialState: IVinInfoSlice = {
	values: [],
	prev_values: [],
	loading: 'initial',
};

interface IAction {
	type: string;
	payload: IResponseItemAPI[];
}

const resultsSlice = createSlice({
	name: 'vin-items',
	initialState,
	reducers: {
		fetchingProcess: (state) => {
			state.loading = true;
		},
		fetchedResults: (state, action: IAction) => {
			state.values = action.payload;
			state.loading = false;

			if (state.prev_values.length <= 4) {
				state.prev_values.unshift(action.payload);
			} else {
				state.prev_values.pop();
				state.prev_values.unshift(action.payload);
			}
		},
		loadAlrdyFetchedInfo: (state, action) => {
			state.loading = false;
			state.values = state.prev_values[action.payload];
		},
	},
});

export const vinArrayInfoLoadingSelector = createSelector(
	[
		(state: IVinInfoSlice) => state.values,
		(state: IVinInfoSlice) => state.loading,
	],
	(values, loading) => ({
		values,
		loading,
	})
);

export const { fetchingProcess, fetchedResults, loadAlrdyFetchedInfo } =
	resultsSlice.actions;

export default resultsSlice.reducer;
