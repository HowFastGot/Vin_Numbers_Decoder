import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useOwnRedirectHook } from '../../../hooks/useOwnRedirectHook';

import {
	Header,
	VariableDescriptor,
	ErrorBoundary,
} from '../../components-transponder';

import { IStoreType, IDecriptionVariables } from '../../../types/';

import './singleVariableDescription.scss';

interface IParamsURL {
	id?: string;
}
type NeededVarObjectType = IDecriptionVariables | undefined;

function SingleVariableDescription() {
	const allVariablesArray: IDecriptionVariables[] = useSelector(
		(state: IStoreType) => state.variablesInfoReducer.dataArray
	);

	let { id }: IParamsURL = useParams();

	useOwnRedirectHook(allVariablesArray);

	const neededVariableItem: NeededVarObjectType = allVariablesArray.find(
		({ ID }: IDecriptionVariables): boolean => {
			if (id) {
				return ID === +id;
			} else {
				return false;
			}
		}
	);

	if (neededVariableItem) {
		return (
			<>
				<Header />
				<section className='app__single-variable-page single-variable-page'>
					<div className='single-variable-page__wrapper'>
						<ErrorBoundary>
							<VariableDescriptor
								customId={neededVariableItem.ID}
								{...neededVariableItem}
							/>
						</ErrorBoundary>
					</div>
				</section>
			</>
		);
	} else {
		return <div>Error page</div>;
	}
}

export default SingleVariableDescription;
