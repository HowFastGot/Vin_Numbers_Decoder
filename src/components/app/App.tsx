import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import { Footer } from '../components-transponder';
import {
	MainPage,
	VariablesInfoList,
	SingleVariableDescription,
} from '../pages';

import './App.scss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <div>Error Page</div>,
	},
	{
		path: '/variables',
		element: <VariablesInfoList />,
	},
	{
		path: '/variables/:id',
		element: <SingleVariableDescription />,
	},
]);
function App() {
	return (
		<main className='app'>
			<div className='app__container container'>
				<RouterProvider router={router} />
				<Footer />
			</div>
		</main>
	);
}

export default App;
