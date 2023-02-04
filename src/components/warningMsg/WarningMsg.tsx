import './warningMsg.scss';

export function WarningMsg({ message }: { message: string }) {
	const condition = message.length > 100;

	const classNameWarnMsg = condition
		? 'warning-message warning-message_tooLong'
		: 'warning-message ';

	return (
		<div className={classNameWarnMsg}>
			{condition ? message.slice(0, 30) : message} <br />{' '}
			<span>{condition ? message.slice(30) : null}</span>
		</div>
	);
}
