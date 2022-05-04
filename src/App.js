import React from 'react';
import { BrowserRouter,	Routes,	Route } from "react-router-dom";
import HomePage from './components/Homepage.js';
import ListPage from './components/Listpage.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import { AuthContextProvider, useAuthState } from './firebase/AuthContext.js';
import { Link } from 'react-router-dom';


const AuthenticatedRoute = ({ component: C, ...props }) => {
	const { isAuthenticated } = useAuthState();
	return (
		<Route
			{...props}
			render={routeProps =>
				isAuthenticated ? <C {...routeProps} /> : <Redirect to='/login' />
			}
		></Route>
	) 
}

const UnauthenticatedRoute = ({ component: C, ...props }) => {
	const { isAuthenticated } = useAuthState();
	return (
		<Route
			{...props}
			render={routeProps =>
				!isAuthenticated ? <C {...routeProps} /> : <Redirect to='/' />
			}
		/>
	);
};

export default function App() {
	return (
		<>	
			<AuthContextProvider>
				<BrowserRouter>
					<div>
						<Link to='/'>Home</Link> | <Link to='/login'>Login</Link> |
						<Link to='/signup'>SingUp</Link>
					</div>
					<Routes>
						<UnauthenticatedRoute path="/signup" element={<Signup />} />
						<UnauthenticatedRoute path="/login" element={<Login />} />
						<AuthenticatedRoute path="/" element={<HomePage />}/>
						<AuthenticatedRoute path="/list" element={<ListPage />} />
					</Routes>
				</BrowserRouter>
			</AuthContextProvider>
		</>
	)
};
