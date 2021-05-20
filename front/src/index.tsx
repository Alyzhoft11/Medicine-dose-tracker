import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouteComponentProps, Router } from '@reach/router';
import { StoreProvider } from 'easy-peasy';
import store from './store';
import './index.css';
import App from '../src/App';
import SignUp from '../src/pages/SignUp';

const queryClient = new QueryClient();

let AppRoute = (props: RouteComponentProps) => <App />;
let SignUpRoute = (props: RouteComponentProps) => <SignUp />;

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<StoreProvider store={store}>
				<Router>
					<AppRoute path="/" />
					<SignUpRoute path="/signup" />
				</Router>
			</StoreProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
