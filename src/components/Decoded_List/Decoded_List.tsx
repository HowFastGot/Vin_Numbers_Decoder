import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { HeaderTables, DecodedVinItem } from '../components-transponder';

import { IStoreType } from '../../types';

import './decoded_list.scss';

export function DecodedList() {
	const { vinList, loading } = useSelector(
		(state: IStoreType) => state.requestedVinReducer
	);

	const content =
		loading !== 'initial' ? (
			vinList.map((vin, id) => {
				return (
					<DecodedVinItem
						key={nanoid()}
						decodedVin={vin}
						indexInVinArr={id}
					/>
				);
			})
		) : (
			<div className='decoded-block__initial-content'>
				Decoded vin numbers will be placed here!
			</div>
		);

	return (
		<section className='main-content__decoded-block decoded-block'>
			<HeaderTables headerText='Recently checked' />
			<nav className='decoded-block__list'>{content}</nav>
		</section>
	);
}

// Необхідно зберігати в глобальному стейті 5ть VIN номерів для відображення їх замість статики
