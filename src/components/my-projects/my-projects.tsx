import { ReactComponent as OpenInNewTabIcon } from '@assets/icons/open-in-new-tab.svg';

import styles from './my-projects.module.scss';

interface ProjectCardProps {
	projectTitle: string;
	projectThumbnail?: string;
	projectUrl?: string;
	projectDescription: string;
}
const projects: ProjectCardProps[] = [
	{
		projectTitle: 'Relay',
		projectDescription:
			'A free video conferencing app made using React.js, Typescript, MongoDB and Agora SDK.',
		projectUrl: 'https://relay.rohit.works',
	},
	{
		projectTitle: 'Animex',
		projectDescription:
			'A free anime streaming site made using React.js, Typescript, GraphQL, and a webscraper.',
	},
	{
		projectTitle: 'Bitsy',
		projectDescription:
			'A simple URL shortener made using React.js and PostgreSQL with QR code support.',
		projectUrl: 'https://bitsy.rohit.works',
	},
];

export const ProjectCard = ({
	projectTitle,
	projectThumbnail,
	projectDescription,
	projectUrl,
}: ProjectCardProps) => {
	const placeholderImage = `https://placehold.co/300x200/ffffff/2e2e2e?text=${projectTitle}`;
	const visitProjectUrl = () => {
		if (projectUrl) {
			window.open(projectUrl, '_blank');
		}
	};
	return (
		<div
			className={styles.projectCard}
			data-url={projectUrl}
			onClick={visitProjectUrl}
		>
			<img
				src={projectThumbnail ?? placeholderImage}
				alt={`${projectTitle}'s screenshot`}
			/>
			{projectUrl && (
				<a
					href={projectUrl}
					title={projectUrl}
					target="_blank"
					rel="noreferrer"
					className={styles.projectLink}
				>
					<OpenInNewTabIcon />
				</a>
			)}
			<div className={styles.projectDetails}>
				<h4>{projectTitle}</h4>
				<p>{projectDescription}</p>
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
