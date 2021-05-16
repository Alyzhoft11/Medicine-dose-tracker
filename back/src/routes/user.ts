import express from 'express';
import { signup, login } from '../controller/user';

const router = express.Router();

type loginData = {
	email: string;
	password: string;
};

router.get('/signup', async (req, res) => {
	const user = await signup();
	res.json(user);
});

router.post('/login', async (req, res) => {
	const data: loginData = req.body;
	const user = await login(data.email, data.password);
	res.json(user);
});

module.exports = router;
