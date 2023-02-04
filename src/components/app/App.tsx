import {
	DecodedList,
	Footer,
	Form,
	ResultInfo,
} from '../components-transponder';

import './App.scss';

function App() {
	return (
		<div className='app'>
			<div className='app__container container'>
				<main className='app__main-content main-content'>
					<Form />
					<ResultInfo />
					<DecodedList />
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
