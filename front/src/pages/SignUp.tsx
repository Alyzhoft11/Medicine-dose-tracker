import { useState } from 'react';
import { Link, useNavigate } from '@reach/router';
import axios from 'axios';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const signUp = async () => {
		const { data } = await axios.post('http://localhost:4000/api/user/signup', {
			name,
			email,
			password,
		});

		if (data) {
			localStorage.setItem('Token', data.token);
			navigate('/');
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		signUp();

		// console.log(name);
		// console.log(email);
		// console.log(password);

		setName('');
		setEmail('');
		setPassword('');

		// navigate('/');
	};

	return (
		<div>
			<div className="flex justify-center my-16">
				<div className="bg-white shadow-md sm:w-5/6 md:w-5/6 lg:w-1/4 xl:w-1/4 h-signup rounded-lg">
					<div className="flex justify-center">
						<h1 className="text-3xl font-bold mt-5">Create Account</h1>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="flex justify-center">
							<Input value={name} onChange={(e) => setName(e.target.value)} className="px-2 mt-10 mx-3 w-full h-10" type="text" placeholder="Name" />
						</div>
						<div className="flex justify-center">
							<Input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-2 mt-5 mx-3" type="email" placeholder="Email" />
						</div>

						<div className="flex justify-center">
							<Input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-2 mt-5 mx-3" type="password" placeholder="Password" />
						</div>
						<div className="flex justify-center">
							<Button type="submit" className="w-full my-5 mx-3 flex justify-center text-lg font-bold">
								Sign Up
							</Button>
						</div>
					</form>
					<div className="flex justify-center mb-5 space-x-2">
						<p>Already have an account?</p>
						<div>
							<Link className="font-medium text-indigo-600 hover:text-indigo-400 hover:underline" to="/">
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
