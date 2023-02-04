import './headerTables.scss';

interface IHeadertablesProps {
	headerText: string;
}
export function HeaderTables({ headerText }: IHeadertablesProps) {
	return <h6 className='header-tables'>{headerText}</h6>;
}
