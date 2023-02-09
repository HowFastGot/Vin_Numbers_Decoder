import { createSlice } from '@reduxjs/toolkit';

import { IVariablesSlice, IDecriptionVariables } from '../../types';

type ActionType<T> = {
	payload: T;
	type: string;
};

const initialState: IVariablesSlice = {
	dataArray: [],
	singleVar: {},
	loading: false,
};

const variablesInfoSlice = createSlice({
	name: 'variables-info',
	initialState,
	reducers: {
		fetchingVariablesDescription: (state) => {
			state.loading = true;
		},
		addFetchedInfo: (state, action: ActionType<IDecriptionVariables[]>) => {
			state.loading = false;
			state.dataArray = action.payload;
		},
		getSingleVarInfo: (state, action: ActionType<number>) => {
			state.singleVar = {
				...state.dataArray.find((item) => item.ID === action.payload),
			};
		},
	},
});

export const {
	addFetchedInfo,
	getSingleVarInfo,
	fetchingVariablesDescription,
} = variablesInfoSlice.actions;
export default variablesInfoSlice.reducer;
