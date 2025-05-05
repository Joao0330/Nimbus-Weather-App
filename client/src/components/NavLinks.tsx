import { Link } from 'react-router-dom';
import { NavLinksProps } from '../types/GeneralTypes';

export const NavLinks = ({ url, title, icon, toggleMobileMenu }: NavLinksProps) => {
	return (
		<li className='navLinks'>
			<Link to={url} className='text-white hover:text-gray-400 transition-colors duration-300 max-[450px]:flex max-[450px]:items-center max-[450px]:justify-between' onClick={toggleMobileMenu}>
				<div className='hidden text-blue-600 text-2xl max-[450px]:flex'>{icon}</div>
				<span>{title}</span>
			</Link>
		</li>
	);
};
