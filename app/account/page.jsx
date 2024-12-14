'use client';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function Account() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div>
        <nav>
          <Link href="/dashboard">Back to Dashboard</Link>
        </nav>
        <h1>Account Details</h1>
        <div>
          <p>Email: {user?.email}</p>
        </div>
      </div>
    </ProtectedRoute>
  );
} 