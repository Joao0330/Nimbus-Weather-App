export const WindCompass = ({ windDirection }: { windDirection: number }) => {
	const correctedDirection = (windDirection + 180) % 360;

	return (
		<div className='compass'>
			<svg className='needle' style={{ transform: `rotate(${correctedDirection}deg)` }} viewBox='0 0 100 100'>
				<polygon points='50,10 40,90 50,80 60,90' fill='#5C98AA' />
			</svg>
			<div className='directions'>
				<span className='north'>N</span>
				<span className='east'>E</span>
				<span className='south'>S</span>
				<span className='west'>W</span>
			</div>
		</div>
	);
};
