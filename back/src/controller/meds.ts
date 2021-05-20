import { prisma } from '../utils/prisma';

export async function getMedications(id: number) {
	try {
		const meds = await prisma.medications.findMany({
			where: {
				userId: id,
			},
		});

		return meds;
	} catch (error) {
		return error;
	}
}

export async function addMedication(medication: string, dosage: string, frequency: string, userId: number) {
	const med = await prisma.medications.create({
		data: {
			medication,
			dosage,
			frequency,
			userId,
		},
	});

	return med;
}

export async function updateMedication(id: number, medication: string, dosage: string, frequency: string) {
	try {
		const med = await prisma.medications.update({
			where: {
				id,
			},

			data: {
				medication,
				dosage,
				frequency,
			},
		});

		return med;
	} catch (error) {
		return error;
	}
}

export async function deleteMedication(id: number) {
	try {
		const med = await prisma.medications.delete({
			where: {
				id,
			},
		});

		return med;
	} catch (error) {
		return error;
	}
}
