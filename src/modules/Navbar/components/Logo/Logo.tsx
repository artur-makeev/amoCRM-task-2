import { montserrat } from '@/utils/fonts';
import Image from 'next/image';
import * as React from 'react';
import styles from './Logo.module.css';


export const Logo = () => {
	return (
		<div className={styles.mobile}>
			<div className={styles.logosContainer}>
				<Image
					src='./logo-icon.svg'
					alt='logo'
					width={30.05}
					height='24'
				/>
				<Image
					src='./logo-word.svg'
					alt='logo word'
					width={95.87}
					height={14.14}
				/>
			</div>
			<div className={`${styles.logoComment} ${montserrat.className}`}>
				крупный интегратор CRM в Росcии и ещё 8 странах
			</div>
		</div>
	);
};