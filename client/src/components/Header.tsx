import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { navbarLinks } from '../data/navbar-links';
import { NavLinks } from './NavLinks';

export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header>
			<div className='container relative z-999'>
				<div className='flex items-center justify-between py-6 absolute w-full max-[1170px]:px-[4rem] max-[640px]:px-[2rem] max-[500px]:px-[1rem]'>
					<Link to='/' className='flex items-center gap-4 text-white hover:text-gray-400 transition duration-300'>
						<h1 className='text-3xl'>Nimbus</h1>
						<img src={logo} alt='logo image' className='w-[50px]' />
					</Link>

					<nav className={`navbarMenu ${isMobileMenuOpen ? 'active' : ''}`}>
						<ul className='flex items-center gap-6 max-[450px]:flex-col max-[450px]:gap-9 max-[450px]:w-full max-[450px]:px-5'>
							{navbarLinks.map((link, index) => (
								<NavLinks key={index} {...link} />
							))}
						</ul>
					</nav>

					<button className={`hamburgerBtn ${isMobileMenuOpen ? 'active fixed right-4' : ''}`} onClick={toggleMobileMenu}>
						<span className='hamburgerBtnRows'></span>
						<span className='hamburgerBtnRows'></span>
						<span className='hamburgerBtnRows'></span>
					</button>
				</div>
			</div>
		</header>
	);
};
