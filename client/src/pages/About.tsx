import { AboutInfo } from '../components/about/AboutInfo';
import { AboutProjectInfo } from '../components/about/AboutProjectInfo';

export const About = () => {
	return (
		<section className='min-h-screen bg-gray-900 text-white p-4 relative'>
			<div className='bg-[url(images/about_bg.jpg)] bg-cover bg-center min-h-[70vh] absolute top-0 left-0 right-0 z-0 overlay shadow-2xl flex items-center justify-center'>
				<div className='container flex flex-col items-center justify-center gap-10 h-full z-10'>
					<h2 className='text-5xl font-medium	 tracking-wider'>About Nimbus</h2>
					<p className='font-light text-gray-300'>Precision forecasts, built for everyday life.</p>
					<a href='https://github.com/Joao0330/React-Weather-App' target='_blank' className='button'>
						View on GitHub
					</a>
				</div>
			</div>

			<AboutInfo />

			<AboutProjectInfo />
		</section>
	);
};
