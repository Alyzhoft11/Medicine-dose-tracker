import express from 'express';
import { PrismaClient } from '@prisma/client';
import { hashPassword, authenticateUser } from '../src/utils/auth';

const app = express();

const prisma = new PrismaClient();

async function main() {
	// await prisma.user.create({
	// 	data: {
	// 		Name: 'Alex',
	// 		email: 'alex@alex.com',
	// 		hashedPassword: await hashPassword('Test'),
	// 	},
	// });
	// const allUsers = await prisma.user.findMany({
	// 	include: {
	// 		meds: true,
	// 	},
	// });
	// console.dir(allUsers, { depth: null });
	// const test = await hassPassword('TEST');

	authenticateUser('alex@alex.com', 'Test');
}

// meds: {
// 	create: {
// 		medication: 'ibuprofen',
// 		dosage: '2.5',
// 		frequency: '3 times a day',
// 	},
// },

app.get('/test', async (_, res) => {
	main()
		.catch((e) => {
			throw e;
		})

		.finally(async () => {
			await prisma.$disconnect();
		});
});

app.listen(4000, () => {
	console.log('Working');
});
