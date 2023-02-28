import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHttp } from '../../../hooks/http.hook';

import {
	VariableDescriptor,
	SceletonVariables,
	Header,
	ErrorBoundary,
	ErrorMessage,
} from '../../components-transponder';

import {
	addFetchedInfo,
	fetchingVariablesDescription,
	handleErrorFetching,
	vinArrayInfoLoadingSelector,
} from '../../../redux/VariablesInfoSlice';

import {
	IResponseVariablesAPI,
	IResponseObjectAPI,
	IDecriptionVariables,
	IStoreType,
} from '../../../types';

import './variablesInfoList.scss';

function VariablesInfoList() {
	const { loading, dataArray, error } = useSelector((state: IStoreType) => {
		return vinArrayInfoLoadingSelector(state.variablesInfoReducer);
	});

	const { request } = useHttp();
	const dispatch = useDispatch();

	const handleInsertingHTML = (data: Required<IDecriptionVariables[]>) => {
		if (error) {
			return <ErrorMessage />;
		} else if (loading) {
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
					dispatch(addFetchedInfo(res.Results));
				} else {
					throw new Error('Failur with fetching!');
				}
			})
			.catch((e) => {
				dispatch(handleErrorFetching());
			});
	}, [request, dispatch]);

	return (
		<>
			<Header />
			<div className='app__variables-info variables-info '>
				<ErrorBoundary>{handleInsertingHTML(dataArray)}</ErrorBoundary>
			</div>
		</>
	);
}

export default VariablesInfoList;
