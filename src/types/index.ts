import vinInfoReducer from '../redux/vinInfoSlice/';

export interface IResponseItemAPI {
	Value: string;
	ValueId: string;
	Variable: string;
	VariableId: string;
}

export interface IResponseObjectAPI {
	Count: number;
	Message: string;
	Results: IResponseItemAPI[];
	SearchCriteria: string;
}

//====Slices==============================================================================

export interface IRequestedVinSlice {
	vinList: string[];
	isFirstLoaded: boolean;
}

export interface IVinInfoSlice {
	values: IResponseItemAPI[];
	loading: boolean;
}

//====Reducers==============================================================================

export interface IStoreType {
	requestedVinReducer: IRequestedVinSlice;
	vinInfoReducer: IVinInfoSlice;
}
