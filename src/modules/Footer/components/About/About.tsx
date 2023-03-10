import styles from './About.module.css';


export const About = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.footerHeading}>О КОМПАНИИ</h3>
			<div className={styles.items}>
				<p>Партнёрская программа</p>
				<p>Вакансии</p>
			</div>
		</div>
	);
};