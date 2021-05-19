// User Types
type loginData = {
	email: string;
	password: string;
};

type signupData = {
	email: string;
	password: string;
	name?: string;
};

// Meds Types
type getData = {
	userId: number;
};

type postData = {
	medication: string;
	dosage: string;
	frequency: string;
};

type deleteData = {
	medId: number;
};

type putData = {
	medId: number;
	medication: string;
	dosage: string;
	frequency: string;
};

interface IUserRequest extends Request {
	user: any;
}
