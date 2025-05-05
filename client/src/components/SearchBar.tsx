import { IoLocationOutline, IoSearch } from 'react-icons/io5';
import { useState } from 'react';

export const SearchBar = ({ onSearch }: { onSearch: (city: string) => void }) => {
	const [searchValue, setSearchValue] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchValue.trim()) {
			onSearch(searchValue);
		}
	};

	return (
		<form className='bg-gray text-white py-1.5 px-5 rounded-full flex items-center gap-2 shadow-2xl relative' onSubmit={handleSubmit}>
			<IoLocationOutline className='text-2xl' />
			<input
				type='search'
				placeholder='Enter City'
				className='w-full outline-none [-webkit-appearance:none] [&::-webkit-search-cancel-button]:hidden [&::-ms-clear]:hidden'
				value={searchValue}
				onChange={e => {
					setSearchValue(e.target.value);
					localStorage.setItem('city', e.target.value);
				}}
			/>
			<button
				className='absolute right-0 h-full w-[10%] flex justify-center items-center border-l-2 border-gray-900 cursor-pointer rounded-r-full hover:bg-gray-900 transition-colors duration-300 max-[450px]:w-[15%]'
				type='submit'
			>
				<IoSearch />
			</button>
		</form>
	);
};
