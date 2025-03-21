import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Header = () => {
	return (
		<header>
			<div className='container relative'>
				<div className='flex items-center justify-between py-6 absolute w-full'>
					<div className='flex items-center gap-4'>
						<h1 className='text-3xl text-white'>Nimbus</h1>
						<img src={logo} alt='logo image' className='w-[50px]' />
					</div>

					<nav>
						<Link to='/' className='text-white'>
							About us
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};
