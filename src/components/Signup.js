import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export default function Signup() {         //會自動導向首頁，因為在app.js有寫好
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	// const { signup } = useAuthState();  // 取context的value內的signup function
	const navigate = useNavigate();

	const handleSubmit = async(e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		setError('');
		setLoading(true);

		try {
			setLoading(true);
			const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
			console.log(userCredential);
			navigate('/');
		} catch (e) {
			setError(e.message);
		}
		setLoading(false);
	};

	return (
		<>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit} >
				<input name='email' placeholder='email' type='email' required/>
				<input name='password' placeholder='password' type='password' required/>
				<button type='submit' disabled={loading} > Signup </button>
				{error && <div>{error}</div>}
			</form>
		</>
	)
}