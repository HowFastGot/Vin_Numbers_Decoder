import {
	DecodedList,
	Form,
	Header,
	ResultInfo,
} from '../../components-transponder';

export function MainPage() {
	return (
		<main className='app__main-content main-content'>
			<Header />
			<Form />
			<ResultInfo />
			<DecodedList />
		</main>
	);
}
