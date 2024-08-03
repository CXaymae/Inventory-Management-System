import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust the path if necessary

export default function SignUp({ onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect or update UI as needed
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap={2}
      bgcolor="#f0f0f0"
    >
      <Typography variant="h4" color="#333" textAlign="center">
        Sign Up
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleSignUp}>
        Sign Up
      </Button>
      <Button variant="text" onClick={onBack}>
        Back
      </Button>
    </Box>
  );
}
