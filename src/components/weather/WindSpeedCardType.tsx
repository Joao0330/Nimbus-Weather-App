import { windVariationTypes } from '../../types/Weather.types';

export const WindSpeedCardType = ({ type, value }: windVariationTypes) => {
	return (
		<div className={`flex items-center gap-4 py-2 ${type === 'Wind' && 'border-b-1 border-gray'}`}>
			<strong className='text-3xl font-medium'>{value}</strong>
			<div className='flex flex-col'>
				<span className='uppercase text-sm text-gray-light'>km/h</span>
				<span className='text-sm'>{type}</span>
			</div>
		</div>
	);
};
