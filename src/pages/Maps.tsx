import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { API_KEY } from '../lib/apiKey';

export const Maps = () => {
	return (
		<section className='min-h-screen bg-gray-900'>
			<div className='pt-22'>
				<MapContainer center={[51.505, -0.09]} minZoom={2} zoom={5} zoomControl={false} className='h-[100vh] w-full'>
					<ZoomControl position='bottomright' />

					<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

					<TileLayer url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`} opacity={1} />

					<div className='absolute top-0 z-500'>test</div>
				</MapContainer>
			</div>
		</section>
	);
};

/* TODO Adicionar legenda com a informação da temperatura, percipitação, ... (se possivel) */
