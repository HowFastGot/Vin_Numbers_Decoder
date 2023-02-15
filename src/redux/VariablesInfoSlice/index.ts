import { createSelector, createSlice } from '@reduxjs/toolkit';

import { IVariablesSlice, IDecriptionVariables } from '../../types';

type ActionType<T> = {
	payload: T;
	type: string;
};

const initialState: IVariablesSlice = {
	dataArray: [],
	singleVar: {},
	loading: false,
	error: false,
};

const variablesInfoSlice = createSlice({
	name: 'variables-info',
	initialState,
	reducers: {
		fetchingVariablesDescription: (state) => {
			state.loading = true;
			state.error = false;
		},
		handleErrorFetching: (state) => {
			state.error = true;
			state.loading = false;
		},
		addFetchedInfo: (state, action: ActionType<IDecriptionVariables[]>) => {
			state.loading = false;
			state.error = false;
			state.dataArray = action.payload;
		},
		getSingleVarInfo: (state, action: ActionType<number>) => {
			state.singleVar = {
				...state.dataArray.find((item) => item.ID === action.payload),
			};
		},
	},
});

export const vinArrayInfoLoadingSelector = createSelector(
	[
		(state: IVariablesSlice) => state.dataArray,
		(state: IVariablesSlice) => state.loading,
		(state: IVariablesSlice) => state.error,
	],
	(dataArray, loading, error) => ({
		dataArray,
		loading,
		error,
	})
);

export const {
	addFetchedInfo,
	getSingleVarInfo,
	fetchingVariablesDescription,
	handleErrorFetching,
} = variablesInfoSlice.actions;
export default variablesInfoSlice.reducer;
