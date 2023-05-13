import { ReactComponent as OpenInNewTabIcon } from '@assets/icons/open-in-new-tab.svg';
import bitsy1 from '@assets/images/bitsy-1.png';
import { useEffect, useState } from 'react';

import styles from './my-projects.module.scss';

const technologies = [
	'React.js',
	'JavaScript',
	'TypeScript',
	'Vite',
	'Node.js',
	'Express.js',
	'MongoDB',
	'PostgreSQL',
	'GraphQL',
] as const;

type Technologies = (typeof technologies)[number];

interface ProjectCardProps {
	projectTitle: string;
	projectThumbnail?: string;
	projectUrl?: string;
	projectDescription: string;
	technologiesUsed: Technologies[];
}
const projects: ProjectCardProps[] = [
	{
		projectTitle: 'Relay',
		projectDescription:
			'A free video conferencing app made using React.js, Typescript, MongoDB and Agora SDK.',
		projectUrl: 'https://relay.rohit.works',
		technologiesUsed: ['React.js', 'Express.js', 'MongoDB', 'TypeScript'],
	},
	{
		projectTitle: 'Animex',
		projectDescription:
			'A free anime streaming site made using React.js, Typescript, GraphQL, and a webscraper.',
		technologiesUsed: ['React.js', 'Express.js', 'GraphQL', 'TypeScript'],
	},
	{
		projectTitle: 'Bitsy',
		projectDescription:
			'A simple URL shortener made using React.js and PostgreSQL with QR code support.',
		projectUrl: 'https://bitsy.rohit.works',
		projectThumbnail: bitsy1,
		technologiesUsed: ['React.js', 'Express.js', 'PostgreSQL', 'TypeScript'],
	},
];

export const ProjectCard = ({
	projectTitle,
	projectThumbnail,
	projectDescription,
	projectUrl,
	technologiesUsed,
}: ProjectCardProps) => {
	const [hide, setHide] = useState(true);

	useEffect(() => {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(
				(entry) => {
					entry.target.classList.toggle(styles.hide, !entry.isIntersecting);
				},
				{ threshold: 1 },
			);
		});
		document.querySelectorAll('.' + styles.projectCard).forEach((doc) => {
			observer.observe(doc);
		});
	}, []);
	const placeholderImage = `https://placehold.co/300x200/ffffff/2e2e2e?text=${projectTitle}`;
	return (
		<div className={[styles.projectCard, hide && styles.hide].join(' ')}>
			<img
				src={projectThumbnail ?? placeholderImage}
				alt={`${projectTitle}'s screenshot`}
			/>
			<div>
				<div className={styles.projectDetails}>
					<h4>{projectTitle}</h4>
					{projectUrl && (
						<div className={styles.projectLink}>
							<a href={projectUrl} target="_blank" rel="noreferrer">
								{projectUrl}
							</a>
							<OpenInNewTabIcon />
						</div>
					)}
					<p>{projectDescription}</p>
					<div className={styles.badgeWrapper}>
						{technologiesUsed.map((tech, i) => (
							<span className={styles.badge} key={tech + i}>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const MyProjects = () => {
	return (
		<section
			id="my-projects"
			aria-label="My projects"
			className={styles.myProjects}
		>
			<h3>My Projects</h3>
			<div className={styles.projects}>
				{projects.map((project, i) => (
					<ProjectCard {...project} key={project.projectTitle + i} />
				))}
			</div>
		</section>
	);
};
