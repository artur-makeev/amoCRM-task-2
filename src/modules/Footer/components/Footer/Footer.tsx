import { About } from '../About/About';
import { Contacts } from '../Contancts/Contacts';
import { Copyright } from '../Copyright/Copyright';
import { Menu } from '../Menu/Menu';
import styles from './Footer.module.css';


export const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.menuContainer}>
				<div className={styles.aboutAndMenu}>
					<About />
					<Menu />
				</div>
				<Contacts />
			</div>
			<div className={styles.copyrightContainer}>
				<Copyright />
			</div>
		</div>
	);
};