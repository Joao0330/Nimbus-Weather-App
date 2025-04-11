export const Footer = () => {
	return (
		<footer className='bg-gray-900 py-10 text-white'>
			<div className='container flex flex-col gap-8'>
				<div className='text-sm'>
					<p className='text-gray-400'>Nimbus is a personal project and is not affiliated with any existing product of the same name.</p>
				</div>

				<div className='flex justify-between pt-5 border-t-1 border-gray-700'>
					<strong className='text-white font-medium'>© 2025 João Rodrigues</strong>
					<a href='https://github.com/Joao0330/React-Weather-App' target='_blank' className='hover:text-gray-400 transition-colors duration-300'>
						Github
					</a>
				</div>
			</div>
		</footer>
	);
};
