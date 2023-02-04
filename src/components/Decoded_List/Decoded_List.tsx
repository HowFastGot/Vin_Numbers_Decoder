import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { HeaderTables } from '../components-transponder';
import { IRequestedVinSlice, IStoreType } from '../../types';

import './decoded_list.scss';

export function DecodedList() {
	const requestedVinArray: string[] = useSelector(
		(state: IStoreType) => state.requestedVinReducer.vinList
	);

	console.log(requestedVinArray);

	return (
		<section className='main-content__decoded-block decoded-block'>
			<HeaderTables headerText='Recently checked' />
			<nav className='decoded-block__list'>
				{requestedVinArray.map((item) => {
					return (
						<li key={nanoid()} className='decoded-block__item'>
							<a href='/'>{item}</a>
						</li>
					);
				})}
			</nav>
		</section>
	);
}

// Необхідно зберігати в глобальному стейті 5ть VIN номерів для відображення їх замість статики
