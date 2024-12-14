'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function PublicRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    } else {
      setAuthorized(true);
    }
  }, [user, router]);

  return authorized ? children : null;
} 