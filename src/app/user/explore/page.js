"use client"
import Allcreators from "@/components/Allcreators";
import PrivateRoute from "@/components/PrivateRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserExplore() {
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
    <PrivateRoute allowedRoles={['fan']}>
      <Allcreators />
    </PrivateRoute>
  );
}
