"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PrivateRoute from '../../../components/PrivateRoute';

export default function UserDashboard({ params }) {
  const { username } = params;
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (username !== storedUsername) {
      router.push('/not-found'); // Redirect to Not Found page
      return;
    }

    setUserData({ username, name, email });
  }, [username, router]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <PrivateRoute allowedRoles={['fan']}>
      <div>
        <h1>User Dashboard</h1>
        <p>Username: {userData.username}</p>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    </PrivateRoute>
  );
}

