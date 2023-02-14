import { createSlice } from '@reduxjs/toolkit';

import { IRequestedVinSlice } from '../../types';

const initialState: IRequestedVinSlice = {
	vinList: [],
	loading: 'initial',
};
const requestedVinSlice = createSlice({
	name: 'five-vin-list',
	initialState,
	reducers: {
		addNewRequstedVin: (state, action) => {
			state.loading = false;
			const vinList: string[] = state.vinList;

			if (vinList.includes(action.payload)) return;

			if (state.vinList.length <= 4) {
				vinList.unshift(action.payload);
			} else {
				vinList.pop();
				vinList.unshift(action.payload);
			}
		},
		// changeOrderVin: (state, action) => {
		// 	const requstedVin = state.vinList.splice(action.payload, 1);
		// 	state.vinList = [
		// 		...requstedVin,
		// 		...state.vinList.filter((item) => item !== requstedVin[0]),
		// 	];
		// },
	},
});

export const {
	actions: { addNewRequstedVin },
	reducer,
} = requestedVinSlice;
