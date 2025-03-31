import { LuWind } from 'react-icons/lu';
import { WindCompass } from './WindCompass';
import { WindSpeedCardType } from './WindSpeedCardType';
import { windVariation } from '../../data/weather-forecast';

export const WindSpeedCard = () => {
	return (
		<article className='bottomCards'>
			<div className='flex gap-3'>
				<div className='flex flex-col w-3/5'>
					<div className='flex items-center gap-3 text-gray-light mb-5'>
						<LuWind className='text-xl' />
						<h2 className='uppercase'>wind</h2>
					</div>

					<div>
						{windVariation.map((item, index) => (
							<WindSpeedCardType key={index} type={item.type} value={item.value} />
						))}
					</div>
				</div>

				<WindCompass windDirection={90} />
			</div>
		</article>
	);
};
