import express, { Request, Response } from 'express';
import { verifyToken } from '../middleware/auth';
import { getMedications, addMedication, deleteMedication, updateMedication } from '../controller/meds';

const router = express.Router();

router.get('/', verifyToken, async (req: Request, res: Response) => {
	const userData: getData = req.user;

	const meds = await getMedications(userData.userId);
	res.json(meds);
});

router.post('/', verifyToken, async (req: Request, res: Response) => {
	const userData = req.user;
	const data: postData = req.body;
	const med = await addMedication(data.medication, data.dosage, data.frequency, userData.id);

	res.json(med);
});

router.delete('/', verifyToken, async (req: Request, res: Response) => {
	const data: deleteData = req.body;

	const med = await deleteMedication(data.medId);
	res.json(med);
});

router.put('/', verifyToken, async (req: Request, res: Response) => {
	const data: putData = req.body;

	const med = await updateMedication(data.medId, data.medication, data.dosage, data.frequency);
	res.json(med);
});

module.exports = router;
