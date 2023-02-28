import { redirect } from 'react-router-dom';

export function redirectBeforeFetch(): void {
	if (false) {
		redirect('/variables/');
	} else {
		return;
	}
}
