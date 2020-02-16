import { Manager } from '../../src/manager/Manager';

export const toSnapshot = (inst: Manager) => ({
	...inst,
	root: 'root://',
});
