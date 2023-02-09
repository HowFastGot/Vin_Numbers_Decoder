import { SceletonLoader } from '../components/components-transponder';
import { nanoid } from 'nanoid';
import { IResponseItemAPI } from '../types';

function setContent(
	page: string,
	loading: boolean,
	Component: React.ElementType,
	data: IResponseItemAPI[]
) {
	if (page === 'main-page') {
		switch (loading) {
			case false:
				return data.map((item, id) => {
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
}

export default setContent;
