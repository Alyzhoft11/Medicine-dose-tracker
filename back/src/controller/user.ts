import { prisma } from '../utils/prisma';
import { hashPassword, authenticateUser } from '../utils/auth';

export async function signup() {
	const user = await prisma.user.create({
		data: {
			Name: 'alex',
			email: 'alex@alex.com',
			hashedPassword: await hashPassword('Test'),
		},
	});

	return user;
}

export async function login(email: string, password: string) {
	const user = await authenticateUser(email, password);

	return user;
}
