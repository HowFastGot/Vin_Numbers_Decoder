import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { HeaderTables } from '../components-transponder';
import { loadAlrdyFetchedInfo } from '../../redux/vinInfoSlice';

import { IStoreType } from '../../types';

import './decoded_list.scss';

export function DecodedList() {
	const requestedVinArray: string[] = useSelector(
		(state: IStoreType) => state.requestedVinReducer.vinList
	);

	const dispatch = useDispatch();

	const handleClickOnRecentVIN = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		vin: string
	): void => {
		e.preventDefault();

		const indexOfVin: number = requestedVinArray.indexOf(vin);

		dispatch(loadAlrdyFetchedInfo(indexOfVin));
	};

	return (
		<section className='main-content__decoded-block decoded-block'>
			<HeaderTables headerText='Recently checked' />
			<nav className='decoded-block__list'>
				{requestedVinArray.map((item) => {
					return (
						<li key={nanoid()} className='decoded-block__item'>
							<a
								href='/'
								onClick={(e) => handleClickOnRecentVIN(e, item)}
							>
								{item}
							</a>
						</li>
					);
				})}
			</nav>
		</section>
	);
}

// Необхідно зберігати в глобальному стейті 5ть VIN номерів для відображення їх замість статики
