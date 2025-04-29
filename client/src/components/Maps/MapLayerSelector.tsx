import { layerOptions } from '../../data/weather-forecast';
import { MapLayerSelectorProps } from '../../types/Weather.types';

export const MapLayerSelector = ({ selectedLayer, onSelectLayer }: MapLayerSelectorProps) => {
	return (
		<div className='absolute top-5 right-5 bg-white text-gray p-2 rounded-md z-500'>
			<ul className='flex flex-col gap-2'>
				{Object.entries(layerOptions).map(([value, label]) => (
					<button
						key={value}
						className={`${selectedLayer === value ? 'bg-gray-200' : ''} p-1.5 cursor-pointer rounded-md transition duration-300 hover:bg-gray-200`}
						onClick={() => onSelectLayer(value)}
					>
						{label}
					</button>
				))}
			</ul>
		</div>
	);
};
