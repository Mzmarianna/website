import { useEffect, useState } from 'react';
import { auth } from '../api/firebase';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  if (user === undefined) return null;
  if (!user) return <Navigate to="/" />;
  return children;
}
