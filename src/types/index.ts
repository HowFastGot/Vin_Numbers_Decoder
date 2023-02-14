export interface IResponseItemAPI {
	Value: string;
	ValueId: string;
	Variable: string;
	VariableId: string;
}
export interface IResponseVariablesAPI {
	DataType: string;
	Description: string;
	GroupName: string;
	ID: number;
	Name: string;
}

export interface IResponseObjectAPI<T> {
	Count: number;
	Message: string;
	Results: T[];
	SearchCriteria: string;
}

export interface IDecriptionVariables {
	Description: string;
	Name: string;
	ID: number;
}

//====Slices==============================================================================

export interface IRequestedVinSlice {
	vinList: string[];
	loading: boolean | 'initial';
}

export interface IVinInfoSlice {
	values: IResponseItemAPI[];
	prev_values: IResponseItemAPI[][];
	loading: boolean | 'initial';
}

export interface IVariablesSlice {
	dataArray: IDecriptionVariables[];
	singleVar: Partial<IDecriptionVariables>;
	loading: boolean;
}

//====Reducers==============================================================================

export interface IStoreType {
	requestedVinReducer: IRequestedVinSlice;
	vinInfoReducer: IVinInfoSlice;
	variablesInfoReducer: IVariablesSlice;
}
