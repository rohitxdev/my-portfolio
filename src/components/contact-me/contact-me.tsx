import { ReactComponent as GithubLogoIcon } from '@assets/icons/logo-github.svg';
import { ReactComponent as LinkedInLogoIcon } from '@assets/icons/logo-linkedin.svg';
import { staticData } from '@constants';
import { getFormData } from '@utils';
import { useId } from 'react';
import { toast } from 'react-toastify';

import styles from './contact-me.module.scss';

export const ContactMe = () => {
	const id = useId();
	const API_KEY =
		'9C52B8EBC315BEF170D7E849ED760EEE98411A605C6AA52F55124CDABFDF28D1694E1FB58776BA3A62279D4B4A03EE42';
	const sendQuery: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		const formData = getFormData(e);
		console.log(formData);
		fetch('https://api.elasticemail.com/v4/emails', {
			headers: { 'X-ElasticEmail-ApiKey': API_KEY },
			method: 'POST',
			body: JSON.stringify({
				Recipients: [
					{
						Email: 'rohitreddygr8@gmail.com',
					},
				],
				Content: {
					Body: [
						{
							ContentType: 'HTML',
							Content: `From ${formData.email} - 
							
							${formData.message}`,
							Charset: 'utf-8',
						},
					],

					From: 'rohitreddy.gangwar@rohit.works',
					Subject: formData.subject,
				},
			}),
		}).then(() => {
			toast('Sent message successfully');
		});
	};

	return (
		<section
			id="contact-me"
			aria-label="Contact me"
			className={styles.contactMe}
		>
			Contact me
			<form onSubmit={sendQuery}>
				<div>
					<div>
						<label htmlFor={`${id}-name`}>Name*</label>
						<input
							id={`${id}-name`}
							type="text"
							name="name"
							placeholder="Eg. John"
							required={true}
						/>
					</div>
					<div>
						<label htmlFor={`${id}-email`}>Email*</label>
						<input
							id={`${id}-email`}
							type="email"
							name="email"
							placeholder="Eg. johnsmith@gmail.com"
							required
						/>
					</div>
				</div>
				<div>
					<label htmlFor={`${id}-subject`}>Subject</label>
					<input id={`${id}-subject`} type="text" name="subject" />
				</div>
				<div>
					<label htmlFor={`${id}-message`}>Message*</label>
					<textarea
						id={`${id}-message`}
						name="message"
						cols={30}
						rows={10}
						placeholder="What do you want to say?"
						required
					></textarea>
				</div>
				<button type="submit">Send!</button>
			</form>
			<div className={styles.socialMediaLinks}>
				<a href={staticData.githubUrl} target="_blank" rel="noreferrer">
					<GithubLogoIcon />
				</a>
				<a href={staticData.linkedInUrl} target="_blank" rel="noreferrer">
					<LinkedInLogoIcon />
				</a>
			</div>
		</section>
	);
};
