// For the small cards on the left side of the app

export type weatherDescCardTypes = {
	type: 'temperature' | 'percipitation' | 'visibility' | 'humidity';
	title: string;
	value: string;
	icon: React.JSX.Element;
};

export type weatherForecastTypes = {
	type: 'hourly' | 'daily';
	time?: string;
	temperature?: number;
	icon?: string;
};
