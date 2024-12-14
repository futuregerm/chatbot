'use client';
import { CircularProgress, Box } from '@mui/material';

export default function LoadingState() {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  );
} 