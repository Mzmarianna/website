import { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

export default function LoginButton() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      if (u) navigate('/dashboard');
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error', err);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  return user ? (
    <div>
      <p>👋 Welcome, {user.displayName}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <button onClick={handleLogin}>Login with Google</button>
  );
}
