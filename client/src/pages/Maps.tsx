import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapLayerSelector } from '../components/Maps/MapLayerSelector';
import { MapLabels } from '../components/Maps/MapLabels';

export const Maps = () => {
	const [layer, setLayer] = useState('temp_new');

	return (
		<section className='min-h-screen bg-gray-900'>
			<div className='pt-22'>
				<MapContainer center={[43.505, -0.09]} minZoom={2} zoom={4} zoomControl={false} className='h-[600px] w-full'>
					<ZoomControl position='topleft' />

					<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' />

					<TileLayer url={`https://nimbus-backend-or5h.onrender.com/weather-maps/${layer}/{z}/{x}/{y}.png`} opacity={1} attribution='Weather data by OpenWeather' />

					<MapLayerSelector selectedLayer={layer} onSelectLayer={setLayer} />

					<MapLabels layer={layer} />
				</MapContainer>
			</div>
		</section>
	);
};
