import { PrismaClient } from '@prisma/client';
import SecurePassword from 'secure-password';

const securePassword = new SecurePassword();

export const hashPassword = async (password: string) => {
	return await securePassword.hash(Buffer.from(password));
};

export const verifyPassword = async (password: string, hash: Buffer) => {
	return await securePassword.verify(Buffer.from(password), hash);
};

export const authenticateUser = async (email: string, password: string) => {
	const prisma = new PrismaClient();

	const user = await prisma.user.findFirst({
		where: {
			email: email,
		},
	});

	if (!user || !user.hashedPassword) {
		throw new Error('Email not found');
	}

	const status = await verifyPassword(password, user.hashedPassword);

	console.log(status);
};
