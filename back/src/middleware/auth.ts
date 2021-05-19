import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers['authorization'];

	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) {
		return res.sendStatus(401);
	}

	jwt.verify(token, 'Test', (err, user) => {
		if (err) {
			return res.sendStatus(403);
		} else {
			req.user = user;
			next();
		}
	});
}
