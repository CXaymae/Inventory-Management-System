import { useState } from 'react';
import LandingPage from './components/Inventory';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Inventory from './components/Inventory';

export default function Home() {
  const [view, setView] = useState('landing');

  const handleSignUp = () => setView('signUp');
  const handleSignIn = () => setView('signIn');
  const handleBack = () => setView('landing');
  const handleOpenInventory = () => setView('inventory');

  return (
    <>
      {view === 'landing' && (
        <LandingPage onSignUp={handleSignUp} onSignIn={handleSignIn} />
      )}
      {view === 'signUp' && <SignUp onBack={handleBack} />}
      {view === 'signIn' && <SignIn onBack={handleBack} />}
      {view === 'inventory' && <Inventory />}
    </>
  );
}
