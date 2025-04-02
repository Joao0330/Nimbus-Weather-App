// For the small cards on the left side of the app
export type weatherDescCardTypes = {
	type: 'temperature' | 'percipitation' | 'visibility' | 'humidity';
	title: string;
	value: number;
	icon: React.JSX.Element;
};

export type weatherForecastTypes = {
	type: 'hourly' | 'daily';
	time?: string;
	date?: string;
	temperature?: number;
	icon?: string;
};

export type windVariationTypes = {
	type: 'Wind' | 'Gusts';
	value: number;
};

export type weatherApiDataTypes = {
	main: {
		temp: number;
		feels_like: number;
		humidity: number;
	};
	weather: {
		main: string;
	}[];
	visibility: number;
	rain: {
		'1h': number;
	};
	name: string;
};
