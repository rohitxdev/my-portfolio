import { getFormData } from '@utils';

import styles from './contact-me.module.scss';

export const ContactMe = () => {
	const sendQuery: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = getFormData(e);
		console.log(formData);
	};

	return (
		<section
			id="contact-me"
			aria-label="Contact me"
			className={styles.contactMe}
		>
			Contact me
			<form onSubmit={sendQuery}>
				<label>
					Name
					<input type="text" name="name" placeholder="Eg. John" required />
				</label>
				<label>
					Email
					<input
						type="email"
						name="email"
						placeholder="Eg. johnsmith@gmail.com"
						required
					/>
				</label>
				<label>
					Query
					<textarea name="query" cols={30} rows={10} required></textarea>
				</label>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};
