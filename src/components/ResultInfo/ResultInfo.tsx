import { useSelector } from 'react-redux';
import { IResponseItemAPI, IStoreType } from '../../types';

import { HeaderTables, ResultSingleItem } from '../components-transponder';

import { vinArrayInfoLoadingSelector } from '../../redux/vinInfoSlice';
import setContent from '../../utils/setContent/setContent';

import './resultInfo.scss';

interface IVinItemsReducerSelector {
	values: IResponseItemAPI[];
	loading: boolean | 'initial';
}
export function ResultInfo() {
	const { values, loading }: IVinItemsReducerSelector = useSelector(
		(state: IStoreType) => vinArrayInfoLoadingSelector(state.vinInfoReducer)
	);

	return (
		<section className='main-content__vehicle-infolist vehicle-infolist'>
			<HeaderTables headerText='Vehicle information' />
			<ul className='vehicle-infolist__table-list'>
				{setContent(loading, ResultSingleItem, values)}
			</ul>
		</section>
	);
}
