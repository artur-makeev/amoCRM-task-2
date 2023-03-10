import { Contacts } from '../Contacts/Contacts';
import { Logo } from '../Logo/Logo';
import { MainMenu } from '../MainMenu/MainMenu';
import styles from './Navbar.module.css';


export const Navbar = () => {
	return (
		<div className={styles.container}>
			<Logo />
			<MainMenu />
			<Contacts />
		</div>
	);
};