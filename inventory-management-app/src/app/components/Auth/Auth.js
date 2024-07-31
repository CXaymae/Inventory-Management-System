// src/app/components/Auth.js
import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  if (user) {
    return (
      <div>
        <button onClick={handleSignOut}>Sign Out</button>
        {children}
      </div>
    );
  }

  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
