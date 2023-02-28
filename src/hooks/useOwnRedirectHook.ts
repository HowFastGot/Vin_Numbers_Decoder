import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IDecriptionVariables } from '../types';

export function useOwnRedirectHook(fetchedDataArray: IDecriptionVariables[]) {
	const navigate = useNavigate();

	useEffect(() => {
		if (fetchedDataArray.length < 1) {
			navigate('/variables/');
		}
	}, [fetchedDataArray, navigate]);
}
