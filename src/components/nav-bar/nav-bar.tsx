import styles from './nav-bar.module.scss';

export const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<ul>
				<li>
					<a href="#about-me">About</a>
				</li>
				<li>
					<a href="#my-projects">Projects</a>
				</li>
				<li>
					<a href="#contact-me">Contact</a>
				</li>
			</ul>
		</nav>
	);
};
