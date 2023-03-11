import { GreyShining } from '../GreyShining/GreyShining';
import { PurpleShining } from '../PurpleShining/PurpleShining';
import { RedShining } from '../RedShining/RedShining';
import { YellowShining } from '../YellowShining/YellowShining';


export const Shining = () => {
	return (
		<>
			<RedShining />
			<PurpleShining />
			<GreyShining />
			<YellowShining />
		</>
	);
};