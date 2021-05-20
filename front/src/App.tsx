import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
	const [login, setLogin] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('Token');

		if (token != null) {
			setLogin(true);
		}
	}, []);

	if (!login) {
		return <Login setLogin={setLogin} />;
	} else {
		return (
			<div>
				<Home />
			</div>
		);
	}
}
