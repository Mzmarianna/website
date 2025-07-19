import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIza....",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  appId: "1:1234567890:web:abcd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, signInWithPopup, signOut, provider };
