// For the small cards on the left side of the app
export type weatherDescCardTypes = {
	type: 'temperature' | 'precipitation' | 'visibility' | 'humidity';
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

export type WindVariationReturnType = {
	windValues: windVariationTypes[];
	windDirection: number;
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
	wind: {
		speed: number;
		deg: number;
		gust: number;
	};
	rain: {
		'1h': number;
	};
	snow: {
		'1h': number;
	};
	clouds: {
		all: number;
	};
	name: string;
};
