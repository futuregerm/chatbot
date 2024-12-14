'use client';
import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button,
  Container,
  IconButton,
  Link
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './Login.module.css';

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', credentials);
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
        {/* Top Icon */}
        <Box className={styles.topIcon}>
          <PersonIcon className={styles.userIcon} />
        </Box>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} className={styles.form}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Username"
            name="username"
            value={credentials.username}
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