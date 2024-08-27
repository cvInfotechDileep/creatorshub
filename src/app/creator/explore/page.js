"use client"
import Allcreators from "@/components/Allcreators";
import PrivateRoute from "@/components/PrivateRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreatorExplore({ params }) {
  const { username } = params || {};
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUsername = window.localStorage.getItem('username');
    const name = window.localStorage.getItem('name');
    const email = window.localStorage.getItem('email');

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
    <PrivateRoute allowedRoles={['creator']}>
      <Allcreators />
    </PrivateRoute>
  );
}
