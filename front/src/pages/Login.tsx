import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function Login() {
	return (
		<div>
			<div className="flex justify-center my-16">
				<div className="bg-white shadow-md sm:w-5/6 md:w-5/6 lg:w-1/4 xl:w-1/4 h-signup rounded-lg">
					<div className="flex justify-center">
						<h1 className="text-3xl font-bold mt-5">Login</h1>
					</div>
					<form>
						<div className="flex justify-center">
							<Input className="w-full px-2 mt-5 mx-3" labelText="Test" type="email" placeholder="Email" />
						</div>

						<div className="flex justify-center">
							<Input className="w-full px-2 mt-5 mx-3" labelText="Test" type="password" placeholder="Password" />
						</div>
						<div className="flex justify-center">
							<Button className="w-full my-5 mx-3 flex justify-center text-lg font-bold">Sign Up</Button>
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
