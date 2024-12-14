'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { 
  Box, 
  TextField, 
  Button,
  Container,
  Link,
  Alert
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './Login.module.css';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials.email, credentials.password);
      router.push('/dashboard'); // Redirect after successful login
    } catch (error) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className={styles.container}>
      <Box className={styles.loginCard}>
        {error && <Alert severity="error" className={styles.alert}>{error}</Alert>}
        <Box className={styles.topIcon}>
          <PersonIcon className={styles.userIcon} />
        </Box>
        <Box className={styles.iconGroup}>
          <LockIcon className={styles.smallIcon} />
          <VisibilityIcon className={styles.smallIcon} />
        </Box>
        <Box component="form" onSubmit={handleSubmit} className={styles.form}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Email"
            name="email"
            type="email"
            value={credentials.email}
            onChange={handleChange}
            className={styles.input}
          />
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            className={styles.input}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={styles.loginButton}
          >
            Login
          </Button>
          <Link href="#" className={styles.forgotPassword}>
            Forgot Password?
          </Link>
        </Box>
      </Box>
    </Container>
  );
}