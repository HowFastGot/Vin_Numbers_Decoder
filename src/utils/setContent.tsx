import { SceletonLoader } from '../components/components-transponder';
import { nanoid } from 'nanoid';
import { IResponseItemAPI } from '../types';

function setContent(
	loading: boolean | 'initial',
	Component: React.ElementType,
	data: IResponseItemAPI[]
) {
	switch (loading) {
		case 'initial':
			return (
				<div className='vehicle-infolist__initial-content'>
					Vin`s information will be placed here
				</div>
			);
		case false:
			return data.map((item) => {
				return (
					<Component
						key={nanoid()}
						variable={item.Variable}
						value={item.Value}
					/>
				);
			});
		case true:
			return <SceletonLoader />;

		default:
			throw new Error("Can't search procces in swtich");
	}
}

export default setContent;
