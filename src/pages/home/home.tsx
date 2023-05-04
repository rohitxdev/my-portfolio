import { AboutMe, ContactMe, MyProjects } from '@components';

import styles from './home.module.scss';

export const HomePage = () => {
	return (
		<div className={styles.homePage}>
			<AboutMe />
			<MyProjects />
			<ContactMe />
		</div>
	);
};
