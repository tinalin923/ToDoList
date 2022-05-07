import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export default function Login() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	
	const handleSubmit = async(e) => {
		e.preventDefault();
		const { email, password } = e.target.elements

		try {
			setLoading(true);
			const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
			console.log(userCredential);
			navigate('/list');
		} catch (e) {
			alert(e.message);
		}
		setLoading(false);
		
	};
		
  return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input name='email' placeholder='email' type='email' required/>
				<input name='password' placeholder='password' type='password' required/>
				<button type='submit' disabled={loading} >Login</button>
			</form>
		</>
	)
}