import React, { useState, useEffect, useContext, createContext } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
    
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, error }} {...props} />
  
  );
};

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return {...auth, isAuthenticated:auth.user != null}
}