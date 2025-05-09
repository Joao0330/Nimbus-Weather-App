import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAos = () => {
	useEffect(() => {
		AOS.init({
			duration: 600,
			easing: 'ease-in-out',
			once: true,
		});

		return () => {
			AOS.refreshHard();
		};
	}, []);
};
