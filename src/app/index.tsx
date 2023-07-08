import './globals.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '@components';
import { AppContextProvider } from '@contexts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { Router } from './router';
import { registerServiceWorker } from './service-worker';

registerServiceWorker();

const App = () => {
	return (
		<React.StrictMode>
			<AppContextProvider>
				<Layout>
					<Router />
					<ToastContainer
						pauseOnHover={false}
						pauseOnFocusLoss={false}
						toastClassName="toast"
					/>
				</Layout>
			</AppContextProvider>
		</React.StrictMode>
	);
};

const root = document.getElementById('root');
if (!root) {
	throw new Error('Root element could not be found');
}

ReactDOM.createRoot(root).render(<App />);
