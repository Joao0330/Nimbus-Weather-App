import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

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

					<nav className='max-[450px]:hidden'>
						<ul className='flex items-center gap-6'>
							<li>
								<Link to='/about' className='text-white hover:text-gray-400 transition-colors duration-300'>
									About
								</Link>
							</li>
							<li>
								<Link to='/weather-maps' className='text-white hover:text-gray-400 transition-colors duration-300'>
									Weather Maps
								</Link>
							</li>
						</ul>
					</nav>

					{/* TODO make the mobile menu work */}

					<button className={`hamburgerBtn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
						<span className='hamburgerBtnRows'></span>
						<span className='hamburgerBtnRows'></span>
						<span className='hamburgerBtnRows'></span>
					</button>
				</div>
			</div>
		</header>
	);
};
