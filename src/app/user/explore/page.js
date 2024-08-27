"use client"
import Allcreators from "@/components/Allcreators";
import PrivateRoute from "@/components/PrivateRoute";

export default function UserExplore() {
  
  return (
    <PrivateRoute allowedRoles={['fan']}>
      <Allcreators />
    </PrivateRoute>
  );
}
