'use client';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div>
        <nav>
          <Link href="/account">Account Details</Link>
        </nav>
        <h1>Dashboard</h1>
        <p>Welcome {user?.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </ProtectedRoute>
  );
} 