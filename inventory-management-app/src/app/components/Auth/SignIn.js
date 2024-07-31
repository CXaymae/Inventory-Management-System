// src/app/components/SignIn.js
import { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/inventory'); // Redirect to inventory page on successful signin
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignIn;
