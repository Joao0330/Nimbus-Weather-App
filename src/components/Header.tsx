import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Header = () => {
	return (
		<header>
			<div className='container relative z-10'>
				<div className='flex items-center justify-between py-6 absolute w-full'>
					<Link to='/' className='flex items-center gap-4 text-white hover:text-gray-400 transition duration-300'>
						<h1 className='text-3xl'>Nimbus</h1>
						<img src={logo} alt='logo image' className='w-[50px]' />
					</Link>

					<nav>
						<Link to='/about' className='text-white hover:text-gray-400 transition-colors duration-300'>
							About
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};
