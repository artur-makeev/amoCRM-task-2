import styles from './Menu.module.css';


export const Menu = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.footerHeading}>МЕНЮ</h3>
			<div className={styles.itemsContainer}>
				<div className={styles.items}>
					<p>Расчёт стоимости</p>
					<p>Услуги</p>
					<p>Виджеты</p>
					<p>Интеграции</p>
					<p>Наши клиенты</p>
				</div>
				<div className={styles.items}>
					<p>Кейсы</p>
					<p>Благодарственные письма</p>
					<p>Сертификаты</p>
					<p>Блог на Youtube</p>
					<p>Вопрос / Ответ</p>
				</div>
			</div>
		</div>
	);
};