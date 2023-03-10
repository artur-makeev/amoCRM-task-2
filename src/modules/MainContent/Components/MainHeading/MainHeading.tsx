import { montserrat } from '@/utils/fonts';
import styles from './MainHeading.module.css';


export const MainHeading = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Зарабатывайте больше</h1>
			<h1 className={styles.coloredHeading}>c WELBEX</h1>
			<p className={`${montserrat.className} ${styles.comment}`}>
				Развиваем и контролируем продажи за вас
			</p>
		</div>
	);
};