import { AppContext } from '@contexts';
import { useContext } from 'react';

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('App context is null');
	}
	return context;
};
