import Image from 'next/image';
import styles from './Contacts.module.css';


export const Contacts = () => {
	return (
		<div className={styles.container}>
			<div>+7 555 555-55-55</div>
			<div className={styles.iconsContainer}>
				<Image
					src='./telegram.svg'
					alt='telegram'
					width={16.68}
					height={13.99}
				/>
				<Image
					src='./phone.svg'
					alt='phone'
					width={16}
					height={15.2}
				/>
				<Image
					src='./whatsup.svg'
					alt='whatsup'
					width={16}
					height={16}
				/>
			</div>
		</div>
	);
};