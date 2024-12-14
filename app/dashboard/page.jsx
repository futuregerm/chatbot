'use client';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import LoadingState from '../components/LoadingState';
import { Box, Typography, Button, Alert } from '@mui/material';

export default function Dashboard() {
  const { user, logout, isLoading, authError } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <ProtectedRoute>
      <Box p={4}>
        <nav>
          <Link href="/account">Account Details</Link>
        </nav>
        {authError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {authError}
          </Alert>
        )}
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome, {user?.email}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleLogout}
          sx={{ mt: 2 }}
        >
          Logout
        </Button>
      </Box>
    </ProtectedRoute>
  );
} 