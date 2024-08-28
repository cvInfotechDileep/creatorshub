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
