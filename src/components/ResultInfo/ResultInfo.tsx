import { useSelector } from 'react-redux';
import { IResponseItemAPI, IStoreType } from '../../types';

import { HeaderTables, ResultSingleItem } from '../components-transponder';
import './resultInfo.scss';

export function ResultInfo() {
	const resultVinInfoArray: IResponseItemAPI[] = useSelector(
		(state: IStoreType) => state.vinInfoReducer.values
	);

	return (
		<section className='main-content__vehicle-infolist vehicle-infolist'>
			<HeaderTables headerText='Vehicle information' />
			<ul className='vehicle-infolist__table-list'>
				{resultVinInfoArray.map((item, index) => {
					return (
						<ResultSingleItem
							key={index}
							variable={item.Variable}
							value={item.Value}
						/>
					);
				})}
			</ul>
		</section>
	);
}
