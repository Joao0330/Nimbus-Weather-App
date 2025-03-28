import { CiCloudOn } from 'react-icons/ci';

export const CloudCoverCard = () => {
	return (
		<article className='bottomCards'>
			<div className='flex items-center gap-3 text-gray-light mb-5'>
				<CiCloudOn className='text-2xl' />
				<h2 className='uppercase'>cloud cover</h2>
			</div>

			<strong className='text-3xl font-normal'>87%</strong>
		</article>
	);
};
