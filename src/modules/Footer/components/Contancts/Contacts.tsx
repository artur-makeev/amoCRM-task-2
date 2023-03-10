import Image from 'next/image';
import styles from './Contacts.module.css';


export const Contacts = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.footerHeading}>КОНТАКТЫ</h3>
			<div className={styles.itemsContainer}>
				<p className={styles.footerItem}>+7 555 555-55-55</p>
				<div className={styles.icons}>
					<Image
						src='./telegram.svg'
						alt='telegram'
						height={20}
						width={20}
					/>
					<Image
						src='./phone.svg'
						alt='phone'
						height={19}
						width={20}
					/>
					<Image
						src='./telegram.svg'
						alt='telegram'
						height={20}
						width={20}
					/>
				</div>
				<p>Москва, Путевой проезд 3с1, к 902</p>
			</div>
		</div>
	);
};