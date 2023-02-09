import { useCallback } from 'react';

export const useHttp = () => {
	const request = useCallback(
		async <T>(
			url: string,
			method: 'GET' | 'POST' = 'GET',
			body: null | string = null,
			headers: Partial<{ 'Content-Type': string }> = {
				'Content-Type': 'application/json',
			}
		): Promise<T> => {
			try {
				const response = await fetch(url, { method, body, headers });

				if (!response.ok) {
					throw new Error(
						`Could not fetch ${url}, status: ${response.status}`
					);
				}

				const data: T = await response.json();

				return data;
			} catch (e) {
				throw e;
			}
		},
		[]
	);

	return { request };
};
