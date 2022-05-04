import { initializeApp } from 'firebase/app';
//for firestore
import { getFirestore } from "firebase/firestore";
//for firebase auth


const firebaseConfig = {
    apiKey: "AIzaSyA1JV6ZDqsnR0p-ozvYQXEAeztE1NTNfDg",
    authDomain: "tinalin923.firebaseapp.com",
    projectId: "tinalin923",
    storageBucket: "tinalin923.appspot.com",
    messagingSenderId: "967031944451",
    appId: "1:967031944451:web:4c93292cf802855da0a536"
};
  
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

    
//for auth
// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) = {
//   const [user, setUser] = useState('');
//   const [error, setError] = useState('');
    
//   useEffect(()=> {
// 		const unsubscribe = onAuthStateChange(getAuth(), setUser, setError)
	
//   },[])

//     return(
//         <AuthContext.Provider value={ auth } >
//             {children}
//         </AuthContext.Provider>
    
//     )
// }
