import { Action, action } from 'easy-peasy';

interface User {
	email: string;
	name?: string;
	id: number;
	hashedPassword: any;
}

export interface UserModel {
	user: User;
	add: Action<UserModel, User>;
}

const user: UserModel = {
	user: {
		email: '',
		id: 0,
		name: '',
		hashedPassword: '',
	},
	add: action((state, payload) => {
		state.user = payload;
	}),
};

export default user;
