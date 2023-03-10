import { montserrat } from '@/utils/fonts';
import styles from './Copyright.module.css';


export const Copyright = () => {
	return (
		<div className={styles.container}>
			<p className={`${styles.item} ${montserrat.className}`}>
				©WELBEX 2022. Все права защищены.
			</p>
			<p className={`${styles.item} ${montserrat.className}`}>
				Политика конфиденциальности
			</p>
		</div>
	);
};