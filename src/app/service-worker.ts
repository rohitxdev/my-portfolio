import { ENV_VARS } from '@config';

export const registerServiceWorker = () => {
	if (ENV_VARS.IS_PWA_ENABLED) {
		import('virtual:pwa-register')
			.then(({ registerSW }) => registerSW({}))
			.then((updateSW) => updateSW())
			.then(() => {
				console.log('Service worker registered 🤖');
			})
			.catch(() => {
				console.error('Service worker could not be registered ❌');
			});
	}
};
