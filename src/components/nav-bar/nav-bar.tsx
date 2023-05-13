import { ReactComponent as CodeSlashIcon } from '@assets/icons/code-slash.svg';
import { useId } from 'react';

import styles from './nav-bar.module.scss';

export const NavBar = () => {
	const id = useId();
	return (
		<nav className={styles.navBar}>
			<ul>
				<li>
					<a href="/#about-me">About</a>
				</li>
				<li>
					<label htmlFor={id}>
						<CodeSlashIcon />
					</label>
					<a id={id} href="/#my-projects">
						Projects
					</a>
				</li>
				<li>
					<a href="/#contact-me">Contact</a>
				</li>
			</ul>
		</nav>
	);
};
