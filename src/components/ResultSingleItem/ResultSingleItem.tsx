import './resultSingleItem.scss';

interface IResultSingleItem {
	variable: string | number;
	value: string | number;
}

export function ResultSingleItem({ variable, value }: IResultSingleItem) {
	return (
		<li className='vehicle-infolist__item'>
			<div className='vehicle-infolist__row'>
				<div className='vehicle-infolist__column-var'>{variable}</div>
				<div className='vehicle-infolist__column-value'>{value}</div>
			</div>
		</li>
	);
}
