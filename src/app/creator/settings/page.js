"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreatorSettings() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Now we know we are in the client environment
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedUsername = localStorage.getItem('username');
      const name = localStorage.getItem('name');
      const email = localStorage.getItem('email');

      if (!storedUsername) {
        router.push('/signin'); // Redirect to sign-in page
        return;
      }

      setUserData({ name, email });
    }
  }, [router, isClient]);

  if (!userData) {
    return <div>Loading...</div>;
  }

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
  