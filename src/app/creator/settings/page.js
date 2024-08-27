"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreatorSettings() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if we are in the browser environment
    if (typeof window !== 'undefined') {
      const storedUsername = localStorage.getItem('username');
      const name = localStorage.getItem('name');
      const email = localStorage.getItem('email');

      if (!storedUsername) {
        router.push('/signin'); // Redirect to Not Found page
        return;
      }

      setUserData({ name, email });
    }
  }, [router]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  
    return (
      <div>
        <h1>Settings</h1>
        <p>Manage your account settings and preferences here.</p>
      </div>
    );
  }
  