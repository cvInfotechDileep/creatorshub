"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreatorSettings({params}) {
  const { username } = params || {};
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (username !== storedUsername) {
      router.push('/signin'); // Redirect to Not Found page
      return;
    }

    setUserData({ username, name, email });
  }, [username, router]);

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
  