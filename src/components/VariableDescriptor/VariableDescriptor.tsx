import { Link } from 'react-router-dom';

import './variableDescriptor.scss';

interface IVariableDescriptorProps {
	Description: string;
	Name: string;
	customId: number;
}
export function VariableDescriptor({
	Description,
	Name,
	customId,
}: IVariableDescriptorProps) {
	return (
		<div className='variables-info__grid-row var-item'>
			<ul className='var-item__name-column'>
				<li className='var-item__name-item'>
					<Link to={`${customId.toString()}`}>{Name}</Link>
				</li>
			</ul>
			<ul className='var-item__desc-column'>
				<li className='var-item__desc-item'>{Description}</li>
			</ul>
		</div>
	);
}
