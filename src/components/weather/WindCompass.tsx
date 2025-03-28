export const WindCompass = ({ windDirection }: { windDirection: number }) => {
	return (
		<div className='compass'>
			<div className='needle' style={{ transform: `rotate(${windDirection}deg)` }} />
			<div className='directions'>
				<span className='north'>N</span>
				<span className='east'>E</span>
				<span className='south'>S</span>
				<span className='west'>W</span>
			</div>
			<p>{windDirection}°</p>
		</div>
	);
};
