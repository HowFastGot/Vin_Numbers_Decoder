import './submitButton.scss';

export function SubmitButton({ isCorrectVIN }: { isCorrectVIN: boolean }) {
	return (
		<button className='button' disabled={isCorrectVIN}>
			Check
		</button>
	);
}
