import { NavLink, Link, useMatch } from 'react-router-dom';

import Logo from './imgs/logo.png';
import './header.scss';

export function Header() {
	const urlObj = useMatch('/');
	const urlSingleVarObj = useMatch('/variables/:id');

	return (
		<header className='header'>
			<div className='header__left-side header-left'>
				<div className='header-left__logo'>
					<img src={Logo} alt='' />
				</div>
				<h3>
					<NavLink
						to='/'
						style={({ isActive }) =>
							isActive ? { color: 'yellow' } : undefined
						}
					>
						Main page
					</NavLink>
				</h3>
			</div>
			<div className='header__right-side header-right'>
				<ul className='header-right__list'>
					<li className='header-right__item'>
						<NavLink
							to='/variables'
							style={({ isActive }) =>
								isActive ? { color: 'greenyellow' } : undefined
							}
						>
							Variables page
						</NavLink>
					</li>

					{!urlObj ? (
						<li className='header-right__item header-right__item_back'>
							<Link to={urlSingleVarObj ? '/variables' : '..'}>
								Step back
							</Link>
						</li>
					) : null}
				</ul>
			</div>
		</header>
	);
}
