"use client"
import ExploreCreators from "@/components/ExploreCreators";
import ExploreStreamers from "@/components/ExploreStreamers";
import PrivateRoute from "@/components/PrivateRoute";
import TopUsersTab from "@/components/TopUsersTab";
import UserProfileSection from "@/components/UserProfileSection";
import UsersTab from "@/components/UsersTab";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function UserMyPage() {
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
    <PrivateRoute allowedRoles={['fan']}>
      <Container>
        <Row>
          <Col md={9} sm={12}>
            <UserProfileSection />
          </Col>
          <Col md={3} sm={12}>
            <UsersTab />
            <ExploreCreators />
            <ExploreStreamers />
            <TopUsersTab />
            </Col>
        </Row>
      </Container>
    </PrivateRoute>
  );
}
