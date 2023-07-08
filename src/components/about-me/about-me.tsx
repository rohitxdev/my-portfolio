import { staticData } from '@constants';

import styles from './about-me.module.scss';

export const AboutMe = () => {
	return (
		<section id="about-me" aria-label="About me" className={styles.aboutMe}>
			<img src="me.jpg" alt="Me" />
			<p>{staticData.bio}</p>
		</section>
	);
};
