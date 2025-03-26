import { IoLocationOutline } from 'react-icons/io5';

export const SearchBar = () => {
	return (
		<form className='bg-gray text-white py-1.5 px-5 rounded-full flex items-center gap-2 shadow-2xl'>
			<IoLocationOutline className='text-2xl' />
			<input type='search' placeholder='Enter City' className='w-full outline-none' />
		</form>
	);
};
