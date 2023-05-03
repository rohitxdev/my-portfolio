import './globals.scss';
import 'react-loading-skeleton/dist/skeleton.css';

import { Layout } from '@components';
import { AppContextProvider, AuthContextProvider } from '@contexts';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './router';
import { registerServiceWorker } from './service-worker';

registerServiceWorker();

const App = () => {
	return (
		<React.StrictMode>
			<AuthContextProvider>
				<AppContextProvider>
					<Layout>
						<Router />
					</Layout>
				</AppContextProvider>
			</AuthContextProvider>
		</React.StrictMode>
	);
};

const root = document.getElementById('root');
if (!root) {
	throw new Error('Could not find root element');
}

ReactDOM.createRoot(root).render(<App />);
