import { useDispatch } from 'react-redux';
import { loadAlrdyFetchedInfo } from '../../redux/vinInfoSlice';

import './decodedVinItem.scss';

interface IDecodedVinItemProps {
	decodedVin: string;
	indexInVinArr: number;
}
export function DecodedVinItem({
	decodedVin,
	indexInVinArr,
}: IDecodedVinItemProps) {
	const dispatch = useDispatch();

	const handleClickOnRecentVIN = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	): void => {
		e.preventDefault();
		dispatch(loadAlrdyFetchedInfo(indexInVinArr));
	};

	return (
		<li className='decoded-block__item'>
			<a href='/' onClick={handleClickOnRecentVIN}>
				{decodedVin}
			</a>
		</li>
	);
}
