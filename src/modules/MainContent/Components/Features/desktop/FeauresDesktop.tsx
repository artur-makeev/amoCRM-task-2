import { montserrat } from '@/utils/fonts';
import styles from './FeaturesDesktop.module.css';


export const FeaturesDesktop = () => {
	return (
		<div className={styles.container}>
			<div className={styles.feature}>
				<h3 className={styles.featureHeading}>ВИДЖЕТЫ</h3>
				<p className={`${montserrat.className} ${styles.comment}`}>30 готовых решений</p>
			</div>
			<div className={styles.feature}>
				<h3 className={styles.featureHeading}>DASHBOARD</h3>
				<p className={`${montserrat.className} ${styles.comment}`}>с показателями вашего бизнеса</p>
			</div>
			<div className={styles.feature}>
				<h3 className={styles.featureHeading}>SKYPE АУДИТ</h3>
				<p className={`${montserrat.className} ${styles.comment}`}>отдела продаж и CRM системы</p>
			</div>
			<div className={styles.feature}>
				<h3 className={styles.featureHeading}>35 ДНЕЙ</h3>
				<p className={`${montserrat.className} ${styles.comment}`}>использования CRM</p>
			</div>
		</div>
	);
};