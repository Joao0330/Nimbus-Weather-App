import { mapLabels } from '../../data/weather-forecast';

type MapLabelsProps = {
	layer: string;
};

export const MapLabels = ({ layer }: MapLabelsProps) => {
	const label = mapLabels[layer];

	if (!label) return null;

	return (
		<div className='absolute bottom-7 right-5 bg-white text-[11px] text-gray p-1.5 rounded-md flex items-center w-[450px] gap-5 z-500 max-[640px]:left-5 max-[640px]:w-[280px] max-[640px]:gap-2'>
			<span className='text-center'>{label.label}</span>
			<div className='flex flex-col w-full max-[640px]:w-[250px]'>
				<div className='flex justify-between gap-10 w-full max-[640px]:gap-5'>
					{label.values.map((value, index) => (
						<span key={index}>{value}</span>
					))}
				</div>
				<div className={`h-1 ${label.gradientClass}`}></div>
			</div>
		</div>
	);
};
