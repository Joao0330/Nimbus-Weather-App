import { Link } from 'react-router-dom';
import { NavLinksProps } from '../types/GeneralTypes';

export const NavLinks = ({ url, title, toggleMobileMenu }: NavLinksProps) => {
	return (
		<li className='max-[450px]:border-b-2 max-[450px]:border-blue-900 max-[450px]:w-full max-[450px]:text-center max-[450px]:py-3'>
			<Link to={url} className='text-white hover:text-gray-400 transition-colors duration-300 max-[450px]:flex max-[450px]:items-center max-[450px]:justify-center' onClick={toggleMobileMenu}>
				{title}
			</Link>
		</li>
	);
};
