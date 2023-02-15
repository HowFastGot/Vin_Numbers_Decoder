import { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorMessage } from '../components-transponder/';

interface IProps {
	children?: ReactNode;
}

interface IState {
	error: boolean;
}

export class ErrorBoundary extends Component<IProps, IState> {
	state: IState = {
		error: false,
	};

	componentDidCatch(error: Error, errorMessage: ErrorInfo) {
		console.log('Первый аргумент componentDidCatch: >>', error);
		console.log('Второй аргумент componentDidCatch: >>', errorMessage);

		this.setState({
			error: true,
		});
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		return this.props.children;
	}
}
