import { prisma } from '../utils/prisma';
import { hashPassword, authenticateUser } from '../utils/auth';

export async function signup(email: string, password: string, name?: string) {
	const foundUser = await prisma.user.findFirst({
		where: {
			email: email,
		},
	});

	if (foundUser == null) {
		const user = await prisma.user.create({
			data: {
				Name: name,
				email: email,
				hashedPassword: await hashPassword(password),
			},
		});
		return user;
	} else {
		return { error: 'User found with that email' };
	}
}

export async function login(email: string, password: string) {
	const user = await authenticateUser(email, password);

	return user;
}
