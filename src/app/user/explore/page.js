"use client"
import Allcreators from "@/components/Allcreators";
import PrivateRoute from "@/components/PrivateRoute";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UserExplore() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (!storedUsername) {
      router.push('/signin'); // Redirect to Not Found page
      return;
    }

    setUserData({ name, email });
  }, [router]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <PrivateRoute allowedRoles={['fan']}>
      <Allcreators />
    </PrivateRoute>
  );
}
