import './globals.scss';
import 'react-loading-skeleton/dist/skeleton.css';

import { Layout } from '@components';
import { AppContextProvider } from '@contexts';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './router';
import { registerServiceWorker } from './service-worker';

registerServiceWorker();

const App = () => {
	return (
		<React.StrictMode>
			<AppContextProvider>
				<Layout>
					<Router />
				</Layout>
			</AppContextProvider>
		</React.StrictMode>
	);
};

const root = document.getElementById('root');
if (!root) {
	throw new Error('Could not find root element');
}

ReactDOM.createRoot(root).render(<App />);
