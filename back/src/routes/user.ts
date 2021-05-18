import express from 'express';
import { signup, login } from '../controller/user';

const router = express.Router();

router.post('/signup', async (req, res) => {
	const data: signupData = req.body;
	const user = await signup(data.email, data.password, data.name);
	res.json(user);
});

router.post('/login', async (req, res) => {
	const data: loginData = req.body;
	const user = await login(data.email, data.password);
	res.json(user);
});

module.exports = router;
