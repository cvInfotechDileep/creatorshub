"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ children, allowedRoles }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      const userType = localStorage.getItem('user_type');

      if (!token) {
        router.push('/signin');
        return;
      }

      if (!allowedRoles.includes(userType)) {
        router.push('/permission-denied');
        return;
      }

      setLoading(false); // Allow access and stop loading
    }
  }, [router, allowedRoles]);

  if (loading) {
    return <div>Loading...</div>; // Loading indicator
  }

  return children;
};

export default PrivateRoute;
