"use client"
import Allcreators from "@/components/Allcreators";
import PrivateRoute from "@/components/PrivateRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserExplore() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true); // Now we know we are in the client environment
  // }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUsername = window.localStorage.getItem('username');
      const name = window.localStorage.getItem('name');
      const email = window.localStorage.getItem('email');

      if (!storedUsername) {
        router.push('/signin'); // Redirect to sign-in page
        return;
      }

      setUserData({ name, email });
    }
    // if (isClient) {
    //   const storedUsername = window.localStorage.getItem('username');
    //   const name = window.localStorage.getItem('name');
    //   const email = window.localStorage.getItem('email');

    //   if (!storedUsername) {
    //     router.push('/signin'); // Redirect to sign-in page
    //     return;
    //   }

    //   setUserData({ name, email });
    // }
  }, [router]);

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
