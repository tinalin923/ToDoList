import React from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate, useLocation } from "react-router-dom";
import HomePage from './components/Homepage.js';
import ListPage from './components/Listpage.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { AuthContextProvider, useAuthState } from './components/contexts/AuthContext.js';

function RequireAuth({children}) {
	const { currentUser } = useAuthState();
	let location = useLocation();
	if (!currentUser) {
		return <Navigate to="/login" state={{ from: location }} />;
	}
	return children;
}

export default function App() {
	return (
		<>	
			<BrowserRouter>
				<AuthContextProvider>
					<div>
						<Link to='/'>Home</Link> |
						<Link to='/login'>Login</Link> |
						<Link to='/signup'>SingUp</Link>
					</div>
					<Routes>
						<Route path="/" element={
							<HomePage />} />
						<Route path="/signup" element={
							<Signup />} />
						<Route path="/login" element={
							<Login />} />
						<Route path="/list" element={
							<RequireAuth><ListPage /></RequireAuth>} />
					</Routes>
				</AuthContextProvider>
			</BrowserRouter>
			
		</>
	)
};
