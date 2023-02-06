import { useState, useEffect, useRef, useCallback, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingProcess, fetchedResults } from './../../redux/vinInfoSlice';
import { addNewRequstedVin } from '../../redux/requestedVinSlice';

import { SubmitButton } from '../components-transponder';
import { WarningMsg } from '../components-transponder';
import { useHttp } from '../../hooks/http.hook';

import { IResponseItemAPI, IResponseObjectAPI, IStoreType } from '../../types';

import './form.scss';

export function Form() {
	const [vinCharacter, setVinCharacter] = useState('');
	const requestedVinArray: string[] = useSelector(
		(state: IStoreType) => state.requestedVinReducer.vinList
	);

	const [warningMsgText, setWarningMsgText] = useState('');
	const [messageFromAPI, setMessageFromAPI] = useState('');

	const inputRef = useRef() as { current: HTMLInputElement };
	const { request } = useHttp();
	const dispatch = useDispatch();

	const fetchVinInfoMemorizedArray = useCallback(
		(url: string): void => {
			dispatch(fetchingProcess());
			request(url)
				.then((res: IResponseObjectAPI) => {
					if ('Results' in res && Array.isArray(res.Results)) {
						const filteredArr: IResponseItemAPI[] =
							res.Results.filter((item) => {
								return (
									item.Value &&
									!item.Variable.includes('Error')
								);
							});
						const requestedVIN: string = res.SearchCriteria.replace(
							/VIN:/gi,
							''
						);

						setMessageFromAPI(res.Message);

						dispatch(fetchedResults(filteredArr));
						dispatch(addNewRequstedVin(requestedVIN));

						setVinCharacter('');
					}
				})
				.catch((e: { message: string }) => {
					throw new Error(e.message);
				})
				.finally(() => {
					const timeID = setTimeout(() => {
						setMessageFromAPI('');
						clearTimeout(timeID);
					}, 3000);
				});
		},
		[dispatch, request]
	);

	const handleDoubleFetching = useCallback((): void => {
		setMessageFromAPI('Already fetched!');
		const timeId = setTimeout(() => {
			setMessageFromAPI('');
			clearTimeout(timeId);
		}, 2000);
	}, []);

	const handleInvalidInput = (
		target: HTMLInputElement,
		char: string
	): JSX.Element => {
		target.style.cssText = `
                    border: 1px solid red;
                    color: red;
               `;

		return <WarningMsg message={warningMsgText} />;
	};

	const checkValidVINCharacter = (
		e: ChangeEvent<HTMLInputElement>,
		char: string
	): JSX.Element | void => {
		e.preventDefault();
		const target: HTMLInputElement = e.target;

		if (char.match(/[\W_]/gi)) {
			setWarningMsgText(
				'The field should contains only letters / numbers'
			);
		} else if (char.length > 17) {
			setWarningMsgText('The text length not more than 17 characters');
		} else if (char.length === 0) {
			setWarningMsgText('The text length not less than 17 characters');
			setVinCharacter(char.toUpperCase());
		} else {
			setWarningMsgText('');
			setVinCharacter(char.toUpperCase());
			target.style.cssText = ``;
		}

		if (warningMsgText || char.length === 0) {
			let timeID = setTimeout(() => {
				setWarningMsgText('');
				target.style.cssText = ``;
				clearTimeout(timeID);
			}, 3000);
		}
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<section className='main-content__form-wrapper form-wrapper'>
			<header className='form-wrapper__header'>
				<h1 className='form-wrapper__title'>VIN number Decoder</h1>
				<h6 className='form-wrapper__title form-wrapper__title_sub-title'>
					Decoding VIN numbers
				</h6>
			</header>
			<form
				action='/'
				method='post'
				className='form'
				onSubmit={(e) => {
					e.preventDefault();

					if (requestedVinArray.at(-1) === vinCharacter) {
						handleDoubleFetching();
					} else {
						fetchVinInfoMemorizedArray(
							`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vinCharacter}?format=json`
						);
					}
				}}
			>
				<div className='form__group'>
					<input
						className='form__input'
						type='text'
						placeholder='Input 17 characters (only letters/digits)'
						value={vinCharacter}
						onChange={(e) =>
							checkValidVINCharacter(e, e.target.value?.trim())
						}
						onBlur={(e) => {
							checkValidVINCharacter(e, e.target.value?.trim());
						}}
						ref={inputRef}
						autoComplete={'true'}
					/>
					<SubmitButton isCorrectVIN={vinCharacter.length !== 17} />
					{inputRef.current && warningMsgText
						? handleInvalidInput(inputRef.current, vinCharacter)
						: null}
					{messageFromAPI ? (
						<WarningMsg message={messageFromAPI} />
					) : null}
				</div>
			</form>
		</section>
	);
}
