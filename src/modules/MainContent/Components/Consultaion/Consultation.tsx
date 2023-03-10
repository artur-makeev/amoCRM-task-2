import { Features } from '../Features/Features/Feaures';
import styles from './Consultation.module.css';


export const Consultation = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>
				Вместе с <span className={styles.coloredTextEnd}>БЕСПЛАТНОЙ</span>
			</h2>
			<h2 className={styles.heading}>
				<span className={styles.coloredTextStart}>КОНСУЛЬТАЦИЕЙ</span> мы дарим:
			</h2>
			<Features />
			<button className={styles.button}>
				Получить консультацию
			</button>
		</div>
	);
};