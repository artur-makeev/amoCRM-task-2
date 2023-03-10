import Link from 'next/link';
import styles from './MainMenu.module.css';


export const MainMenu = () => {

	return (
		<div className={styles.container}>
			<Link className={styles.menuItem} href='/'>Услуги</Link>
			<Link className={styles.menuItem} href='/'>Виджеты</Link>
			<Link className={styles.menuItem} href='/'>Интеграции</Link>
			<Link className={styles.menuItem} href='/'>Кейсы</Link>
			<Link className={styles.optionalLink} href='/'>Сертификаты</Link>
		</div>
	);
};