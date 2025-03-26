// For the small cards on the left side of the app

export type WeatherDescCardData = {
	type: 'temperature' | 'percipitation' | 'visibility' | 'humidity';
	title: string;
	value: string;
	icon: React.JSX.Element;
};
