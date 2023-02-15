import {
	DecodedList,
	Form,
	Header,
	ResultInfo,
	ErrorBoundary,
} from '../../components-transponder';

function MainPage() {
	return (
		<main className='app__main-content main-content'>
			<Header />
			<ErrorBoundary>
				<Form />
			</ErrorBoundary>
			<ErrorBoundary>
				<ResultInfo />
			</ErrorBoundary>
			<ErrorBoundary>
				<DecodedList />
			</ErrorBoundary>
		</main>
	);
}

export default MainPage;
