import express from 'express';
import { getMedications, addMedication, deleteMedication, updateMedication } from '../controller/meds';

const router = express.Router();

router.get('/', async (req, res) => {
	const data: getData = req.body;

	const meds = await getMedications(data.userId);
	res.json(meds);
});

router.post('/', async (req, res) => {
	const data: postData = req.body;
	const med = await addMedication(data.medication, data.dosage, data.frequency, data.userId);

	res.json(med);
});

router.delete('/', async (req, res) => {
	const data: deleteData = req.body;

	const med = await deleteMedication(data.medId);
	res.json(med);
});

router.put('/', async (req, res) => {
	const data: putData = req.body;

	const med = await updateMedication(data.medId, data.medication, data.dosage, data.frequency);
	res.json(med);
});

module.exports = router;
