import { AboutMe, ContactMe, MyProjects } from '@components';

import { Three } from '../../components/three/three';
import styles from './home.module.scss';

export const HomePage = () => {
	return (
		<div className={styles.homePage}>
			{/* <Three /> */}
			<AboutMe />
			<MyProjects />
			<ContactMe />
		</div>
	);
};
