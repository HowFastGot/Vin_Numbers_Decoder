import { createSlice } from '@reduxjs/toolkit';

import { IRequestedVinSlice } from '../../types';

const initialState: IRequestedVinSlice = {
	vinList: [],
	isFirstLoaded: false,
};
const requestedVinSlice = createSlice({
	name: 'five-vin-list',
	initialState,
	reducers: {
		addNewRequstedVin: (state, action) => {
			const vinList: string[] = state.vinList;

			if (state.vinList.length <= 5) {
				vinList.push(action.payload);
			}
		},
	},
});

export const {
	actions: { addNewRequstedVin },
	reducer,
} = requestedVinSlice;
