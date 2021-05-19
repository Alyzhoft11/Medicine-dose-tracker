import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
	const [login, setLogin] = useState(false);

	if (!login) {
		return <Login />;
	} else {
		return (
			<div>
				<Home />
			</div>
		);
	}
}
