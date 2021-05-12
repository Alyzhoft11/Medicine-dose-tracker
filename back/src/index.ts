import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

const prisma = new PrismaClient();

async function main() {
	// await prisma.user.create({
	// 	data: {
	// 		name: 'Alex',
	// 		email: 'alex1@alex.com',
	// 		meds: {
	// 			create: {
	// 				medication: 'ibuprofen',
	// 				dosage: '2.5',
	// 				frequency: '3 times a day',
	// 			},
	// 		},
	// 	},
	// });

	const allUsers = await prisma.user.findMany({
		include: {
			meds: true,
		},
	});

	console.dir(allUsers, { depth: null });
}

main()
	.catch((e) => {
		throw e;
	})

	.finally(async () => {
		await prisma.$disconnect();
	});

app.listen(4000, () => {
	console.log('Working');
});
