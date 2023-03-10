import { Consultation } from '../Consultaion/Consultation';
import { MainHeading } from '../MainHeading/MainHeading';
import styles from './MainContent.module.css';


export const MainContent = () => {
	return (
		<div className={styles.container}>
			<MainHeading />
			<Consultation />
		</div>
	);
};