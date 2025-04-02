import { IoLocationOutline } from 'react-icons/io5';
import { useState } from 'react';

export const SearchBar = ({ onSearch }: { onSearch: (city: string) => void }) => {
	const [searchValue, setSearchValue] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchValue.trim()) {
			onSearch(searchValue.charAt(0).toUpperCase() + searchValue.slice(1));
		}
	};

	return (
		<form className='bg-gray text-white py-1.5 px-5 rounded-full flex items-center gap-2 shadow-2xl' onSubmit={handleSubmit}>
			<IoLocationOutline className='text-2xl' />
			<input type='search' placeholder='Enter City' className='w-full outline-none' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
		</form>
	);
};
