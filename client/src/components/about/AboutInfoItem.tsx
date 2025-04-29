import { aboutInfoItemTypes } from '../../types/About.types';

export const AboutInfoItem = ({ icon, title, description }: aboutInfoItemTypes) => {
	return (
		<div className='flex flex-col items-center justify-center gap-5 w-[33.333%] max-[640px]:justify-start'>
			{icon}
			<h3 className='font-bold max-[640px]:text-center'>{title}</h3>
			<p className='font-light text-gray-300 text-center max-[640px]:hidden'>{description}</p>
		</div>
	);
};
