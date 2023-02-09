import { DecodedList, Form, ResultInfo } from '../../components-transponder';

export function MainPage() {
	return (
		<main className='app__main-content main-content'>
			<Form />
			<ResultInfo />
			<DecodedList />
		</main>
	);
}
