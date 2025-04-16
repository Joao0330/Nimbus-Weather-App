import { aboutInfoItemTypes } from '../../types/About.types';

export const AboutInfoItem = ({ icon, title, description }: aboutInfoItemTypes) => {
	return (
		<div className='flex flex-col items-center justify-center gap-5 w-[33.333%]'>
			{icon}
			<h3 className='font-bold'>{title}</h3>
			<p className='font-light text-gray-300 text-center'>{description}</p>
		</div>
	);
};
