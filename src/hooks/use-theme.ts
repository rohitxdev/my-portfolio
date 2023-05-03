import { useEffect } from 'react';

import { useAppContext } from './use-contexts';

export const useTheme = () => {
	const { appState, appDispatch } = useAppContext();
	const { theme } = appState;

	const toggleTheme = () => appDispatch({ type: 'TOGGLE_THEME' });

	const detectTheme = () => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark' || theme === 'light') {
			return appDispatch({ type: 'SET_THEME', payload: theme });
		}
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			return appDispatch({ type: 'SET_THEME', payload: 'dark' });
		} else {
			return appDispatch({ type: 'SET_THEME', payload: 'light' });
		}
	};

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	useEffect(() => {
		detectTheme();
	}, []);

	return { theme, toggleTheme };
};
