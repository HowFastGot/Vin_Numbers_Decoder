import { useSelector } from 'react-redux';
import { useParams, redirect } from 'react-router-dom';

import { VariableDescriptor } from '../../components-transponder';

import { IStoreType, IDecriptionVariables } from '../../../types/';

import './singleVariableDescription.scss';

interface IParamsURL {
	id?: string;
}
type NeededVarObjectType = IDecriptionVariables | undefined;

export function SingleVariableDescription() {
	const allVariablesArray: IDecriptionVariables[] = useSelector(
		(state: IStoreType) => state.variablesInfoReducer.dataArray
	);

	let { id }: IParamsURL = useParams();

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
			<section className='app__single-variable-page single-variable-page'>
				<div className='single-variable-page__wrapper'>
					<VariableDescriptor
						customId={neededVariableItem.ID}
						{...neededVariableItem}
					/>
				</div>
			</section>
		);
	} else {
		return <div>Error page</div>;
	}
}
