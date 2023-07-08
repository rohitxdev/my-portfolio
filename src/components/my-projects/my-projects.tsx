import { ReactComponent as OpenInNewTabIcon } from '@assets/icons/open-in-new-tab.svg';
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
	'Fastify',
	'JWT',
	'OAuth 2.0',
	'HTML',
	'CSS',
	'JavaScript',
] as const;

type Technologies = (typeof technologies)[number];

interface ProjectCardProps {
	projectTitle: string;
	projectThumbnail?: string;
	projectUrl?: string;
	projectDescription: string;
	technologiesUsed: Technologies[];
	videoUrl?: string;
	date: string;
}
const projects: ProjectCardProps[] = [
	{
		projectTitle: 'Animeow',
		projectDescription:
			'A website to search for anime with user authentication and video streaming capabilities.',
		technologiesUsed: [
			'React.js',
			'Fastify',
			'MongoDB',
			'JWT',
			'OAuth 2.0',
			'TypeScript',
		],
		projectThumbnail: 'animeow-1.png',
		projectUrl: 'https://animeow.rohit.works',
		videoUrl: 'animeow-compressed.mp4',
		date: '06/23 - current',
	},
	{
		projectTitle: 'Relay',
		projectDescription:
			'A free video conferencing app with screensharing feature that supports upto 20 people in a single call.',
		projectUrl: 'https://relay.rohit.works',
		technologiesUsed: [
			'React.js',
			'Express.js',
			'MongoDB',
			'TypeScript',
			'JWT',
		],
		projectThumbnail: 'relay-2.png',
		videoUrl: 'relay-compressed.mp4',
		date: '09/22 - 12/22',
	},
	{
		projectTitle: 'Bitsy',
		projectDescription: 'A simple URL shortener with QR code support.',
		projectUrl: 'https://bitsy.rohit.works',
		projectThumbnail: 'bitsy-1.png',
		technologiesUsed: ['React.js', 'Express.js', 'PostgreSQL', 'TypeScript'],
		videoUrl: 'bitsy-compressed.mp4',
		date: '01/23 - 01/23',
	},
	{
		projectTitle: 'WAP Weather',
		projectDescription:
			'An app to search for and get the weather info of any location in the world.',
		projectUrl: 'https://wapweather.netlify.app',
		projectThumbnail: 'wap-weather.png',
		date: '10/21 - 10/21',
		technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
	},
];

export const ProjectCard = ({
	projectTitle,
	projectThumbnail,
	projectDescription,
	projectUrl,
	technologiesUsed,
	videoUrl,
	date,
}: ProjectCardProps) => {
	const placeholderImage = `https://placehold.co/300x200/ffffff/2e2e2e?text=${projectTitle}`;

	// const [hide, setHide] = useState(true);

	// useEffect(() => {
	// 	const observer = new IntersectionObserver((entries, observer) => {
	// 		entries.forEach(
	// 			(entry) => {
	// 				entry.target.classList.toggle(styles.hide, !entry.isIntersecting);
	// 			},
	// 			{ threshold: 1 },
	// 		);
	// 	});
	// 	document.querySelectorAll('.' + styles.projectCard).forEach((doc) => {
	// 		observer.observe(doc);
	// 	});
	// }, []);
	const [showVideo, setShowVideo] = useState(false);
	return (
		<div className={[styles.projectCard].join(' ')}>
			<a
				onFocus={() => setShowVideo(true)}
				onBlur={() => setShowVideo(false)}
				onMouseEnter={() => setShowVideo(true)}
				onMouseLeave={() => setShowVideo(false)}
				href={projectUrl}
			>
				{showVideo && videoUrl ? (
					<video
						src={videoUrl}
						onPlay={(e) => {
							e.currentTarget.playbackRate = 1.5;
						}}
						autoPlay
						muted
					/>
				) : (
					<img
						src={projectThumbnail ?? placeholderImage}
						alt={`${projectTitle}'s screenshot`}
					/>
				)}
			</a>
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
				<p className={styles.date}>{date}</p>
				<div className={styles.badgeWrapper}>
					{technologiesUsed.map((tech, i) => (
						<span className={styles.badge} key={tech + i}>
							{tech}
						</span>
					))}
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
