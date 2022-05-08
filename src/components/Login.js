import React, { useState, useRef } from 'react';
import { auth } from '../firebase/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export default function Login() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const emailRef = useRef('');
	const passwordRef = useRef('');

	const handleSubmit = async() => {
		setLoading(true);
		try {
			const userCredential = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
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
			<div>
				<input ref={emailRef} name='email' placeholder='email' type='email' required/>
				<input ref={passwordRef} name='password' placeholder='password' type='password' required/>
				<button type='submit' disabled={loading} onClick={handleSubmit}>Login</button>
			</div>
		</>
	)
}