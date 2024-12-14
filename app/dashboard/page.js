'use client';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
