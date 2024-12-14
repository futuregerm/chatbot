'use client';
import Login from './components/Login';
import PublicRoute from '../components/PublicRoute';

export default function LoginPage() {
  return (
    <PublicRoute>
      <Login />
    </PublicRoute>
  );
}