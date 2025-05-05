import { aboutInfoItems } from '../../data/about-info-items';
import { useAos } from '../../hooks/useAos';
import { AboutInfoItem } from './AboutInfoItem';

export const AboutInfo = () => {
	useAos();
	return (
		<div className='container flex gap-5 relative w-full z-15 bg-gray-900 shadow-2xl mt-[60vh] p-6' data-aos='fade-up'>
			{aboutInfoItems.map((item, index) => (
				<AboutInfoItem key={index} {...item} />
			))}
		</div>
	);
};
