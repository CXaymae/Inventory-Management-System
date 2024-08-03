import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function LandingPage() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/signup');
  };

  const handleSignIn = () => {
    router.push('/signin');
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
      <Typography variant="h2" color="#333" textAlign="center">
        Welcome to the Inventory Management System
      </Typography>
      <Button variant="contained" onClick={handleSignUp}>
        Sign Up
      </Button>
      <Button variant="contained" onClick={handleSignIn}>
        Sign In
      </Button>
    </Box>
  );
}
