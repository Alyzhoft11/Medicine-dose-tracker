import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { signup, login } from '../controller/user';

const router = express.Router();

router.post('/signup', async (req: Request, res: Response) => {
	const data: signupData = req.body;
	const user = await signup(data.email, data.password, data.name);

	const token = jwt.sign(user, 'Test');

	res.json({ user, token });
});

router.post('/login', async (req: Request, res: Response) => {
	const data: loginData = req.body;
	const user = await login(data.email, data.password);

	const token = jwt.sign(user, 'Test');

	res.json({ user, token });
});

module.exports = router;
