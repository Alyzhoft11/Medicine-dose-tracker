import { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email);
		console.log(password);

		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<div className="flex justify-center my-16">
				<div className="bg-white shadow-md sm:w-5/6 md:w-5/6 lg:w-1/4 xl:w-1/4 h-signup rounded-lg">
					<div className="flex justify-center">
						<h1 className="text-3xl font-bold mt-5">Login</h1>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="flex justify-center">
							<Input value={email} className="w-full px-2 mt-5 mx-3" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
						</div>

						<div className="flex justify-center">
							<Input value={password} className="w-full px-2 mt-5 mx-3" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
						</div>
						<div className="flex justify-center">
							<Button type="submit" className="w-full my-5 mx-3 flex justify-center text-lg font-bold">
								Login
							</Button>
						</div>
					</form>
					<div className="flex justify-center mb-5 space-x-2">
						<p>Don't have an account?</p>
						<div>
							<a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-400 hover:underline">
								Sign Up
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
