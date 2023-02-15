import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
	Footer,
	ErrorMessage,
	SceletonLoader,
} from '../components-transponder';

import './App.scss';

const MainPage = lazy(() => import('../pages/Main-page/MainPage'));
const VariablesInfoList = lazy(
	() => import('../pages/VariablesInfoList/VariablesInfoList')
);
const SingleVariableDescription = lazy(
	() => import('../pages/SingleVariableDescription/SingleVariableDescription')
);

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<SceletonLoader />}>
				<MainPage />
			</Suspense>
		),
	},
	{
		path: '/variables/',
		element: (
			<Suspense fallback={<SceletonLoader />}>
				<VariablesInfoList />
			</Suspense>
		),
	},
	{
		path: '/variables/:id/',
		element: (
			<Suspense fallback={<SceletonLoader />}>
				<SingleVariableDescription />
			</Suspense>
		),
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
