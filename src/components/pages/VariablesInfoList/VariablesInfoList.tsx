import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	VariableDescriptor,
	SceletonVariables,
	Header,
} from '../../components-transponder';

import {
	addFetchedInfo,
	fetchingVariablesDescription,
} from '../../../redux/VariablesInfoSlice';
import { useHttp } from '../../../hooks/http.hook';

import {
	IResponseVariablesAPI,
	IResponseObjectAPI,
	IDecriptionVariables,
	IStoreType,
} from '../../../types';
import './variablesInfoList.scss';

export function VariablesInfoList() {
	const variableInfoArray: IDecriptionVariables[] = useSelector(
		(state: IStoreType) => state.variablesInfoReducer.dataArray
	);
	const loading: boolean = useSelector(
		(state: IStoreType) => state.variablesInfoReducer.loading
	);

	const { request } = useHttp();
	const dispatch = useDispatch();

	const handleInsertingHTML = (data: Required<IDecriptionVariables[]>) => {
		if (loading) {
			return <SceletonVariables />;
		} else {
			return data.map((variableInfoObj) => {
				return (
					<VariableDescriptor
						key={variableInfoObj.ID}
						customId={variableInfoObj.ID}
						{...variableInfoObj}
					/>
				);
			});
		}
	};

	useEffect(() => {
		dispatch(fetchingVariablesDescription());
		request<IResponseObjectAPI<IResponseVariablesAPI>>(
			`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`
		)
			.then((res) => {
				if (res.Message.includes('successfully')) {
					const resultFetching: IDecriptionVariables[] = [];

					res.Results.forEach(({ Description, Name, ID }) => {
						resultFetching.push({ Description, Name, ID });
					});

					dispatch(addFetchedInfo(resultFetching));
				} else {
					throw new Error('Failur with fetching!');
				}
			})
			.catch((e) => {
				console.log(e);
			});
	}, [request, dispatch]);

	return (
		<>
			<Header />
			<div className='app__variables-info variables-info '>
				{handleInsertingHTML(variableInfoArray)}
			</div>
		</>
	);
}
