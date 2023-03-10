import styles from './Features.module.css';


export const FeaturesMobile = () => {
	return (
		<div className={styles.container}>
			<div className={styles.feature}>
				<h3 className={styles.featureHeading}>
					<span className={styles.line}>—</span> SKYPE АУДИТ
				</h3>
			</div>
			<div className={styles.feature}>
				<h3 className={styles.featureHeading}>
					<span className={styles.line}>—</span> 30 ВИДЖЕТОВ
				</h3>
			</div>
			<div className={styles.feature}>
				<h3 className={styles.featureHeading}>
					<span className={styles.line}>—</span> DASHBOARD
				</h3>
			</div>
			<div className={styles.feature}>
				<h3 className={styles.featureHeading}>
					<span className={styles.line}>—</span> МЕСЯЦ AMOCRM
				</h3>
			</div>
		</div>
	);
};